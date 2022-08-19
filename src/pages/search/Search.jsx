import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import SearchItem from '../../components/searchItem/SearchItem';
import './search.css';

const Search = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)

  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <input value='06/24/2022 to 06/24/2022' type="text" />
            </div>
            <div className="lsItem">
              <label>Option</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" />

                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" />

                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Adult</span>
                  <input type="number" className="lsOptionInput" placeholder='1' />

                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Children</span>
                  <input type="number" className="lsOptionInput" placeholder='0' />

                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Room</span>
                  <input type="number" className="lsOptionInput" placeholder='1' />

                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
