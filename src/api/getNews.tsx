export const getNews = async () => {
	const newsSize = 10;
	const topRes = await fetch(
		`https://newsapi.org/v2/top-headlines?country=jp&pageSize=${newsSize}&apiKey=41ad93d4907447039d90b87be10927cd`
	);
	const topJson = await topRes.json();
	const topArticles = topJson?.articles;

	return {
		props: { topArticles },
	};
};
