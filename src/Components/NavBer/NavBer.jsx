import { Link } from "react-router-dom";

const NavBer = () => {
    return (
        <div>
            <div className="text-center p-2 bg-slate-400">
                <Link to={'/'}>Home</Link>
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
        </div>
    );
};

export default NavBer;