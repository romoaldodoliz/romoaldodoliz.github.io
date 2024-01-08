import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experiência Profissional"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://www.standardbank.co.mz/bundles/mzbusinessbase/images/logo2.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Standard Bank Moçambique</div>
							<div className="work-subtitle">
								Test Automation Engineer
							</div>
							<div className="work-duration"><b>Agosto 2023</b> - Presente</div>
						</div>

						<div className="work">
							<img
								src="data:image/png;base64,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"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Moza Banco</div>
							<div className="work-subtitle">
							Test Automation Engineer
							</div>
							<div className="work-duration"><b>Março 2023 </b>- Agosto 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
