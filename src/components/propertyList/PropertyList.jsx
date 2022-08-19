import './PropertyList.css';
import typed from './../../data/type.json'

const PropertyList = () =>{
    return(
        <div className='pList'>
            <div className="pListItem">
                <img src={(typed[0]).image} alt="Hotels" className="pListImg" />
                <div className="pListTitles">
                    <h1>{(typed[0]).name}</h1>
                    <h2>{(typed[0]).count}</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={(typed[1]).image} alt="Apartments" className="pListImg" />
                <div className="pListTitles">
                    <h1>{(typed[1]).name}</h1>
                    <h2>{(typed[1]).count}</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={(typed[2]).image} alt="Resorts" className="pListImg" />
                <div className="pListTitles">
                    <h1>{(typed[2]).name}</h1>
                    <h2>{(typed[2]).count}</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={(typed[3]).image} alt="Villas" className="pListImg" />
                <div className="pListTitles">
                    <h1>{(typed[3]).name}</h1>
                    <h2>{(typed[3]).count}</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src={(typed[4]).image} alt="Cabins" className="pListImg" />
                <div className="pListTitles">
                    <h1>{(typed[4]).name}</h1>
                    <h2>{(typed[4]).count}</h2>
                </div>
            </div>
        </div>
    )
}

export default PropertyList