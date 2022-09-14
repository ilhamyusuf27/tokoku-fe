import React, { useEffect, useState } from "react";
import Main from "../../layout/Main.js";
import "../../asset/style/Checkout.css";
import * as Type from "../../redux/product/type";

import { MdStore } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../../components/Counter/index.js";

function Checkout() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	const { buy } = state?.product;

	const [productCheck, setProductCheck] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		setProductCheck(buy);
	}, [buy]);

	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	};

	const handleChange = (e) => {
		const { name, checked } = e.target;
		if (name === "allSelect") {
			let tempCheck = productCheck.map((item) => {
				dispatch({
					type: Type.SET_CHECK,
					payload: {
						id: item?.id,
						isChecked: checked,
					},
				});
				return { ...item, isChecked: checked };
			});
			setProductCheck(tempCheck);
		} else {
			let tempCheck = productCheck.map((item) => {
				if (item.title === name) {
					dispatch({
						type: Type.SET_CHECK,
						payload: {
							id: item?.id,
							isChecked: checked,
						},
					});
					return { ...item, isChecked: checked };
				} else {
					return item;
				}
			});
			setProductCheck(tempCheck);
		}
	};

	const handleDelete = () => {
		productCheck.find((element) => {
			if (element.isChecked) {
				dispatch({
					type: Type.PRODUCT_DELETE,
					payload: {
						idProductDelete: element.id,
					},
				});
				return element;
			}
		});
	};

	useEffect(() => {
		const price = state.product.buy
			.filter((res) => res.isChecked)
			.map((res) => res.price * res.total)
			.reduce((previous, current) => previous + current, 0);

		setTotalPrice(price);
	}, [productCheck, state]);

	return (
		<>
			<Main />
			{buy.length ? (
				<section className="container main-container">
					<div className="checkout">
						<div className="item-container">
							<div className="item-control">
								<div className="item-productCheck-group">
									<input type="checkbox" id="productCheck-all-items" name="allSelect" onChange={handleChange} className="checks" />
									<label htmlFor="productCheck-all-items">Pilih semua produk</label>
								</div>

								<div className="item-delete" onClick={handleDelete}>
									Hapus
								</div>
							</div>
							{productCheck?.map((item, index) => (
								<div className="item-list" key={"L" + index}>
									<div className="store-id">
										<div className="store-name">
											<MdStore />
											<div className="name-store">{item?.store}</div>
										</div>
										<div className="store-loc">Jakarta Pusat</div>
									</div>

									<div className="item-desc">
										<div className="item-productCheck-group">
											<input type="checkbox" id="productCheck-all-items" name={item.title} className="checks" checked={item?.isChecked || false} onChange={handleChange} />
										</div>
										<div className="item-desc-group">
											<div className="item-images">
												<img src={item?.image ?? "/images/product-default.jpg"} width="100%" height="100%" alt="product" />
											</div>
											<div className="item-desc-detail">
												<div className="item-desc-title">
													{item.title} - {item?.color}, {item?.size}
												</div>
												<div className="item-price">{rupiah(item?.price)}</div>
											</div>
										</div>
									</div>

									<div className="item-action">
										<div className="add-memo">Tulis catatan untuk Toko</div>

										<Counter total={item?.total} id={item?.id} />
									</div>
								</div>
							))}
						</div>

						<div className="checkout-sum">
							<div className="sum-title">Ringkasan Belanja</div>
							<div className="sum-price">
								<div className="sum-price-title">Total Harga</div>

								<div className="price-sum">{rupiah(totalPrice)}</div>
							</div>
							<button className="button">Beli</button>
						</div>
					</div>
				</section>
			) : (
				<section className="container main-container full-size">
					<img src="/images/empty.svg" alt="empty" width={"50%"} />
				</section>
			)}
		</>
	);
}

export default Checkout;
