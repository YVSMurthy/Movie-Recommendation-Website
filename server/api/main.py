from fastapi import FastAPI, HTTPException #type:ignore
import httpx #type: ignore
from fastapi.middleware.cors import CORSMiddleware #type:ignore
from recommendation_model.recommendation_model import recommend
from dotenv import load_dotenv #type: ignore
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
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

    try:
        auth_token = os.getenv('AUTH_TOKEN')
        header = {
            "accept": "application/json",
            "Authorization": f"Bearer {auth_token}"
        }

        for i in recommended_movies:
            uri = f"https://api.themoviedb.org/3/movie/{i[0]}?language=en-US"
            async with httpx.AsyncClient() as client:
                response = await client.get(uri, headers=header)
                data = response.json()

                movie = {
                    'avgVote': data['vote_average'],
                    'id': data['id'],
                    'lang': data['original_language'],
                    'poster': data['poster_path'],
                    'releaseDate': data['release_date'],
                    'title': data['title']
                }

                movieList.append(movie)
        
        return {"movies": movieList}, 200

    except Exception as e:
        print("The error is: ",e)
        return {"message": "Internal Server Error"}, 500

