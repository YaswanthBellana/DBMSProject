import React, { useState } from 'react';
import Navbar from "/src/components/Navbar/navbar.jsx";
import Footer from "/src/components/Footer/footer.jsx";
import './reviews.css';
//import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Review = () => {
    const [selectedPlace, setSelectedPlace] = useState('');
    const [selectedSort, setSelectedSort] = useState('DESC');
    const [reviews, setReviews] = useState([]);

    let places = ['Araku Burra Caves', 'Banaras Ghats', 'Barbotey Rock Garden', 'Basilica of Bom Jesus', 
    'Batuk Bhairav Temple', 'Bishnupur Temples', 'Cabo De Rama Fort', 'Dakshineswar Kali Temple', 'Darjeeling', 
    'Dasawmedh Ghat', 'Elephantastic', 'Fatehpur Sikri', 'Fort Aguda', 'Goa Beaches', 'Hampi', 'Hazara Rama Temple', 
    'Howrah Bridge', 'Jaipur City Palace', 'Jantar Mantar', 'Japanese Peace Pagoda', 'Kala Dungar', 'Kanchenjunga Mountain', 
    'Kandariya Mahadev Temple', 'Kashi Viswanath Temple', 'Khajuraho Temples', 'Kovalam Beach', 'Lamahatta', 
    'Little Rann of Kutch', 'Manikarnika Ghat', 'Matanga Hill', 'Mehtab Garden', 'Moti Masjid', 'Mysore Palace', 
    'Mysore Sand Sculptural Museum', 'Padmanabhaswamy Temple', 'Panna Tiger Reserve', 'Priyadarshini Planetarium', 
    'Ramakrishna Beach', 'Rann of Kutch', 'Rushikonda Beach', 'Sarnath', 'Sheesh Mahal', 'Simhachalam Temple', 
    'Somnathpur Temple', 'Sri Chamundeswari Temple', 'Sundarbans', 'Taj Mahal', 'Tiruvananthapuram backwaters', 
    'Topansar Lake', 'Tribal and Folk Art Museum', 'Victoria Memorial', 'Virupaksha Temple', 'Vizag National Park', 'Vizag Steel Plant'];

    const handlePlaceChange = (event) => {
        setSelectedPlace(event.target.value);
    };

    const handleSortChange = (event) => {
        setSelectedSort(event.target.value);
    };

    const handleSearchClick = () => {
        const apiUrl = 'http://localhost:4000/reviews';
        const sortValue = selectedSort || 'DESC';
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ selectedPlace, selectedSort })
        })
        .then(response => response.json())
        .then(data => {
            setReviews(data.reviews);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    // const StarRating = ({ rating }) => {
    //     const stars = [];
    //     for (let i = 0; i < Math.floor(rating); i++) {
    //         stars.push(<i key={i} className="fas fa-star"></i>);
    //     }
    //     if (rating % 1 !== 0) {
    //         stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    //     }
    //     const remainingStars = 5 - stars.length;
    //     for (let i = 0; i < remainingStars; i++) {
    //         stars.push(<i key={i + stars.length} className="far fa-star"></i>);
    //     }
    //     return <div className='star-rating'>{stars}</div>;
    // };

    return (
        <>
            <Navbar />
            <div className='lastButtons'>
                <button className='reviewButton'>Write review</button>
                <button className='reviewButton' onClick={handleSearchClick}>Search</button>
            </div>
            <div className="reviewContainer">
                <div className="dropdownContainer">
                    <label className='Reviewlabel' htmlFor="place">Place:</label>
                    <select className='reviewSelect' id="place" value={selectedPlace} onChange={handlePlaceChange}>
                        <option value="">Select any</option>
                        {places.map((place, index) => (
                            <option key={index} value={place}>{place}</option>
                        ))}
                    </select>
                </div>
                <div className="dropdownContainer">
                    <label className='Reviewlabel' htmlFor="sort">Rating:</label>
                    <select className='reviewSelect' id="sort" value={selectedSort} onChange={handleSortChange}>
                        <option value="DESC">High to Low</option>
                        <option value="ASC">Low to High</option>
                    </select>
                </div>
            </div>
            <div className='content'>
                {reviews && reviews.map((review, index) => (
                    <div className="card" key={index}>
                        <div className="top-card">
                            <center>
                            <img src="https://imgs.search.brave.com/LLTcq5kyFMDTd0VICR-bNwu2v5SkSGpzRnNMbAf2BGM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1Lzc3LzI3/LzM2MF9GXzY1Nzcy/NzE5X0ExVVY1a0xp/NW5DRVdJMEJOTExp/RmFCUEVrVWJ2NUZ2/LmpwZw" className="reviewimg" alt="person" />
                            </center>
                            <div className="homeCardInfo">
                                <center>
                                    <h2 className="title">{review.place_name}</h2>
                                </center>
                                <p className="bottom-text">{review.review}</p>
                                <div className=''>
                                    {/*<StarRating rating={review.rating} />*/}
                                </div>
                                <p className="bottom-text" style={{ textAlign: 'right', color: '#b966d4' }}>{review.user_name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Review;
