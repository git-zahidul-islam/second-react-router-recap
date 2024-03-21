import { Link, NavLink } from "react-router-dom";
import './NavBer.css'

const NavBer = () => {
    return (
        <div>
            <nav className="text-center p-2 bg-slate-400">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
            </nav>
        </div>
    );
};

export default NavBer;