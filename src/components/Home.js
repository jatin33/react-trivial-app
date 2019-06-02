import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import poster from '../assets/movie-poster-regular.png';
import poster1 from '../assets/movie-poster-regular-2.png';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:""
        };
    }

    componentWillMount(){
        this.setState({
            username:localStorage.getItem("fname")
        });
    }

    render() {
        return (
            <div>
                <div><h1>{`Hi, ${this.state.username}`}</h1></div>
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