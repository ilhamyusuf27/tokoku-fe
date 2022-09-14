import React from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Modal(props) {
	const navigate = useNavigate();
	const state = useSelector((state) => state);
	const stateProduct = state?.product?.buy;
	const dataProduct = stateProduct.length ? stateProduct[stateProduct.length - 1] : null;
	const { show, hide } = props;
	return (
		<>
			{show ? (
				<div className="modal-bg">
					<div className="modal-content">
						<div className="modal-close">
							<IoMdClose onClick={hide} />
						</div>

						<div className="modal-title">Berhasil Ditambahkan</div>
						<div className="modal-stuffing">
							<div className="modal-items">
								<div className="item-info">
									<div className="items-image">
										<img src={dataProduct?.image ?? "/images/product-default.jpg"} width={"100%"} height="100%  " alt="product" />
									</div>
									<div className="item-title">{dataProduct?.title}</div>
								</div>
								<button className="button" onClick={() => navigate("/checkout")}>
									Lihat Keranjang
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}

export default Modal;
