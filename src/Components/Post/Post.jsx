import { Link, useNavigate, useParams } from "react-router-dom";

const Post = ({ post }) => {
    const navigate = useNavigate()
    const { id, body, title } = post;


    const handelShow = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className="space-y-3 border-2 flex flex-col">
            <h1 className="text-2xl mb-4 flex-grow">{title}</h1>

            <div>
                <button>
                    <Link className=" bg-amber-300 btn" to={`/post/${id}`}>More Details</Link>
                </button>
                <button onClick={handelShow} className="btn">Show details</button>
            </div>
        </div>
    );
};

export default Post;