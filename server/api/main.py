from fastapi import FastAPI #type:ignore
from fastapi.middleware.cors import CORSMiddleware #type:ignore

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
def findSimilarMovies(movie: str):
    movieList = [
        {
            'avgVote': 1457,
            'id': 1241982,
            'lang': "en",
            'poster': "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            'releaseDate': "2024-11-21",
            'title': "Moana 2"
        },
        {
            'avgVote': 1457,
            'id': 1241982,
            'lang': "en",
            'poster': "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            'releaseDate': "2024-11-21",
            'title': "Moana 2"
        },
        {
            'avgVote': 1457,
            'id': 1241982,
            'lang': "en",
            'poster': "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            'releaseDate': "2024-11-21",
            'title': "Moana 2"
        },
        {
            'avgVote': 1457,
            'id': 1241982,
            'lang': "en",
            'poster': "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            'releaseDate': "2024-11-21",
            'title': "Moana 2"
        },
        {
            'avgVote': 1457,
            'id': 1241982,
            'lang': "en",
            'poster': "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            'releaseDate': "2024-11-21",
            'title': "Moana 2"
        },
        {
            'avgVote': 1457,
            'id': 1241982,
            'lang': "en",
            'poster': "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            'releaseDate': "2024-11-21",
            'title': "Moana 2"
        },
        {
            'avgVote': 1457,
            'id': 1241982,
            'lang': "en",
            'poster': "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            'releaseDate': "2024-11-21",
            'title': "Moana 2"
        },
        {
            'avgVote': 1457,
            'id': 1241982,
            'lang': "en",
            'poster': "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            'releaseDate': "2024-11-21",
            'title': "Moana 2"
        },
        {
            'avgVote': 1457,
            'id': 1241982,
            'lang': "en",
            'poster': "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            'releaseDate': "2024-11-21",
            'title': "Moana 2"
        },
        {
            'avgVote': 1457,
            'id': 1241982,
            'lang': "en",
            'poster': "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            'releaseDate': "2024-11-21",
            'title': "Moana 2"
        },
        {
            'avgVote': 1457,
            'id': 1241982,
            'lang': "en",
            'poster': "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            'releaseDate': "2024-11-21",
            'title': "Moana 2"
        },
        {
            'avgVote': 1457,
            'id': 1241982,
            'lang': "en",
            'poster': "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            'releaseDate': "2024-11-21",
            'title': "Moana 2"
        },
        {
            'avgVote': 1457,
            'id': 1241982,
            'lang': "en",
            'poster': "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            'releaseDate': "2024-11-21",
            'title': "Moana 2"
        },
        {
            'avgVote': 1457,
            'id': 1241982,
            'lang': "en",
            'poster': "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            'releaseDate': "2024-11-21",
            'title': "Moana 2"
        },
        {
            'avgVote': 1457,
            'id': 1241982,
            'lang': "en",
            'poster': "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            'releaseDate': "2024-11-21",
            'title': "Moana 2"
        },
    ]

    return {"movies": movieList}

