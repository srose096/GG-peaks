import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"
import "../Styles/Navbar.css"


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>GG Peaks</h3>
			<nav ref={navRef}>
				<Link to='/' >Home</Link>
				<Link to='/Mountain'>Mountain</Link>
				<Link to='/Passes'>Passes</Link>
				<Link to='/Rentals'>Rentals</Link>
                <Link to='/Shop'>Shop</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
