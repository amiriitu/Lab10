
import '../App.css';
import inst from './instagram.svg'
function Sidebar(props) {
  return (
    <div className="App">
<div className="sidebar">
        <h2>{props.name}</h2>
        <div className="menu">
          <a href="/">INTRODUCTION</a>
          <a href="https://jenhuangphoto.com/browse">WEDDINGS</a>
          <a href="https://jenhuangphoto.com/lake-como-wedding-villa-balbianello">ENGAGEMENTS</a>
          <a href="https://jenhuangphoto.com/classic-portrait-film-photography">PORTRAITS</a>
          <a href="https://jenhuangphoto.com/recent-work">JOURNAL</a>
          <a href="https://jenhuangphoto.com/guidebooks">BOOK SHOP</a>
          <a href="https://jenhuangphoto.com/contact-jen-huang">CONTACT</a>
        </div>
        <div className="about">
          <a href="https://jenhuangphoto.com/contact-jen-huang">About</a>
          <a href="https://jenhuangphoto.com/resources">Instruction</a>
          <a href="https://www.instagram.com/jenhuangbogan/"> <img src={inst} alt="" className="ins" /></a>
        </div>
      </div>      
    </div>
  );
}

export default Sidebar;


