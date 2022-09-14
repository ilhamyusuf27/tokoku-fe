import React, { useState } from "react";
import Main from "../../layout/Main.js";
import "../../asset/style/Detail.css";
import { useParams } from "react-router-dom";
import records from "../../data/records.json";
import { useDispatch, useSelector } from "react-redux";

import * as Type from "../../redux/product/type";

import Modal from "../../components/Modal/index.js";

function Detail() {
	const dispatch = useDispatch();
	const state = useSelector((res) => res);

	const params = useParams();
	const slug = params.slug;
	const find = records?.filter((obj) => obj.slugs === slug);
	const { product, price, image, category, size, store, id } = find[0];

	let temp = [];

	category.forEach((item) => {
		if (item) {
			return temp.push(item.img);
		}
	});

	const imageDisplay = [...image, ...temp];

	const [display, setDisplay] = useState(imageDisplay[0]);
	const [cart, setCart] = useState({ id, title: product, store, price, color: "", size: "", image: image[0], total: 1 });
	const [show, setShow] = useState(false);

	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};

	const handleAdd = () => {
		if (cart.color === "" || cart.size === "") {
			return alert("Color atau size harus di isi!!!");
		}

		console.log("test1");
		const find = state?.product?.buy?.some((res) => res.id === id);

		if (!find) {
			dispatch({
				type: Type.SET_PRODUCT,
				payload: { ...cart },
			});

			setShow(true);
			return;
		}

		dispatch({
			type: Type.SET_PLUS,
			payload: {
				id,
				num: 1,
			},
		});
		setShow(true);
	};

	const handleOff = () => setShow(!show);

	return (
		<>
			<Main />
			<section className="container main-container">
				<div className="product-container">
					<div className="product-image">
						<div className="product-image-main">
							<img src={display ?? `/images/product-default.jpg`} alt="product-default" width="100%" height="100%" />
						</div>
						<div className="product-image-display">
							{imageDisplay.map((item) => (
								<img src={item ?? "/images/product-default.jpg"} alt="product-default" width="100%" height="100%" onClick={() => setDisplay(item)} />
							))}
						</div>
					</div>

					<div className="product-detail-order">
						<div className="product-detail-title">{product}</div>

						<div className="product-order-info">
							<div className="product-info-title">Harga</div>
							<div className="product-info-price">{rupiah(price)}</div>
						</div>

						<div className="product-order-info">
							<div className="product-info-title">Warna</div>
							<div className="product-item">
								<div className="product-item-title">Pilih variant</div>
								<div className="product-item-list">
									{category?.map((item, index) => (
										<div className="product-item-group">
											<input type="radio" id={item?.title + index} name="color" value={item.title} onChange={(e) => setCart({ ...cart, color: e.target.value })} required />
											<label for={item?.title + index} className="select-item-btn" onClick={() => setDisplay(item.img)}>
												<img src={item?.img ?? "/images/product-default.jpg"} width="100%" height="auto" alt="item" />
												{item?.title}
											</label>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="product-order-info">
							<div className="product-info-title">ukuran</div>
							<div className="product-item">
								<div className="product-item-title">Pilih variant</div>
								<div className="product-item-list">
									{size?.map((item, index) => (
										<div className="product-item-group">
											<input type="radio" id={item + index} name="size" value={item} onChange={(e) => setCart({ ...cart, size: e.target.value })} required />
											<label for={item + index} className="select-item-btn">
												{item}
											</label>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="product-add-cart">
				<div className="container h-100">
					<div className="add-cart-container">
						<button className="button" onClick={handleAdd}>
							Tambah ke keranjang
						</button>
					</div>
				</div>
			</section>

			<Modal show={show} hide={handleOff} />
		</>
	);
}

export default Detail;
