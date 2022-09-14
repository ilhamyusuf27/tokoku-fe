import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";
import UnderMaintain from "../pages/UnderMaintain";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="/product/:slug" element={<Detail />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/message" element={<UnderMaintain />} />
					<Route path="/notification" element={<UnderMaintain />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
