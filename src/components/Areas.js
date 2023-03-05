import './Areas.css';
import Toontown from './images/area-toontown.jpg';
import Tomorrowland from './images/area-tomorrowland.webp';
import Fantasyland from './images/area-fantasyland.webp';
import Frontierland from './images/area-frontierland.webp';
import Adventureland from './images/area-adventureland.webp';

function Areas() {
  return (
    <div class = "Main-Content">

      <div style={{display:"inline-block", width:"100%"}}>
        <div class = "Toontown">
          Toontown
        </div>
        <img
          class="Park-Images"
          src={Toontown} 
          alt="Toontown"
          ></img>
        <div class = "Body-Text">
        Mickey's Toontown is a themed land at Disneyland and Tokyo Disneyland, which both located at the northermost part of the part. This place open at January 24, 1993, and closed in 2011 to make way for the New Fantasyland expansion. Mickey Mouse and his friends really like to hang out at this area!
        <br></br>
        <br></br>
        In Disney Magic Kingdoms, it is the first area that all Kingdomers use to welcome various characters and build attractions.
        </div>
      </div>

      <div style={{display:"inline-block", width:"100%"}}>
        <div class = "Tomorrowland">
        Tomorrowland
        </div>
        <img
          class="Park-Images"
          src={Tomorrowland} 
          alt="Tomorrowland"
          ></img>
        <div class = "Body-Text">
        Tomorrowland is a themed land at the Magic Kingdom at the Walt Disney Resort, which showcases Walt Disney's views of the future. This place opened on October 1, 1971, and was updated in 1994. The land is one of the most popular forms of the themed-land. One possible reason is that almost everyone is thinking about the future, and what things would be created by then. Tomorrowland, hence the name, has its futuristic and out-of-this-world attractions, concessions, and all the other innovative stuff. Wait until you meet Buzz Lightyear... he may be an action-packed toy, but he is also great, forward-thinking space ranger! To infinity and beyond!
        <br></br>
        <br></br>
        In Disney Magic Kingdoms, Tomorrowland unlocks after Mickey, Goofy and Pluto annoys Pete with excessive noise with musical instruments and barking. It costs 5,000 magic to unlock Tomorrowland.
        </div>
      </div>
      
      <div style={{display:"inline-block", width:"100%"}}>
        <div class = "Fantasyland">
        Fantasyland
        </div>
        <img
          class="Park-Images"
          src={Fantasyland} 
          alt="Fantasyland"
        ></img>
        <div class = "Body-Text">
        Fantasyland is a themed land at the Magic Kingdom at the Walt Disney Resort. This place opened on October 1, 1971, and replaced some of Disney's Toontown in 2011. At Fantasyland, it includes some beautiful attractions and Disney couples that it is worth visiting. But the primary reason for visiting Fantasyland is to see Cinderella's castle which is a central icon for Disney parks. In addition to seeing the iconic castle, we also tend to ride on its well-known attraction "it's a small world", which consisted of rotating teacups and other fantasy stuff. If you are going to meet someone, it should either be Belle and Beast, or Cinderella and her Prince Charming.
        <br></br>
        <br></br>
        In Disney Magic Kingdoms, Fantasyland unlocks after various Toy Story characters defeat Zurg. It costs 45,000 magic to unlock Fantasyland.
        </div>
      </div>
      
      <div style={{display:"inline-block", width:"100%"}}>
        <div class = "Frontierland">
        Frontierland
        </div>
        <img
          class="Park-Images"
          src={Frontierland} 
          alt="Frontierland"
        ></img>
        <div class = "Body-Text">
        Frontierland is a themed land at the Magic Kingdom at the Walt Disney Resort. Like Tomorrowland and Fantasyland, this place opened on October 1, 1971. This place has a western theme into it, which Woody's Roundup gang would definitely like to see. In addition to the western theme, it is known for their iconic rides called the Big Thunder Mountain Railroad and the Splash Mountain. However, they have decided to replace Splash Mountain with Tiana's Bayou Adventure.
        <br></br>
        <br></br>
        In Disney Magic Kingdoms, Frontierland unlocks after Rapunzel, Flynn, and Maximus deals with her "bossy" mother Gothel. It costs 65,000 magic to unlock Frontierland - not much of a difference if you ask me.
        </div> 
      </div>     
      
      <div style={{display:"inline-block", width:"100%"}}>
        <div class = "Adventureland">
        Adventureland
        </div>
        <img
          class="Park-Images"
          src={Adventureland} 
          alt="Adventureland"
        ></img>
        <div class = "Body-Text">
        Adventureland is a themed land at the Magic Kingdom at the Walt Disney Resort. It is divided into two sub-areas which are called the "Arabian Village" and the "Caribbean Plaza". What it is mostly known for is having a pirate-related theme. By entering Adventureland, you will get to meet some well-known pirates like Jack Sparrow, Will Turner, Elizabeth Swann, and even Davy Jones! If you are hungry for more, you might as well hang out and eat at the Tortuga Tavern.
        <br></br>
        <br></br>
        In Disney Magic Kingdoms, Adventureland unlocks during the early stages of the Peter Pan storyline. It costs 350,000 magic to unlock Adventureland. This will definitely make a difference whether a player is truely committed to spending time at Disney Magic Kingdoms.
        </div>
      </div>

    </div>
  );
}

export default Areas;