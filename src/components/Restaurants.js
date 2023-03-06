import DaisyDiner from './images/restaurant-daisy-diner.jpg';
import PizzaPlanet from './images/restaurant-alien-pizza-planet.jpg';
import BeOurGuest from './images/restaurant-be-our-guest-restaurant-gallery04.webp';
import GoldenHorseshoe from './images/restaurant-golden-horseshoe.jpg';
import TortugaTavern from './images/restaurant-tortuga-tavern.webp';

function Restaurants() {
  return (
    <div>
       <div class = "Main-Content">

        <div class = "Card-Series">
          <div class = "Info-Card">
            <div class = "H1-Text">
              Daisy's Diner
            </div>
            <img
              class="Info-Images"
              src={DaisyDiner} 
              alt="Daisy's Diner"
              ></img>
            <div class = "Body-Text">
            Daisy's Diner is one of the restaurants at Disneyland's Toontown. This restaurant serves pizza and salads. It was open before, but now it is being renovated for its reopening this year (2023).
            </div>
          </div>

          <div class = "Info-Card">
            <div class = "H1-Text">
              Pizza Planet
            </div>
            <img
              class="Info-Images"
              src={PizzaPlanet} 
              alt="Pizza Planet"
              ></img>
            <div class = "Body-Text">
              Pizza Planet is a space-themed restaurant that has originally appeared in Toy Story. In Disneyland, it originally opened at "Redd Rockett's Pizza Port" on May 22, 1998, but almost 20 years, it re-opened on April 13, 2018 as "Alien Pizza Planet" during Pixar Fest. This restaurant serves pizza, pasta, and salads.
            </div>
          </div>

          <div class = "Info-Card">
            <div class = "H1-Text">
              Be Our Guest Restaurant
            </div>
            <img
              class="Info-Images"
              src={BeOurGuest} 
              alt="Be Our Guest Restaurant"
              ></img>
            <div class = "Body-Text">
            Be Our Guest Restaurant is a table service restaurant from the 1992 film Beauty and the Beast. This restaurant can be found in Fantasyland, and it was open on November 19, 2012. This restaurant's cuisine is French, although they serve American food as well.
            </div>
          </div>

          <div class = "Info-Card">
            <div class = "H1-Text">
              Golden Horseshoe
            </div>
            <img
              class="Info-Images"
              src={GoldenHorseshoe} 
              alt="Golden Horseshoe"
              ></img>
            <div class = "Body-Text">
            The Golden Horseshoe is both a restaurant and attraction at Disneyland Park at California. It was open on July 13, 1955 along with other original attractions at the Disneyland Park. This attraction can be found on Frontierland, and it provides wonderful views to Rivers of America, New Orleans Square, and partially Critter Country.
            </div>
          </div>

          <div class = "Info-Card">
            <div class = "H1-Text">
              Tortuga Tavern
            </div>
            <img
              class="Info-Images"
              src={TortugaTavern} 
              alt="Tortuga Tavern"
              ></img>
            <div class = "Body-Text">
            Tortuga Tavern is a pirate-themed restaurant located near Pirates of the Caribbean in Adventureland at Walt Disney World. It was open on February 6, 2011. This restaurant serves Beef Nachos, Burritos, Taco Salad, Vegetarian Burritos as well as Triple Chocolate Cake.
            </div>
          </div>

        </div>
        
       </div>
    </div>
  );
}

export default Restaurants;