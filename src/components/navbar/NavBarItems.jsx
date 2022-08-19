import navBar from "./../../data/navBar.json";

const NavBarItems = () =>{
    return(
        <div>
            {
                navBar.map( navbar => {
                    return(
                        <div className="box">
                            <div></div>
                        </div>
                    )
                })
            }
        </div>
    )
};
 export default NavBarItems;