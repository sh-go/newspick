export const getPickUpNews = async () => {
	const keyword = "教育";
	const sortBy = "popularity";
	const pickupPageSize = 5;
	const pickupDays = 3;
	const dt = new Date();
	const pickupToday = dt.toLocaleDateString().replaceAll("/", "-");
	const pickupDiffDay = dt.setDate(dt.getDate() - pickupDays);

	const pickRes = await fetch(
		`https://newsapi.org/v2/everything?q=${keyword}&from=${pickupDiffDay}&to=${pickupToday}&language=jp&pageSize=${pickupPageSize}&sortBy=${sortBy}&apiKey=41ad93d4907447039d90b87be10927cd`
	);
	const pickJson = await pickRes.json();
	const pickArticles = pickJson.articles;

	return {
		props: { pickArticles },
	};
};
