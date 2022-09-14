import React from "react";
import CardProduct from "../../components/CardProduct/index.js";
import Main from "../../layout/Main.js";
import "../../asset/style/Home.css";

import records from "../../data/records.json";

function Home() {
	return (
		<>
			<Main />
			<section className="container main-container">
				<div className="main-product">
					{records.map((item) => (
						<CardProduct item={item} />
					))}
				</div>
			</section>
		</>
	);
}

export default Home;
