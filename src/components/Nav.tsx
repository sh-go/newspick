import { Box, HStack, Icon, Stack } from "@chakra-ui/react";
import {
	AiOutlineExperiment,
	AiOutlineGlobal,
	AiOutlineHeart,
	AiOutlineLaptop,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const Nav = () => {
	const menuList = [
		{ icon: AiOutlineGlobal, menu: "business" },
		{ icon: AiOutlineHeart, menu: "health" },
		{ icon: AiOutlineExperiment, menu: "science" },
		{ icon: AiOutlineLaptop, menu: "technology" },
	];

	return (
		<Stack m={4} p={3} gap={7} color="gray.300">
			{menuList.map((d) => {
				return (
					<Link to={`/${d.menu}`}>
						<HStack _hover={{ color: "white", transition: "0.5s" }}>
							<Icon w="50px" h="50px" as={d.icon} />
							<Box fontSize="xl" fontWeight="thin">
								{d.menu}
							</Box>
						</HStack>
					</Link>
				);
			})}
		</Stack>
	);
};
