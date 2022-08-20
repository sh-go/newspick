import { Box, Flex, Spacer, Stack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import { CategoryList } from "./CategoryList";
import { Nav } from "./Nav";
import { PickUpList } from "./PickUpList";
import { TopList } from "./TopList";
import { Weather } from "./Weather";

export const DesktopContents = () => {
	return (
		<Flex>
			<Box flex={1} position="fixed">
				<Nav />
			</Box>
			<Spacer />
			<Box flex={3} mr={5}>
				<Routes>
					<Route path="/" element={<TopList />} />
					<Route path="/:cat" element={<CategoryList />} />
				</Routes>
			</Box>
			<Box flex={2} ml={3}>
				<Stack>
					<Weather />
					<PickUpList />
				</Stack>
			</Box>
		</Flex>
	);
};
