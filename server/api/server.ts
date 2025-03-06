import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/find-similar-movies/:movie', (req: Request, res: Response) => {
    const movie = req.params.movie;

    const movies = [
        {
            avgVote: 1457,
            id: 1241982,
            lang: "en",
            poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            releaseDate: "2024-11-21",
            title: "Moana 2"
        },
        {
            avgVote: 1457,
            id: 1241982,
            lang: "en",
            poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            releaseDate: "2024-11-21",
            title: "Moana 2"
        },
        {
            avgVote: 1457,
            id: 1241982,
            lang: "en",
            poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            releaseDate: "2024-11-21",
            title: "Moana 2"
        },
        {
            avgVote: 1457,
            id: 1241982,
            lang: "en",
            poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            releaseDate: "2024-11-21",
            title: "Moana 2"
        },
        {
            avgVote: 1457,
            id: 1241982,
            lang: "en",
            poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            releaseDate: "2024-11-21",
            title: "Moana 2"
        },
        {
            avgVote: 1457,
            id: 1241982,
            lang: "en",
            poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            releaseDate: "2024-11-21",
            title: "Moana 2"
        },
        {
            avgVote: 1457,
            id: 1241982,
            lang: "en",
            poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            releaseDate: "2024-11-21",
            title: "Moana 2"
        },
        {
            avgVote: 1457,
            id: 1241982,
            lang: "en",
            poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            releaseDate: "2024-11-21",
            title: "Moana 2"
        },
        {
            avgVote: 1457,
            id: 1241982,
            lang: "en",
            poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            releaseDate: "2024-11-21",
            title: "Moana 2"
        },
        {
            avgVote: 1457,
            id: 1241982,
            lang: "en",
            poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            releaseDate: "2024-11-21",
            title: "Moana 2"
        },
        {
            avgVote: 1457,
            id: 1241982,
            lang: "en",
            poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            releaseDate: "2024-11-21",
            title: "Moana 2"
        },
        {
            avgVote: 1457,
            id: 1241982,
            lang: "en",
            poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            releaseDate: "2024-11-21",
            title: "Moana 2"
        },
        {
            avgVote: 1457,
            id: 1241982,
            lang: "en",
            poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            releaseDate: "2024-11-21",
            title: "Moana 2"
        },
        {
            avgVote: 1457,
            id: 1241982,
            lang: "en",
            poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            releaseDate: "2024-11-21",
            title: "Moana 2"
        },
        {
            avgVote: 1457,
            id: 1241982,
            lang: "en",
            poster: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            releaseDate: "2024-11-21",
            title: "Moana 2"
        },
    ];

    res.status(200).json({'movies': movies});
})

app.listen(3001);