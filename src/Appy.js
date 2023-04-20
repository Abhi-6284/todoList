// import React from 'react';

// import Product from './components/Product/Product';

// // don't change the Component name "App"
// const App = () => {

//     const products = [
//         {
//             TITLE: 'Product 1',
//             PRICE: 10,
//             DESCRIPTION: 'First product'
//         },
//         {
//             TITLE: 'Product 2',
//             PRICE: 20,
//             DESCRIPTION: 'Second product'
//         }];

//     return (
//         <div>
//             <h1>My Demo Shop</h1>
//             {products.map((product) => (
//                 <Product
//                     title={product.TITLE}
//                     price={product.PRICE}
//                     description={product.DESCRIPTION}
//                 />
//             ))}
//         </div>
//     );
// }

// export default App;

// import React, { useState } from 'react';

// // don't change the Component name "App"
// export default function App() {

//     const [increment, setIncrement ] = useState(0);

//     const clickIncrement = (e) => {
//         setIncrement(increment+1)
//     }

//     const clickDecrement = (e) => {
//         if (increment <= 0) {
//             setIncrement(0);
//         }else{
//             setIncrement(increment - 1)
//         }
//     }


//     return (
//       <div style={{margin: "0", padding: "3rem", color: "#959090", textAlign: "center"}}>
//         <p id="counter" style={{color: "#d7adff", fontSize: "3rem"}}>{increment}</p>
//         <button onClick={clickIncrement}>Increment</button>
//         <button onClick={clickDecrement}>Decrement</button>
//       </div>
//     );
// }


import React, { useState } from 'react';
import './index.css';

// don't change the Component name "App"
export default function App() {

    const [showPopup, setShowPopup] = useState(false);

    const handleDeleteClick = () => {
        setShowPopup(true);
    };

    const handleProceedClick = () => {
        setShowPopup(false);
        // Add your delete logic here
    };

    return (
        <div>
            {showPopup && (
                <div id="alert">
                    <h2>Are you sure?</h2>
                    <p>These changes can't be reverted!</p>
                    <button onClick={handleProceedClick}>Proceed</button>
                </div>
            )}
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    );
}
