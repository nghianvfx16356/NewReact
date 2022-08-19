import './searchItem.css';
import searchd from '../../data/search.json';

const SearchItem = () =>{
    return(
        <div>
            <div className='searchItem'>
            <img src={(searchd[0]).image_url} alt="Tower Street Apartments" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">{(searchd[0]).name}</h1>
                <span className="siDistance">{`${(searchd[0]).distance} from center`}</span>
                <span className="siTaxisOp">{(searchd[0]).tag}</span>
                <span className="siSubtitle">{(searchd[0]).description}</span>
                <span className="siFeatures">{(searchd[0]).type}</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can canclel later, so look in this great price today!</span>
        
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>{(searchd[0]).rate_text}</span>
                    <button>{(searchd[0]).rate}</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">{`$${(searchd[0]).price}`}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
        <div className='searchItem'>
            <img src={(searchd[1]).image_url} alt="Tower Street Apartments" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">{(searchd[1]).name}</h1>
                <span className="siDistance">{`${(searchd[1]).distance} from center`}</span>
                <span className="siTaxisOp">{(searchd[1]).tag}</span>
                <span className="siSubtitle">{(searchd[1]).description}</span>
                <span className="siFeatures">{(searchd[1]).type}</span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">You can canclel later, so look in this great price today!</span>
        
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>{(searchd[1]).rate_text}</span>
                    <button>{(searchd[1]).rate}</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">{`$${(searchd[1]).price}`}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
        <div className='searchItem'>
            <img src={(searchd[2]).image_url} alt="Tower Street Apartments" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">{(searchd[2]).name}</h1>
                <span className="siDistance">{`${(searchd[2]).distance} from center`}</span>
                <span className="siTaxisOp">{(searchd[2]).tag}</span>
                <span className="siSubtitle">{(searchd[2]).description}</span>
                <span className="siFeatures">{(searchd[2]).type}</span>
                
        
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>{(searchd[2]).rate_text}</span>
                    <button>{(searchd[2]).rate}</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">{`$${(searchd[2]).price}`}</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SearchItem;