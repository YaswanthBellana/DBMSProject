import { useState, useEffect } from "react";
import Navbar from "/src/components/Navbar/navbar.jsx";
import Footer from "/src/components/Footer/footer.jsx";
import "./travel.css";
import { IoSearchSharp } from "react-icons/io5";

const Travel = () => {
  const [selectedTransport, setSelectedTransport] = useState("trains");
  const [fromPlace, setFromPlace] = useState("");
  const [toPlace, setToPlace] = useState("");
  const [results, setResults] = useState([]);
  let places = [];

  useEffect(() => {
    fetchData();
  }, [selectedTransport, fromPlace, toPlace]);

  const fetchData = async () => {
    if (fromPlace && toPlace) {
      let url = `http://localhost:3000/${selectedTransport}?from=${fromPlace}&to=${toPlace}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const handleTransportSelection = (transport) => {
    setSelectedTransport(transport);
    setFromPlace("");
    setToPlace("");
  };

  const handlePlaceSelection = (place, type) => {
    type === "from" ? setFromPlace(place) : setToPlace(place);
  };

  if (selectedTransport === "flights") {
    places = ["New York", "London", "Paris", "Tokyo", "Kolkata", "Delhi"];
  } else if (selectedTransport === "trains") {
    places = ["Delhi", "Lucknow", "Pittapuram", "Tahh", "Susi", "hgg"];
  }

  return (
    <>
      <Navbar />
      <div className="travelComponent">
        <div className="container1">
          <div className="searchField">
            <button className="searchIcon" type="button">
              <IoSearchSharp size={20} />
            </button>
            <select
              className="searchInput"
              onChange={(e) => handlePlaceSelection(e.target.value, "from")}
            >
              <option value="">From</option>
              {places.map(
                (place) =>
                  place !== toPlace && (
                    <option key={place} value={place}>
                      {place}
                    </option>
                  )
              )}
            </select>
          </div>
          <div className="searchField">
            <button className="searchIcon" type="button">
              <IoSearchSharp size={20} />
            </button>
            <select
              className="searchInput"
              onChange={(e) => handlePlaceSelection(e.target.value, "to")}
            >
              <option value="">To</option>
              {places.map(
                (place) =>
                  place !== fromPlace && (
                    <option key={place} value={place}>
                      {place}
                    </option>
                  )
              )}
            </select>
          </div>
          <button type="button" className="searchBtn" onClick={fetchData}>
            Search
          </button>
        </div>
        <p className="travel-para">
          Select which mode of transportation do you like?
        </p>
        <div>
          <img
            src="/src/assets/train.png"
            alt="train"
            className={
              selectedTransport === "trains" ? "image selected" : "image"
            }
            onClick={() => handleTransportSelection("trains")}
          />
          <img
            src="/src/assets/airplane.png"
            alt="airplane"
            className={
              selectedTransport === "flights" ? "image selected" : "image"
            }
            onClick={() => handleTransportSelection("flights")}
          />
        </div>
      </div>
      <div id="results">
        <div className="resultsdisplay">
          {results.map((result, index) => (
            <div key={index} className="eachOne">
              <p className="p">{result.name}</p>
              <div className="subContainerResult">
                <p className="p paratt1">{result.type}</p>
                <p className="p paratt2">{result.trainNumber}</p>
              </div>
              <p className="p">{result.from}</p>
              <p className="p">{result.to}</p>
              <p className="p">{result.time}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Travel;
