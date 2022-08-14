import { Box, Container, HStack, Image, Spacer } from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header";

function App() {
	getNews().then((d) => {
		console.log(d.props);
	});

	const initState = [
		{
			author: "",
			title: "",
			publishedAt: "",
			url: "",
			urlToImage: "",
		},
	];
	const [news, setNews] = useState(initState);

	useEffect(() => {
		getNews()
			.then((d) => setNews(d.props.topArticles))
			.catch((e) => {
				throw new Error(e);
			});
	}, []);

	return (
		<BrowserRouter>
			<Container maxW="1200px" p={3}>
				<Header />
				{news.map((d, index) => (
					<Box
						m={3}
						p={3}
						rounded="md"
						borderWidth="thin"
						borderColor="white"
					>
						<HStack>
							<Box>
								{d.title +
									" " +
									moment(d.publishedAt || moment.now())
										.fromNow()
										.slice(0, 1) +
									"時間前"}
							</Box>
							<Spacer />
							<Image
								src={d.urlToImage}
								boxSize="150px"
								w="230px"
								objectFit="cover"
								key={index}
							/>
						</HStack>
					</Box>
				))}
			</Container>
		</BrowserRouter>
	);
}

export default App;

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
