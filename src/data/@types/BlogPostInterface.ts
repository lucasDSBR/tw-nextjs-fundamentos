export interface BlogPost {
	id: string;
	title: string;
	description: string;
	picture: string;
	slug: string;
	conteudo?: JSX.Element;
}