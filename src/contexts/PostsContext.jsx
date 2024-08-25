import { createContext, useEffect, useState } from 'react';
import api from '../Api';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts/list/all');
        setPostsList(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ postsList }}>
      {children}
    </PostsContext.Provider>
  );
};
