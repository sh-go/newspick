import { Box, Heading, HStack, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<HStack p={3} mb={5}>
			<Link to="/">
				<Heading>News Pick</Heading>
			</Link>
			<Spacer />
			<Box>Icon</Box>
		</HStack>
	);
};
