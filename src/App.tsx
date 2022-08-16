import { Box, Container, Flex, Spacer } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {} from "react-icons/ai";

import "./App.css";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { TopList } from "./components/TopList";
import { getNews } from "./api/getNews";
import { CategoryList } from "./components/CategoryList";

function App() {
	getNews().then((d) => {
		console.log(d.props);
	});

	return (
		<BrowserRouter>
			<Container maxW="100%" p={3}>
				<Header />
				<Flex>
					<Box flex={1} position="fixed">
						<Nav />
					</Box>
					<Spacer />
					<Box flex={3}>
						<Routes>
							<Route path="/" element={<TopList />} />
							<Route path="/:cat" element={<CategoryList />} />
						</Routes>
					</Box>
				</Flex>
			</Container>
		</BrowserRouter>
	);
}

export default App;
