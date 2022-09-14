import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Checkout from "../pages/Checkout";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="/product/:slug" element={<Detail />} />
					<Route path="/checkout" element={<Checkout />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
