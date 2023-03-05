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

        <div class = "Card-Series">
          <div class = "Info-Card">
            <div class = "H1-Text">
              The Sensational Six (Mickey and Friends)
            </div>
            <img
              class="Info-Images"
              src={SS6} 
              alt="Mickey and his friends"
              ></img>
            <div class = "Body-Text">
            The sensational six consists of Mickey, Minnie, Donald, Daisy, Goofy, and Pluto, and have a wide range of personalities. They are often featured together in multiple productions since 1971. No wonder they are close friends!
            <br></br>
            <br></br>
            In Disney Magic Kingdoms, Mickey Mouse is the first and the most paramount character you will see, as Mickey will help unlock Goofy, Woody, and more importantly, make any considerable progress in your kingdom. Along the way, you will get to welcome Daisy, Minnie, and Donald. If you like a complete pack, you can purchase Pluto for 200 gems. Pretty affordable for a premium character, eh?
            </div>
          </div>

          <div class = "Info-Card">
            <div class = "H1-Text">
              Buzz Lightyear
            </div>
            <img
              class="Info-Images"
              src={Buzz} 
              alt="Buzz Lightyear"
              ></img>
            <div class = "Body-Text">
            To infinity and beyond! Buzz Lightyear is both a feature-packed action figure and a mission-oriented space ranger. He demonstrated excellent leadership skills as he looks out for other people in his team.
            <br></br>
            <br></br>
            In Disney Magic Kingdoms, Buzz Lightyear will unite with Woody, Jessie, Bo Peep, Hamm, and Sarge after you unlock Tomorrowland. His mission is to defeat Zurg and to restore order in Tomorrowland.
            </div>
          </div>

          <div class = "Info-Card">
            <div class = "H1-Text">
              Belle and Beast
            </div>
            <img
              class="Info-Images"
              src={BelleBeast} 
              alt="Belle and Beast"
              ></img>
            <div class = "Body-Text">
            Belle and Beast is a lovely couple. Although the Beast had a monstrous personality, Belle managed to change Beast’s personality by teaching the values of kindness and patience and they found their true love.
            <br></br>
            <br></br>
            In Disney Magic Kingdoms, Belle and Beast can be unlocked through Legendary chests (if available) or through time-limited events. Just like they spend together in the West Wing, they also spend time significant amount of together in Disney Magic Kingdoms. 
            </div>
          </div>

          <div class = "Info-Card">
            <div class = "H1-Text">
              Cinderella
            </div>
            <img
              class="Info-Images"
              src={Cinderella} 
              alt="Cinderella"
              ></img>
            <div class = "Body-Text">
            Cinderella is one of the iconic Disney princesses. Although she has been mistreated by her stepfamily, she has retained her positivity and kindness. Her life enhanced with a glass slipper and her “Prince Charming”.
            <br></br>
            <br></br>
            In Disney Magic Kingdoms, Cinderella can be unlocked after you complete all six levels of Discovery Rewards. As you progress through the game, you can also reunite her with her Prince Charming!
            </div>
          </div>

          <div class = "Info-Card">
            <div class = "H1-Text">
              Sheriff Woody
            </div>
            <img
              class="Info-Images"
              src={Woody} 
              alt="Sheriff Woody"
              ></img>
            <div class = "Body-Text">
            Woody is a member from Woody’s Roundup and one of Andy’s favorite toys. For the past 28 years, he remains loyal despite many circumstances such as being replaced by Buzz and having a new owner (Bonnie). Like Buzz, he has demonstrated excellent leadership skills.
            <br></br>
            <br></br>
            In Disney Magic Kingdoms, Woody is the 3rd character in the kingdom after welcoming Goofy. If you are a Toy Story fan, he is the character you can welcome on your first day in the kingdom.
            </div>
          </div>

          <div class = "Info-Card">
            <div class = "H1-Text">
              Jack Sparrow
            </div>
            <img
              class="Info-Images"
              src={Jack} 
              alt="Jack Sparrow"
              ></img>
            <div class = "Body-Text">
            Jack Sparrow is a legendary pirate from the Seven Seas. He loves the sea and his ship called Black Pearl. He his allies like Will Turner and Elizabeth Swann which help him achieve his goals.
            <br></br>
            <br></br>
            In Disney Magic Kingdoms, Jack Sparrow is one of the premium characters that you can purchase for 450 gems. If you want to unlock him without using real money, you will have to grind a lot.
            </div>
          </div>
        </div>
        
       </div>
    </div>
  );
}

export default Characters;