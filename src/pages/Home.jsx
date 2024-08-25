import '../styles/Home.css';
import Post from '../components/Post';
import { PostsContext, PostsProvider } from '../contexts/PostsContext';
import { useContext } from 'react';

const Home = () => {
  const { postsList } = useContext(PostsContext);

  return (
    <PostsProvider>
      <div className='container-fluid home-container'>
        <div className='posts-area-container'>
          <Post />
        </div>
      </div>
    </PostsProvider>
  );
};

export default Home;
