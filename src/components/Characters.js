import './Info.css';
import SS6 from './images/character-mickey-and-friends.jpg';
import Buzz from './images/character-buzz-lightyear.webp';
import BelleBeast from './images/character-belle-and-beast.jpg';
import Cinderella from './images/character-cinderella.webp';
import Woody from './images/character-woody.webp';
import Jack from './images/character-jack-sparrow.webp';

function Characters() {
  return (
    <div>
       <div class = "Main-Content">

        <div style={{display:"inline-block", width:"100%"}}>
          <div class = "H1-Text">
            The Sensational Six (Mickey, Minnie, Donald, Daisy, Goofy, and Pluto)
          </div>
          <img
            class="Info-Images"
            src={SS6} 
            alt="Mickey and his friend"
            ></img>
          <div class = "Body-Text">
          Mickey's Toontown is a themed land at Disneyland and Tokyo Disneyland, which both located at the northermost part of the part. This place open at January 24, 1993, and closed in 2011 to make way for the New Fantasyland expansion. Mickey Mouse and his friends really like to hang out at this area!
          </div>
        </div>
        
       </div>
    </div>
  );
}

export default Characters;