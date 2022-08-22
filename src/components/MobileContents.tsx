import { Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import { CategoryList } from "./CategoryList";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TopList } from "./TopList";

export const MobileContents = () => {
	return (
		<>
			<Header />
			<Container maxW="100%" p={3}>
				<Routes>
					<Route path="/" element={<TopList />} />
					<Route path="/:cat" element={<CategoryList />} />
				</Routes>
			</Container>
			<Footer />
		</>
	);
};
