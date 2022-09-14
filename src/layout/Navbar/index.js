import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../asset/style/components/Navbar.css";

import { FiGift, FiMenu, FiX } from "react-icons/fi";
import { BsFillCartFill, BsFillBellFill, BsFillEnvelopeFill, BsSearch } from "react-icons/bs";

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<nav className="navbar">
			<div className="navbar-container container">
				<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
					<FiGift className="navbar-icon" />
					<h1>Tokoku</h1>
				</Link>

				<div className="nav-menu-icon" onClick={handleClick}>
					{click ? <FiX color="#67707B" /> : <FiMenu color="#67707B" />}
				</div>

				<div className="nav-search">
					<div className="nav-input-group">
						<div className="input-group">
							<input type="text" placeholder="Cari barangmu disini..." className="nav-input" />
						</div>
						<div className="nav-btn-search">
							<BsSearch color="#A8ABB0" size={15} />
						</div>
					</div>
				</div>

				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/checkout" className="nav-links" onClick={closeMobileMenu}>
							<BsFillCartFill />
							{click ? "Checkout" : null}
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/notification" className="nav-links" onClick={closeMobileMenu}>
							<BsFillBellFill />
							{click ? "Notification" : null}
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/message" className="nav-links" onClick={closeMobileMenu}>
							<BsFillEnvelopeFill />
							{click ? "Message" : null}
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
