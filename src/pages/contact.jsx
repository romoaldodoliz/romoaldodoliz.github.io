import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							{/* <Logo width={46} /> */}
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							<span role="img" aria-label="coffee"> Vamos tomar um ☕</span>
						</div>

						<div className="subtitle contact-subtitle">
							Obrigado pelo seu interesse! Sinta-se à vontade para entrar em contato comigo:
							<ul>
								<li>Email: <b>romoaldodoliz@hotmail.com</b></li>
								<li>WhatsApp: <b>+258 844086711</b></li>
							</ul>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
