from fastapi import FastAPI, HTTPException #type:ignore
import httpx #type: ignore
from fastapi.middleware.cors import CORSMiddleware #type:ignore
from recommendation_model.recommendation_model import recommend
from dotenv import load_dotenv #type: ignore
import os
import uvicorn

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get('/')
def default():
    return {"message": "Successful connection"}, 200

@app.get('/find-similar-movies/{movie}')
async def findSimilarMovies(movie: str):
    movieList = []

    recommended_movies = recommend(movie, n_recommendations=10)

    auth_token = os.getenv('AUTH_TOKEN')
    header = {
        "accept": "application/json",
        "Authorization": f"Bearer {auth_token}"
    }

    async with httpx.AsyncClient() as client:
        for i in recommended_movies:
            try:
                uri = f"https://api.themoviedb.org/3/movie/{i[0]}"
                response = await client.get(uri, headers=header)
                print(f"Status for {i[0]}: {response.status_code}")
                if response.status_code != 200:
                    dummy_movie = {
                        'avgVote': 0.0,
                        'id': i[0],
                        'lang': 'unknown',
                        'poster': '',
                        'releaseDate': 'N/A',
                        'title': i[1]
                    }
                    movieList.append(dummy_movie)
                    continue
                else:
                    data = response.json()
                    movie = {
                        'avgVote': data.get('vote_average', 0.0),
                        'id': data.get('id', i[0]),
                        'lang': data.get('original_language', 'unknown'),
                        'poster': data.get('poster_path', ''),
                        'releaseDate': data.get('release_date', 'N/A'),
                        'title': data.get('title', i[1])
                    }

                    movieList.append(movie)

            except Exception as e:
                movieList.append({
                    'avgVote': 0.0,
                    'id': i[0],
                    'lang': 'unknown',
                    'poster': '',
                    'releaseDate': 'N/A',
                    'title': i[1]
                })

    return {"movies": movieList}, 200


if __name__ == "__main__":
    uvicorn.run("api.main:app", host="0.0.0.0", port=3001, reload=True)

