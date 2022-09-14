import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Type from "../../redux/product/type";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function Counter(props) {
	const { total, id } = props;
	const dispatch = useDispatch();
	const [init, setInit] = useState(total);

	const handleMin = () => {
		if (init > 1) {
			setInit(init - 1);
			dispatch({
				type: Type.SET_MIN,
				payload: {
					id,
					num: 1,
				},
			});
		}
	};

	const handlePlus = () => {
		if (init < 25) {
			setInit(init + 1);
			dispatch({
				type: Type.SET_PLUS,
				payload: {
					id,
					num: 1,
				},
			});
		}
	};

	return (
		<div className="counter-items">
			<div className={`${init === 1 ? "disable" : null} btn-counter`} onClick={handleMin}>
				<AiOutlineMinus />
			</div>

			<div className="counter-number">{init}</div>

			<div className={`${init === 25 ? "disable" : null} btn-counter`} onClick={handlePlus}>
				<AiOutlinePlus />
			</div>
		</div>
	);
}

export default Counter;
