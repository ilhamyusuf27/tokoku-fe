import React from "react";
import CardProduct from "../../components/CardProduct/index.js";
import Main from "../../layout/Main.js";
import "../../asset/style/Home.css";

import records from "../../data/records.json";

function Home() {
	const dataDummy = [...records, ...records, ...records, ...records, ...records];
	return (
		<>
			<Main />
			<section className="container main-container">
				<div className="main-product">
					{dataDummy.map((item, index) => (
						<CardProduct item={item} key={"H" + index} />
					))}
				</div>
			</section>
		</>
	);
}

export default Home;
