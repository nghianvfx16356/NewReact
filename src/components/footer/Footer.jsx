import './footer.css';
import Footerd from '../../data/footer.json';

const Footer = () =>{
    return(
        <div className='footer'>
            <div className="fLists">
                <ul className="fList">
                    <li className="fListItem">{((Footerd[0]).col_values)[0]}</li>
                    <li className="fListItem">{((Footerd[0]).col_values)[1]}</li>
                    <li className="fListItem">{((Footerd[0]).col_values)[2]}</li>
                    <li className="fListItem">{((Footerd[0]).col_values)[3]}</li>
                    <li className="fListItem">{((Footerd[0]).col_values)[4]}</li>
                    <li className="fListItem">{((Footerd[0]).col_values)[5]}</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">{((Footerd[1]).col_values)[0]}</li>
                    <li className="fListItem">{((Footerd[1]).col_values)[1]}</li>
                    <li className="fListItem">{((Footerd[1]).col_values)[2]}</li>
                    <li className="fListItem">{((Footerd[1]).col_values)[3]}</li>
                    <li className="fListItem">{((Footerd[1]).col_values)[4]}</li>
                    <li className="fListItem">{((Footerd[1]).col_values)[5]}</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">{((Footerd[2]).col_values)[0]}</li>
                    <li className="fListItem">{((Footerd[2]).col_values)[1]}</li>
                    <li className="fListItem">{((Footerd[2]).col_values)[2]}</li>
                    <li className="fListItem">{((Footerd[2]).col_values)[3]}</li>
                    <li className="fListItem">{((Footerd[2]).col_values)[4]}</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">{((Footerd[3]).col_values)[0]}</li>
                    <li className="fListItem">{((Footerd[3]).col_values)[1]}</li>
                    <li className="fListItem">{((Footerd[3]).col_values)[2]}</li>
                    <li className="fListItem">{((Footerd[3]).col_values)[3]}</li>
                </ul>
                <ul className="fList">
                    <li className="fListItem">{((Footerd[4]).col_values)[0]}</li>
                    <li className="fListItem">{((Footerd[4]).col_values)[1]}</li>
                    <li className="fListItem">{((Footerd[4]).col_values)[2]}</li>
                    <li className="fListItem">{((Footerd[4]).col_values)[3]}</li>
                    <li className="fListItem">{((Footerd[4]).col_values)[4]}</li>
                    <li className="fListItem">{((Footerd[4]).col_values)[5]}</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Footer;