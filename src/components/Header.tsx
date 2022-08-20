import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<Box p={2} w="100%" pos="fixed" bgColor="gray.500">
			<Link to="/">
				<Heading fontWeight="thin">News Pick</Heading>
			</Link>
		</Box>
	);
};
