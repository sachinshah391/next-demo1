import myData from "../../../public/data/mydata";

interface Post {
  id: number;
  title: string;
  body: string;
}

let posts: Post[] = myData;

export const getAllPosts = () => {
    return posts;
};

export const getPostById = (id: number) => {
    return posts.find((item) => item.id === id);
};

export const createPost = (newPost: Post) => {
    newPost.id = posts.length + 1;
    // posts.push(newPost);
    myData.push(newPost);
    return newPost;
};

export const updatePost = (updatedPost: Post) => {
    const index = posts.findIndex((item) => item.id === updatedPost.id);
    if (index !== -1) {
        posts[index] = updatedPost;
        return updatedPost;
    }
    return null;
};

export const deletePost = (id: number) => {
    const initialLength = posts.length;
    posts = posts.filter((item) => item.id !== id);
    if (posts.length !== initialLength) {
        return true; // Post deleted
    }
    return false; // Post not found
};

