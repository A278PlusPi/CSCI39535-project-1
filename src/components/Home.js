import DMK1 from './images/homepage-dmk1.webp';
import DMK2 from './images/homepage-dmk2.webp';

function Home() {
  return (
    <div class = "Main-Content">
      <div class = "H1-Text">
        Welcome!
      </div>
      <div class = "Body-Text">
      Welcome to the wonderful world of Disney Magic Kingdoms – a theme park where your dreams will come true today! There are at least 5 different areas in Disney Magic Kingdoms which includes Toontown, Tomorrowland, Fantasyland, Frontierland, and Adventureland. There are a lots of attractions to visit and lots of characters to meet! We have featured some information to get you more familiar with the park. Dreams can come true at Disney Magic Kingdoms!
      </div>
      <div class = "Homepage-Images">
        <img
        style={{padding:"16px"}}
        src={DMK1} 
        alt="A real Disney Magic Kingdom park"
        width="42.5%"
        ></img>
        <img 
        style={{padding:"16px"}}
        src={DMK2} 
        alt="A park from the Disney Magic Kingdoms game"
        width="42.5%"
        ></img>
      </div>
    </div>
  );
}

export default Home;