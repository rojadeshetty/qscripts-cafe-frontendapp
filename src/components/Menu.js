import React from 'react'
import TopNavigation from './TopNavigation'

// Functional component for the Menu page
function Menu() {
  return (
    <div>
      {/* Including the TopNavigation component */}
      <TopNavigation/>
      <div>
        {/* Main content container */}
        <h2 className='menu-main-heading'>Our Menu </h2>
        <div>
          {/* Container for coffee drinks */}
          <h3 className='coffee-menu-heading'>Coffee Drinks &#x2615; </h3>
          {/* List of coffee drinks */}
          <ul>
            <li>
              <strong>Espresso</strong> - A concentrated shot of coffee brewed by forcing hot water through finely-ground coffee beans.
            </li>
            <li>
              <strong>Cappuccino</strong> - An Italian coffee drink consisting of espresso, hot milk, and steamed milk foam.
            </li>
            <li>
              <strong>Latte</strong> - A coffee drink made with espresso and steamed milk, often topped with a small amount of foam.
            </li>
            <li>
              <strong>Americano</strong> - A coffee drink made with espresso and hot water, resulting in a similar strength to drip coffee but with a different flavor profile.
            </li>
            <li>
              <strong>Flat White</strong> - A coffee drink originating from Australia or New Zealand, similar to a latte but with a higher coffee-to-milk ratio and a velvety texture.
            </li>
            <li>
              <strong>Mocha</strong> - A chocolate-flavored espresso drink with steamed milk and topped with whipped cream.
            </li>
            <li>
              <strong>Macchiato</strong> - An espresso-based coffee drink with a small amount of milk foam or steamed milk, often served as a short drink.
            </li>
            <li>
              <strong>Affogato</strong> - A dessert coffee made by pouring a shot of hot espresso over a scoop of vanilla ice cream.
            </li>
            <li>
              <strong>Irish Coffee</strong> - A cocktail consisting of hot coffee, Irish whiskey, sugar, and topped with whipped cream.
            </li>
            <li>
              <strong>Vienna Coffee</strong> - A coffee drink made with espresso, whipped cream, and sometimes chocolate shavings or cinnamon.
            </li>
          </ul>
        </div>
         {/* Container for pastries */}
        <div>
          <h3 className='pastries-menu-heading'>Pastries 🥐</h3>
          {/* List of pastries */}
          <ul>
            <li>
              <strong>Croissants</strong> - Flaky, buttery pastries originating from France, perfect for breakfast or a snack.
            </li>
            <li>
              <strong>Muffins</strong> - Moist and flavorful individual-sized cakes, available in various flavors like blueberry, chocolate chip, and banana nut.
            </li>
            <li>
              <strong>Scones</strong> - Tender and crumbly pastries often flavored with fruits, nuts, or spices, ideal for pairing with coffee or tea.
            </li>
            <li>
              <strong>Danishes</strong> - Light and flaky pastries with sweet fillings such as fruit, cream cheese, or almond paste.
            </li>
            <li>
              <strong>Cinnamon Rolls</strong> - Soft, fluffy rolls filled with cinnamon and sugar, topped with cream cheese icing.
            </li>
            <li>
              <strong>Bagels</strong> - Chewy, ring-shaped bread rolls available plain or with various toppings like sesame seeds, poppy seeds, or everything seasoning.
            </li>
            <li>
              <strong>Donuts</strong> - Deep-fried doughnuts with a sweet glaze or frosting, available in a variety of flavors and toppings.
            </li>
            <li>
              <strong>Croissant Sandwiches</strong> - Flaky croissants filled with savory ingredients like ham, cheese, and scrambled eggs.
            </li>
            <li>
              <strong>Apple Turnovers</strong> - Flaky pastries filled with spiced apple filling and glazed with icing.
            </li>
            <li>
              <strong>Chocolate Croissants</strong> - Butter croissants filled with rich chocolate and baked until golden brown.
            </li>
          </ul>
          <br></br>
          <div><p className='menu-end-quote'>"Pair your favorite pastry with a perfectly crafted coffee for a moment of pure delight."</p></div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

