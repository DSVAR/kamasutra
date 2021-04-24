import {connect} from "react-redux";
import Navbar from "./Navbar";


let mapNavbarToProps=(state)=>{
    return{
        state:state.sidebar
    }
}
const NavbarContainer=connect(mapNavbarToProps)(Navbar);
export default NavbarContainer;