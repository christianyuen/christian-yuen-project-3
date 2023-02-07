import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from './Components/firebase'
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    // create a variable that holds our database details
    const database = getDatabase(firebase)
    // create a variable that makes a reference to our datbase
    const dbRef = ref(database)
    
    onValue(dbRef, (response) => {
       // here we use Firebase's .val() method to parse our database info the way we want it
      console.log(response.val());
      // here we're creating a variable to store the new state we want to introduce to our app
      const newState = [];

      // here we store the response from our query to Firebase inside of a variable called data.
      // .val() is a Firebase method that gets us the information we want
      const data = response.val();
      // data is an object, so we iterate through it using a for in loop to access each book name 

      for (let key in data) {
        // inside the loop, we push each book name to an array we already created inside the onValue() function called newState
        newState.push(data[key]);
      }

      // then, we call setBooks in order to update our component's state using the local array newState
      setItems(newState);  
    });
  }, [])
    
    const handleAddToCart = () => {
      // some event handler code we would like to run when the button is clicked.
      setCart( cart = cart + 1 );
      console.log(cart);
    }

    let [cart, setCart] = useState(0);

    const handleRemoveFromCart = () => {
      // some event handler code we would like to run when the button is clicked.
      setCart( cart = 0 );
      console.log(cart);
    }


  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <div className="cart">
            <img src={require('./assets/shopping-cart copy.png')}></img>
            <p>{`${cart}`}</p>
          </div>
          <div className="titleContainer">
            <img className="satory" src={require('./assets/satory.png')}></img>
          </div>
        </header>
        <main>
          <ul>
            {items.map((item) => {
              return (
                <li key={item.bonnet.product_id}>
                  <div className="itemContainer">
                    <img className="bucket" src={item.bucket.url} alt={item.bucket.name} />
                    <div className="itemHover">
                      <p className="bucketPrice">{item.bucket.price}</p>
                          <button className="bucketAdd" onClick={handleAddToCart}>+</button>
                          <button className="bucketRemove" onClick={handleRemoveFromCart}>-</button>
                    </div>
                  </div>

                  <div className="itemContainer">
                    <img className="beanie" src={item.beanie.url} alt={item.beanie.name} />
                    <div className="itemHover">
                      <p className="beaniePrice">{item.beanie.price}</p>
                          <button className="beanieAdd" onClick={handleAddToCart}>+</button>
                          <button className="beanieRemove" onClick={handleRemoveFromCart}>-</button>
                    </div>
                  </div>

                  <div className="itemContainer">
                    <img className="bonnet" src={item.bonnet.url} alt={item.bonnet.name} />
                    <div className="itemHover">
                      <p className="bonnetPrice">{item.bonnet.price}</p>
                          <button className="bonnetAdd" onClick={handleAddToCart}>+</button>
                          <button className="bonnetRemove" onClick={handleRemoveFromCart}>-</button>
                    </div>
                  </div>

                  <div id="bagContainer" className="itemContainer">
                    <img className="bag" src={item.bag.url} alt={item.bag.name} />
                    <div className="itemHover">
                      <p className="bagPrice">{item.bag.price}</p>
                          <button className="bagAdd" onClick={handleAddToCart}>+</button>
                          <button className="bagRemove" onClick={handleRemoveFromCart}>-</button>
                    </div>
                  </div>  
                </li>
              )
            })}
          </ul>
        </main>
      </div>
      {/* END WRAPPER */}
      <footer>
        <p>Created at <a href="www.junocollege.com">Juno College of Technology</a></p>
      </footer>
    </div>
  )
}

export default App;

// App logic
// App Component 
	
	// connect the firebase (on(value) method)
		// do this inside of a useEffect() on the intital render (mounting) of App 
		// useEffect( () => , [])
	// get access to the data that contains the clothing inventory

	// 3. Create Item State That will store our database
	// add the firebase data to component state called "clothing"

	// render the clothing state to the page within the JSX
	// 5. create a div element in JSX containing the image, h2, and p elements

	// 6. In the JSX add a "Purchase" Button
	// 7. Add OnClick function on "Purchase" Button (handleAddToCart)
		// create a new state called "cart/setCart"
		// onclick, add	+ 1 to cart and render that number above the cart icon in the header
