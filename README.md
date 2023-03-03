#

### using context api to track the things one chooses to buy in the cart page 28:30

export const ShopContext = createContext(null); //Step 1

<ShopContext.Provider value={contextValue}>
{props.children}
</ShopContext.Provider> //Step 2

//Step 3. Creating a value-placeholder that has everything we want to pass on to other
const contextValue = { cartItems, addToCart, removeFromCart };

//step4 wrap the parent component with the <contextProvider> timestamp 37:40

### CSS applied in the parent component is applied to child comp! 26:00

### faking a json data for products in the shop 18:30

we create a js file with a array of objects. We link the img location to one of the properties.

we can export this to other locations to use it.

import { PRODUCTS } from "../assets/products";
we are using { }

#### !!Got stuck due to not including export before the class and shop functions

"export" const shop = ()=>....

just noticed that export next to function name is used instead of "export default function;" at the last line.

### Placing links timestamp 11:30

import {Link} from "react-router-dom"; step1

<Route path="/" element={<Shop />} /> step2

<Link to="/"> Shop </Link>            step3

### exporting a component

a. export const Navbar =()=>... //???i'm not sure why you need exporting...

b. in your app.js
import {Navbar} from "./components/navbar";

c. placing the navbar component inbetween <Router> and <Routes>

### setting up Routes for the page

      <Router>
        <Navbar />      <--- Navbar will be visible everywhere.
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
        </Routes>
      </Router>

### Packages needed [tutorial link](https://www.youtube.com/watch?v=tEMrD9t85v4&t=700s)

    npm install phosphor-react react-router-dom

    # You import react-router-dom with
        import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
