import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h1>Oops!!</h1>
            <p>
                You have Make a Mistake
            </p>
            {
                error.status === 404 && <div>
                    <p>this page is not avabiable</p>
                    <button className="btn"><Link to={'/'}>Go back home page</Link></button>
                </div>
            }

        </div>
    );
};

export default Error;