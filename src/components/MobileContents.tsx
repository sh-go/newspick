import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import { CategoryList } from "./CategoryList";
import { TopList } from "./TopList";

export const MobileContents = () => {
	return (
		<Box mb={16}>
			<Routes>
				<Route path="/" element={<TopList />} />
				<Route path="/:cat" element={<CategoryList />} />
			</Routes>
		</Box>
	);
};
