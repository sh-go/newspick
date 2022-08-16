export const getNews = async () => {
	const newsSize = 10;
	const topRes = await fetch(
		`https://newsapi.org/v2/top-headlines?country=jp&pageSize=${newsSize}&apiKey=41ad93d4907447039d90b87be10927cd`
	);
	const topJson = await topRes.json();
	const topArticles = topJson?.articles;

	const keyword = "教育";
	const sortBy = "popularity";
	const pickupPageSize = 5;
	const pickRes = await fetch(
		`https://newsapi.org/v2/everything?q=${keyword}&from=2022-08-15&to=2022-08-15&language=jp&pageSize=${pickupPageSize}&sortBy=${sortBy}&apiKey=41ad93d4907447039d90b87be10927cd`
	);
	const pickJson = await pickRes.json();
	const pickArticles = pickJson.articles;

	return {
		props: { topArticles, pickArticles },
	};
};
