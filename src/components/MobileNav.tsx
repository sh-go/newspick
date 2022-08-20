import { Box, HStack, Icon, Spacer, VStack } from "@chakra-ui/react";
import {
	AiOutlineExperiment,
	AiOutlineGlobal,
	AiOutlineHeart,
	AiOutlineLaptop,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const MobileNav = () => {
	const menuList = [
		{ icon: AiOutlineGlobal, menu: "business" },
		{ icon: AiOutlineHeart, menu: "health" },
		{ icon: AiOutlineExperiment, menu: "science" },
		{ icon: AiOutlineLaptop, menu: "technology" },
	];

	return (
		<Box p={3} mx={3}>
			<HStack color="gray.300">
				{menuList.map((d) => {
					return (
						<>
							<Link to={`/${d.menu}`}>
								<VStack
									spacing="2px"
									_hover={{
										color: "white",
										transition: "0.5s",
									}}
								>
									<Icon w="25px" h="25px" as={d.icon} />
									<Box fontSize="sm" fontWeight="thin">
										{d.menu}
									</Box>
								</VStack>
							</Link>
							{d === menuList[3] ? "" : <Spacer />}
						</>
					);
				})}
			</HStack>
		</Box>
	);
};
