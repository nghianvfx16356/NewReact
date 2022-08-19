import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './detail.css';
import detaild from '../../data/detail.json';

const Detail = () => {
  const photos = [
    {src:`${(detaild.photos)[0]}`},
    {src:`${(detaild.photos)[1]}`},
    {src:`${(detaild.photos)[2]}`},
    {src:`${(detaild.photos)[3]}`},
    {src:`${(detaild.photos)[4]}`},
    {src:`${(detaild.photos)[5]}`},
  ]
  console.log(detaild.photos)
  return (
    <div>
      <Navbar />
      <Header type='list'/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{detaild.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{detaild.address}</span>
          </div>
          <span className="hotelDistance">{detaild.distance}</span>
          <span className="hotelPriceHighLight">{detaild.price}</span>
          <div className="hotelImages">
          {photos.map(photo=>(
            <div className="hotelImgWrapper">
              <img src={photo.src} alt="text" className="hotelImg" />
            </div>
          ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
            <h1 className="hotelTitle">{detaild.title}</h1>
              <p className="hotelDesc">
                {detaild.description}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>{`$${detaild.nine_night_price}`}</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
