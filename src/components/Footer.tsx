import {
	Box,
	// Drawer,
	// DrawerBody,
	// DrawerContent,
	// DrawerOverlay,
	// Flex,
	// useDisclosure,
} from "@chakra-ui/react";
// import Hamburger from "hamburger-react";
// import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";

export const Footer = () => {
	// const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box w="100%" pos="fixed" bottom={0} bgColor="gray.400">
			{/* <Hamburger toggled={isOpen} onToggle={onOpen} />
			<Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerBody>
						<Nav />
					</DrawerBody>
				</DrawerContent>
			</Drawer> */}
			<MobileNav />
		</Box>
	);
};
