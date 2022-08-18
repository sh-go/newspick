import {
	Box,
	Heading,
	HStack,
	Image,
	Link,
	Spacer,
	Stack,
} from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useState } from "react";
import { getNews } from "../api/getNews";

export const PickUpList = () => {
	const initState = [
		{
			source: { name: "" },
			author: "",
			title: "",
			publishedAt: "",
			url: "",
			urlToImage: "",
		},
	];
	const [pickNews, setPickNews] = useState(initState);

	useEffect(() => {
		getNews()
			.then((d) => {
				setPickNews(d.props.pickArticles);
			})
			.catch((e) => {
				throw new Error(e);
			});
	}, []);

	return (
		<Stack>
			<Heading fontWeight="semibold">PickUp!</Heading>
			<Box
				w="95%"
				m={3}
				p={3}
				rounded="xl"
				borderWidth="1px"
				borderColor="white"
			>
				<Stack gap={7}>
					{pickNews.map((d, index) => {
						const time =
							moment(d.publishedAt || moment.now())
								.fromNow()
								.slice(0, 1) === "a"
								? 1
								: moment(d.publishedAt || moment.now())
										.fromNow()
										.slice(0, 1);

						return (
							<>
								<Link href={d.url} isExternal>
									<Box
										as="button"
										_hover={{
											cursor: "pointer",
											opacity: "0.7",
											transition: "0.3s",
											textDecoration: "none",
										}}
									>
										<HStack>
											<Box textAlign="left" fontSize="sm">
												<Stack>
													<Box>{d.title}</Box>
													<Box>
														{d.source.name}
														<Box
															as="span"
															color="gray.400"
															ml={3}
														>
															{time} 時間前
														</Box>
													</Box>
												</Stack>
											</Box>
											<Spacer />
											<Image
												src={d.urlToImage}
												minW="100px"
												w="100px"
												h="80px"
												objectFit="cover"
												key={index}
											/>
										</HStack>
									</Box>
								</Link>
							</>
						);
					})}
				</Stack>
			</Box>
		</Stack>
	);
};
