import './featuredProperty.css';
import hotel from './../../data/hotel_list.json'

const FeaturedProperty = () => {
    return (
        <div className='fp'>
            <div className="fpItem">
                <img src={(hotel[0]).image_url} alt="Aparthotel Stare Miasto" className="fpImg" />
                <span className="fpName">{(hotel[0]).name}</span>
                <span className="fpCity">{(hotel[0]).city}</span>
                <span className="fpPrice">{`Starting from $${(hotel[0]).price}`}</span>
                <div className="fpRating">
                    <button>{(hotel[0]).rate}</button>
                    <span>{(hotel[0]).type}</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={(hotel[1]).image_url} alt="Comfort Suites Airport" className="fpImg" />
                <span className="fpName">{(hotel[1]).name}</span>
                <span className="fpCity">{(hotel[1]).city}</span>
                <span className="fpPrice">{`Starting from $${(hotel[1]).price}`}</span>
                <div className="fpRating">
                    <button>{(hotel[1]).rate}</button>
                    <span>{(hotel[1]).type}</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={(hotel[2]).image_url} alt="Four Seasons Hotel" className="fpImg" />
                <span className="fpName">{(hotel[2]).name}</span>
                <span className="fpCity">{(hotel[2]).city}</span>
                <span className="fpPrice">{`Starting from $${(hotel[2]).price}`}</span>
                <div className="fpRating">
                    <button>{(hotel[2]).rate}</button>
                    <span>{(hotel[2]).type}</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={(hotel[3]).image_url} alt="Hilton Garden Inn" className="fpImg" />
                <span className="fpName">{(hotel[3]).name}</span>
                <span className="fpCity">{(hotel[3]).city}</span>
                <span className="fpPrice">{`Starting from $${(hotel[3]).price}`}</span>
                <div className="fpRating">
                    <button>{(hotel[3]).rate}</button>
                    <span>{(hotel[3]).type}</span>
                </div>
            </div>
        </div>
    )
};

export default FeaturedProperty;