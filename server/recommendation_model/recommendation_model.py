import pandas as pd
import pickle

def recommend(movie_title, n_recommendations=5):
    movie_title = movie_title.lower()

    df = pickle.load(open('recommendation_model/models/movies.pkl', 'rb'))
    cosine_sim = pickle.load(open('recommendation_model/models/cosine_sim.pkl', 'rb'))
    
    # Check if movie exists in dataset
    if movie_title not in df['title'].str.lower().values:
        return "Movie not found!"

    else:
        # Get index of the movie that matches the title
        idx = df[df['title'].str.lower() == movie_title].index[0]
        
        # Get similarity scores for all movies with that movie
        sim_scores = list(enumerate(cosine_sim[idx]))
        
        # Sort movies based on similarity scores
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        
        # Get the top 5 similar movies (excluding the input movie itself)
        sim_scores = sim_scores[1:n_recommendations+1]
        
        # Get movie indices
        movie_indices = [i[0] for i in sim_scores]
        
        # Return the top recommended movie titles
        return df.loc[movie_indices, ['id', 'title']].values.tolist()
