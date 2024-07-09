// BlogNav.js

import React from "react"; // Importing React library
import 'bootstrap/dist/css/bootstrap.css'; // Importing Bootstrap CSS
import { Navbar } from 'react-bootstrap'; // Importing Navbar component from react-bootstrap

const BannerNav = () => {
	return (
		<div>
			<Navbar style={{ // Styling for the Navbar component
				backgroundColor: "#f7f7f9", // Background color
				padding: "1rem", // Padding
				border: "1px solid #ddd", // Border
				paddingLeft: "8rem", // Left padding
				display: "flex", // Flex display
				justifyContent: "initial", // Justify content to initial
				
				"@media (min-width: 768px)": { // Media query for min-width 768px
					display: "flex", // Flex display
					justifyContent: "center", // Justify content to center
					padding: "1rem" // Padding
				}
			}}>
				<img
					src='./logo.svg' // Image source
					height='30' // Height of the image
					alt='' // Alt text for accessibility
					loading='lazy' // Lazy loading attribute
				/>
			</Navbar>
		</div>
	)
}

export default BannerNav; // Exporting BannerNav component as default
