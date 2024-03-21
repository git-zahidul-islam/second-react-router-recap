import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData()
    const back = useNavigate()
    const handleBack = () => {
        back(-1)
    }

    return (
        <div>
            <p>post Details here</p>
            <p>length: {post.title}</p>
            <button style={{ border: '1px solid gray', padding: '5px' }} onClick={handleBack}>Back</button>
        </div>
    );
};

export default PostDetails;