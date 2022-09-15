import React from "react";
import CardProduct from "../../components/CardProduct/index.js";
import Main from "../../layout/Main.js";
import "../../asset/style/Home.css";
import { BsFillInboxFill } from "react-icons/bs";

import records from "../../data/records.json";

function Home() {
	const dataDummy = [...records, ...records];
	return (
		<>
			<Main />
			<section className="container main-container">
				<div className="tabs">
					<div className="tabs-product">
						<BsFillInboxFill size={20} />
						<div>Produk</div>
					</div>
				</div>
				<div className="secondary-title">Menampilkan {dataDummy.length} produk</div>
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
