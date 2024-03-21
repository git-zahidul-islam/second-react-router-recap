import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBer from "../NavBer/NavBer";

const Home = () => {
    return (
        <div>
            <NavBer></NavBer>
            <h1>Welcome to New World</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;