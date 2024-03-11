import React from "react";

function article_1() {
	return {
		date: "4 Julho 2023",
		title: "Pensar como um engenheiro de software",
		description:
			"Pensar como um engenheiro de software envolve adotar uma abordagem lógica e sistemática para resolver problemas e criar soluções de software eficientes.",
		keywords: [
			"Software Engineer",
			"Como pensar como um engenheiro de software",
			"Romoaldo Doliz",
			"Programador",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src="https://media.licdn.com/dms/image/D4E12AQFaktGkx3za2A/article-cover_image-shrink_720_1280/0/1688454640720?e=1710374400&v=beta&t=yk-OZzu9z19DdW0uNLV4OOAUtgPKpXjhY8OZ7oza7Mk"
						alt="random"
						className="randImage"/>

					<div className="paragraph">
						<a
							href="https://www.linkedin.com/pulse/pensar-como-um-engenheiro-de-software-romoaldo-doliz/?trackingId=9ZLvCFJNTgutUHnu0s9mEA%3D%3D" >
								Leia mais sobre isso no Linkedin
						</a>
					</div>
					<p>Pensar como um engenheiro de software envolve adotar uma abordagem lógica e sistemática para resolver problemas e criar soluções de software eficientes. Aqui estão algumas diretrizes que podem ajudá-lo a pensar como um engenheiro de software:
					Quebre o problema em partes menores: Em vez de tentar resolver o problema como um todo, divida-o em partes menores e mais gerenciáveis. Isso permite que você foque em uma parte de cada vez e facilite a resolução do problema como um todo.</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "19 Junho 2023",
		title: "Testes de API",
		description:
			"Automatização de testes já é uma realidade vivenciada por vários projetos de software. Isso se dá para tentar garantir, cada vez mais, a qualidade do que está sendo produzido pelos desenvolvedores e ter uma maior segurança, quando algo for alterado via código, de que nada na aplicação foi alterado/danificado, seja as iterações com o usuário, regras de negócios e comportamentos de APIs.",
		style: ``,
		keywords: [
			"API test",
			"Romoaldo Doliz",
			"Testes de API",
			"Programador Romoaldo Doliz",
		],
		body: (
			<React.Fragment>
			<div className="article-content">
				<img
					src="https://www.xenonstack.com/hubfs/xenonstack-api-testing-tools.png"
					alt="random"
					className="randImage"/>

				<div className="paragraph">
					<a
						href="https://www.linkedin.com/pulse/testes-de-api-romoaldo-doliz/" >
							Leia mais sobre isso no Linkedin
					</a>
				</div>
				<p>Automatização de testes já é uma realidade vivenciada por vários projetos de software. Isso se dá para tentar garantir, cada vez mais, a qualidade do que está sendo produzido pelos desenvolvedores e ter uma maior segurança, quando algo for alterado via código, de que nada na aplicação foi alterado/danificado, seja as iterações com o usuário, regras de negócios e comportamentos de APIs.</p>
			</div>
		</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
