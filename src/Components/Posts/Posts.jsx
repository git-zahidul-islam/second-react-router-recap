import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData()
    // console.log(posts)
    return (
        <div className="">
            <h3 className="text-xl">Post page here</h3>
            <p>Post Length: {posts.length}</p>
            <div className="grid grid-cols-3 gap-4 p-4">
                {
                    posts.map((post) => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;