import { IAllPosts } from "../models/IAllPosts";

function Posts(posts:IAllPosts){

      console.log(posts.posts);
      
      return(

            <>
                  <h1>Posts</h1>

                  {posts.posts?.map(post => {

                        return(
                              <div>

                                    <h2>Title: {post.title}</h2>
                                    <p>ID: {post.id}</p>
                                    <p>UserID: {post.userId}</p>
                                    <p>Content: {post.body}</p>
                              </div>
                        );
                  })}
            </>
      );
}

export default Posts;