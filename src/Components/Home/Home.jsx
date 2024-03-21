import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBer from "../NavBer/NavBer";
import { CirclesWithBar } from 'react-loader-spinner'

const Home = () => {
    const navigation = useNavigation()

    return (
        <div>
            <NavBer></NavBer>
            {
                navigation.state === 'loading' ?
                    <div className="flex justify-center mt-56">
                        <CirclesWithBar
                            height="100"
                            width="100"
                            color="#4fa94d"
                            outerCircleColor="#4fa94d"
                            innerCircleColor="#4fa94d"
                            barColor="#4fa94d"
                            ariaLabel="circles-with-bar-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div> :
                    <Outlet></Outlet>
            }
            <h1>Welcome to New World</h1>

            <Footer></Footer>
        </div>
    );
};

export default Home;