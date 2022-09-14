import React from "react";
import Main from "../../layout/Main.js";

function NotFound() {
	return (
		<>
			<Main />
			<section className="container main-container full-size">
				<img src="/images/404.svg" alt="not-found" />
			</section>
		</>
	);
}

export default NotFound;
