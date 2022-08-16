export const getNewsCategory = async (params?: string) => {
	const catRes = await fetch(
		`https://newsapi.org/v2/top-headlines?country=jp&category=${params}&apiKey=41ad93d4907447039d90b87be10927cd`
	);
	const catJson = await catRes.json();
	const catArticles = catJson.articles;
	return catArticles;
};
