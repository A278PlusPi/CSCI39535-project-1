import './Info.css';
import FunWheel from './images/attraction-mickey-fun-wheel.jpg';
import AstroBlast from './images/attraction-buzz-lightyear-astro-blasters.jpg';
import SmallWorld from './images/attraction-its-a-small-world.webp';
import TikiRoom from './images/attraction-enchanted-tiki-room.jpg';

function Attractions() {
  return (
    <div>
     <div class = "Main-Content">

      <div class = "Card-Series">
        <div class = "Info-Card">
          <div class = "H1-Text">
            Mickey's Fun Wheel
          </div>
          <img
            class="Info-Images"
            src={FunWheel} 
            alt=" Mickey's Fun Wheel"
            ></img>
          <div class = "Body-Text">
          Mickey's Fun Wheel is a 150-foot-tall eccentric wheel (not a ferris wheel) at the Disneyland Resort in Califoria. This attraction opened on Feruary 8, 2001 as Sun Wheel. Since the 2018 renovation, the wheel is now called Pixar Pal-A-Round that features Pixar characters on the gondolas, although Mickey's face (not a Pixar character) remains on the side. That is why I still call the attraction "Mickey's Fun Wheel" for a good reason. Have a ride though, it will be fun!
          <br></br>
          <br></br>
          In Disney Magic Kingdoms, this is the first attraction you will build to bring back visitors, friends, and happiness that we lost during Maleficent's powerful curse.
          </div>
        </div>

        <div class = "Info-Card">
          <div class = "H1-Text">
            Buzz Lightyear's Astro Blasters
          </div>
          <img
            class="Info-Images"
            src={AstroBlast} 
            alt="Astro Blasters"
            ></img>
          <div class = "Body-Text">          
          Buzz Lightyear's Astro Blasters (a.k.a. Buzz Lightyear's Space Ranger Spin) is an interactive shooting dark ride attraction located in the Tomorrowland area of Disney parks. This attraction first opened on November 3, 1998, but multiple versions of this attractions opened at different parts of the world as well. It isn't just an attraction, but it is an in-person, out-of-this-world game you can play inside it! You will have fun going to infinity and beyond in it!
          <br></br>
          <br></br>
          In Disney Magic Kingdoms, you can unlock this attraction by playing Disney Magic Kingdoms for 30 consecutive days. Wow... you are really committed to your kingdom if you build this attraction.
          </div>
        </div>

        <div class = "Info-Card">
          <div class = "H1-Text">
            "it's a small world" 
          </div>
          <img
            class="Info-Images"
            src={SmallWorld} 
            alt="it's a small world"
            ></img>
          <div class = "Body-Text">
          "it's a small world" is a water-based boat ride lcated in the Fantasyland area of Disney parks. This attraction first opened on October 1, 1971, but then opened to other areas later on. Additionally, the song "it's a small world" is the most publicly performed song of all time, and it features over 300 audio-animatronic dolls from over 40 countries. That's diverse!
          <br></br>
          <br></br>
          In Disney Magic Kingdoms, you can unlock this landmark attraction by defeating Mother Gothel in Act 3 of the Main Storyline. This landmark attraction doesn't produce magic, however, the magic pedestals near it do if you make Fantasyland thrilling enough, that is!
          </div>
        </div>

        <div class = "Info-Card">
          <div class = "H1-Text">
            Enchanted Tiki Room
          </div>
          <img
            class="Info-Images"
            src={TikiRoom} 
            alt="Enchanted Tiki Room"
            ></img>
          <div class = "Body-Text">
          Enchanted Tiki Room is an attraction located in three locations which is Disneyland in California, Disney World, and Tokyo Disneyland. This attraction is a pseudo-Polynesian musical audio-animatronic show drawing from American tiki culture. It opened on October 1, 1971, and opened in two different locations later on.
          <br></br>
          <br></br>
          In Disney Magic Kingdoms, you can purchase this attraction for 125 gems... hoping that you would get something useful...
          </div>
        </div>

      </div>

      </div>
    </div>
  );
}

export default Attractions;