import React from "react";
import { useNavigate } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";
import { MdStore } from "react-icons/md";

import "../../asset/style/components/CardProduct.css";

function CardProduct(props) {
	const navigate = useNavigate();
	const { item } = props;

	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};

	return (
		<div className="card" onClick={() => navigate(`/product/${item?.slugs}`)}>
			<div className="card-image">
				<img src={item?.image[0] ?? "/images/product-default.jpg"} alt="product" width={"100%"} height="auto" />
			</div>
			<div className="card-content">
				<a href="/" className="card-link">
					<div className="card-title">{item?.product}</div>
					<div className="card-product-price">{rupiah(item?.price)}</div>
					<div className="card-store">
						<MdStore />
						<div className="card-store-name">{item?.store}</div>
					</div>
					<div className="card-rating">
						<div className="card-icon-container">
							{[...new Array(5)].map((item, index) => (
								<AiFillStar color="#FEBE2A" key={"S" + index} className="card-icon" />
							))}
						</div>
						<div className="card-rating-display">(12)</div>
					</div>
				</a>
			</div>
		</div>
	);
}

export default CardProduct;
