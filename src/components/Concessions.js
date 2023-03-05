import './Info.css';

import CottonCandy from './images/concession-cotton-candy-cart.webp';
import Hat from './images/concession-hat-emporium.webp';
import IceCream from './images/concession-ice-cream-stand.webp';
import CandyApple from './images/concession-mickey-candy-apple-stand.webp';
import Popcorn from './images/concession-popcorn-cart.webp';
import WDW50 from './images/concession-wdw-50-anniversary-hat-stand.webp';

function Concessions() {
  return (
    <div>
       <div class = "Main-Content">

        <div class = "Card-Series">
          <div class = "Info-Card">
            <div class = "H1-Text">
              Cotton Candy Cart
            </div>
            <img
              class="Info-Images"
              src={CottonCandy} 
              alt="Cotton Candy Cart"
              ></img>

            <div class = "Caption">
            Produces: 53 magic / 6 hours
            <br></br>
            Rarity: Rare (3 stars)
            </div>
          </div>

          <div class = "Info-Card">
            <div class = "H1-Text">
              Hat Emporium
            </div>
            <img
              class="Info-Images"
              src={Hat} 
              alt="Hat Emporium"
              ></img>
              
            <div class = "Caption">
            Produces: 72 magic / 12 hours
            <br></br>
            Rarity: Uncommon (2 stars)
            </div>
          </div>

          <div class = "Info-Card">
            <div class = "H1-Text">
              Ice Cream Stand
            </div>
            <img
              class="Info-Images"
              src={IceCream} 
              alt="Ice Cream Stand"
              ></img>

            <div class = "Caption">
            Produces: 60 magic / 12 hours
            <br></br>
            Rarity: Common (1 star)
            </div>
          </div>

          <div class = "Info-Card">
            <div class = "H1-Text">
              Mickey's Candy Apple Stand
            </div>
            <img
              class="Info-Images"
              src={CandyApple} 
              alt="Mickey's Candy Apple Stand"
              ></img>

            <div class = "Caption">
            Produces: 53 magic / 6 hours
            <br></br>
            Rarity: Rare (3 stars)
            </div>
          </div>

          <div class = "Info-Card">
            <div class = "H1-Text">
              Popcorn Cart
            </div>
            <img
              class="Info-Images"
              src={Popcorn} 
              alt="Popcorn Cart"
              ></img>
            <div class = "Caption">
            Produces: 53 magic / 8 hours
            <br></br>
            Rarity: Uncommon (2 stars)
            </div>
          </div>

          <div class = "Info-Card">
            <div class = "H1-Text">
              WDW 50th Anniversary Hat Stand
            </div>
            <img
              class="Info-Images"
              src={WDW50} 
              alt="WDW 50th Anniversary Hat Stand"
              ></img>
            <div class = "Caption">
            Produces: 61 magic / 6 hours
            <br></br>
            Rarity: Epic (4 stars)
            </div>
          </div>
        </div>
        
       </div>
    </div>
  );
}

export default Concessions;