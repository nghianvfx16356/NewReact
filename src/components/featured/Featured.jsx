import './Featured.css';
import city from './../../data/city.json'

const Featured = () =>{
    return(
        <div className='featured'>
            <div className="featuredItem">
                <img src={(city[0]).image} alt="Dublin" className='featuredImg' />
                <div className="featuredTitles">
                    <h1>{(city[0].name)}</h1>
                    <h2>{(city[0].subText)}</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={(city[1]).image} alt="Reno" className='featuredImg' />
                <div className="featuredTitles">
                    <h1>{(city[1].name)}</h1>
                    <h2>{(city[1].subText)}</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src={(city[2]).image} alt="Austin" className='featuredImg' />
                <div className="featuredTitles">
                    <h1>{(city[2].name)}</h1>
                    <h2>{(city[2].subText)}</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured;