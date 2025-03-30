# 🎬 MovieMatcher - Smart Film Recommendation System

A sophisticated movie recommendation website that leverages machine learning to suggest films based on your preferences. Built with React.js, Tailwind CSS, and FastAPI, MovieMatcher offers an intuitive interface for discovering new movies tailored to your taste.

## ✨ Features

- **Smart Recommendations**: ML-powered suggestion engine that learns from your preferences
- **Search by Movie**: Find similar movies to ones you already enjoy
- **Filter by Country**: Discover popular films from specific regions
- **Genre Exploration**: Browse the best movies in your favorite genres
- **Latest Releases**: Stay updated with the newest additions to the film world
- **Detailed Information**: Access comprehensive details about each movie
- **Responsive Design**: Enjoy a seamless experience across all devices

## 🛠️ Tech Stack

### Frontend
- **React.js**: Modern, component-based UI library
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Vite**: Next-generation frontend tooling for faster development

### Backend
- **FastAPI**: High-performance Python framework for building APIs
- **Machine Learning Model**: Custom-built recommendation algorithm
- **TMDB API Integration**: External data source for comprehensive movie information

## 🖼️ Preview

<div align="center">
  <div style="display: flex; flex-direction: row; justify-content: center; gap: 20px; margin-bottom: 20px;">
    <img src="https://github.com/user-attachments/assets/f4e62373-a1b9-41d5-ba3b-4d4b10d3e6b2" alt="Home Screen" width="400"/>
    <img src="https://github.com/user-attachments/assets/4f193df5-e65d-4e42-87bb-f40539982d41" alt="Genre wise movies" width="400"/>
  </div>
  <div style="display: flex; flex-direction: row; justify-content: center; gap: 20px;">
    <img src="https://github.com/user-attachments/assets/1f14d227-5292-4d50-b029-1ee349a1206a" alt="Recommendations" width="400"/>
    <img src="https://github.com/user-attachments/assets/084e68a5-5518-4bf3-bd1e-6ea6b244e6dc" alt="Movie Details" width="400"/>
  </div>
</div>

## 🔧 Installation & Setup

### Clone the Repository
```bash
git clone https://github.com/YVSMurthy/Movie-Recommendation-Website.git
cd Movie-Recommendation-Website
```

### Backend Setup
```bash
# Navigate to server directory
cd server

# Create a Python virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the FastAPI server
fastapi run api/main.py --port 3001
```

### Frontend Setup
```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application should now be running:
- Frontend: http://localhost:5173 (default Vite port)
- Backend: http://localhost:3001

## 🔍 How It Works

1. **User Interaction**: Users can search for movies by name, browse by genre, or filter by country
2. **API Request**: The frontend sends requests to the FastAPI backend
3. **ML Processing**: For similar movie queries, our custom machine learning model analyzes the request
4. **TMDB Integration**: We fetch up-to-date movie information from the TMDB API
5. **Response Rendering**: Results are displayed in an intuitive, visually appealing interface

### Machine Learning Model

Our recommendation engine uses collaborative filtering and content-based approaches to generate personalized movie suggestions:

- **Feature Extraction**: Analyzes movie metadata including genres, cast, directors, and keywords
- **Similarity Computation**: Calculates content similarity between movies
- **Prediction Algorithm**: Suggests movies based on similarity scores and popularity metrics


## Acknowledgements

- [TMDB API](https://www.themoviedb.org/) for providing comprehensive movie data