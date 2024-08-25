import '../styles/components/Post.css';

const Post = ({
  userFullName,
  usertag,
  createdDate,
  postTitle,
  postContent,
  upvotes,
  downvotes,
}) => {
  return (
    <div className='post-container'>
      <div className='vote-column'>
        <div className='vote-buttons'>
          <span className='material-symbols-outlined vote-button'>
            thumb_up
          </span>
          <span>10</span>
          <span className='material-symbols-outlined vote-button'>
            thumb_down
          </span>
        </div>
      </div>
      <div className='post-content-container'>
        <div className='post-card-container'>
          <div className='post-header'>
            <div className='user-info'>
              <div className='user-photo' />
              <div className='user-name-info'>
                <span>Teste User</span>
                <span className='usertag'>@testeuser</span>
              </div>
            </div>
            <div className='post-info'>
              <span>Publicado em: 16/08/2024</span>
            </div>
          </div>
          <div className='post-content'>
            <h3>Lorem, ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              mollitia? Tempore eveniet, ut unde culpa perferendis amet cum
              libero consequatur modi, repellendus fuga vitae aut, aperiam
              laudantium facere est corrupti?
            </p>
          </div>
          <div className='post-footer'>
            <span className='material-symbols-outlined'>mode_comment</span>
            <span>30 respostas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
