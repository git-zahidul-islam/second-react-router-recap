import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { id, body, title } = post;
    return (
        <div className="space-y-3 border-2">
            <h1 className="text-2xl mb-4">{title}</h1>

            <button>
                <Link className=" bg-amber-300" to={`/post/${id}`}>More Details</Link>
            </button>

        </div>
    );
};

export default Post;