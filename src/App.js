// App.js

import React from "react"; // Importing React library
import "./App.css"; // Importing the CSS file for styling

import Posts from "./components/Posts"; // Importing the Posts component
import BannerNav from "./components/BannerNav"; // Importing the BannerNav component

const App = () => {
  return (
    <div className="main-container"> {/* Main container for the application */}
      <BannerNav /> {/* Rendering the BannerNav component */}
      <Posts /> {/* Rendering the Posts component */}
    </div>
  );
};

export default App; // Exporting the App component as the default export
