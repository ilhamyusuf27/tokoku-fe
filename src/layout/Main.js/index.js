import React from "react";
import Navbar from "../Navbar";

function Main(props) {
	const { children } = props;
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}

export default Main;
