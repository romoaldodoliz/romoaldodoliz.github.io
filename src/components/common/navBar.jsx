import React from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;

	return (
		<div className="nav-container">
			<nav className="navbar">
				<ul className="nav-list">
					<li className={active === "home" ? "nav-item active" : "nav-item"}>
						<Link to="/">Home</Link>
					</li>
					<li className={active === "about" ? "nav-item active" : "nav-item"}>
						<Link to="/about">Sobre</Link>
					</li>
					<li className={active === "projects" ? "nav-item active" : "nav-item"}>
						<Link to="/projects">Projetos</Link>
					</li>
					<li className={active === "articles" ? "nav-item active" : "nav-item"}>
						<Link to="/articles">Artigos</Link>
					</li>
					<li className={active === "contact" ? "nav-item active" : "nav-item"}>
						<Link to="/contact">Contato</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
