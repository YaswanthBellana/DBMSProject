import React, { useState } from 'react';
import Navbar from "/src/components/Navbar/navbar.jsx";
import Footer from "/src/components/Footer/footer.jsx";
import './reviews.css';

const Review = () => {
    const [selectedPlace, setSelectedPlace] = useState('');
    const [selectedSort, setSelectedSort] = useState('');
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
                            <img src="rejnr" className="img" alt="person" />
                            <div className="homeCardInfo">
                                <center>
                                    <h2 className="title">{review.place_name}</h2>
                                </center>
                                <p className="bottom-text">{review.review}</p>
                                <p className="bottom-text">{review.name}</p>
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
