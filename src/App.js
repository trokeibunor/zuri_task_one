import './App.scss';
import share from './images/avater_share.svg';
import avater from './images/avater_img.png';
// social Icons
import slack from './images/slack.svg';
import git from './images/git.svg';
// footer Icon
import Zuri_logo from './images/Zuri.Internship_Logo.svg';
import I4G from './images/I4G.svg';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="avater_section">
          <div className='user'>
            <img id="profile__img" src={avater} alt="avater"/>
            <p id="username">Annette Black</p>
          </div>
          <img id="share__link" src={share} alt="shareLink"/>
        </div>
        <div className="link_list">
          <a href='https://' className='link_out'>Twitter Link</a>
          <a href='https://' className='link_out'>Zuri Team</a>
          <a href='https://' className='link_out'>Zuri Books</a>
          <a href='https://' className='link_out'>Python Books</a>
          <a href='https://' className='link_out'>Background Check for Coders</a>
          <a href='https://' className='link_out'>Design Books</a>
        </div>
        <div className="socialIcons">
          <a href='https://' className='socialIcon'>
            <img src={slack} alt="slack_icon"/>
          </a>
          <a href='https://' className='socialIcon'>
            <img src={git} alt="git_icon"/>
          </a>
        </div>
      </div>
      <footer>
       <img src={Zuri_logo} alt='zuri_logo'/>
       <p>HNG Internship 9 Frontend Task</p>
       <img src={I4G} alt='i4g log'/>
      </footer>
    </div>
  );
}

export default App;
