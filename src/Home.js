import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import poster from './assets/movie-poster-regular.png';
import poster1 from './assets/movie-poster-regular-2.png';

class Home extends React.Component {
    
    render() {
        return (
            <div>
                <div className="movie-card">
                    <img src={poster} alt="movie-poster" />
                </div>
                <Link to='/showuser' className="button-container">
                    <button className="trailer-button">Watch Trailer</button>
                </Link>
                <div className="movie-card">
                    <img src={poster1} alt="movie-poster" />
                </div>
            </div>
        )
    }
}

export default Home;