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

export const TopList = () => {
	const initState = [
		{
			author: "",
			title: "",
			publishedAt: "",
			url: "",
			urlToImage: "",
		},
	];
	const [news, setNews] = useState(initState);

	useEffect(() => {
		getNews()
			.then((d) => setNews(d.props.topArticles))
			.catch((e) => {
				throw new Error(e);
			});
	}, []);

	return (
		<>
			<Heading fontWeight="semibold">Headlines</Heading>
			{news.map((d, index) => {
				const time =
					moment(d.publishedAt || moment.now())
						.fromNow()
						.slice(0, 1) === "a"
						? 1
						: moment(d.publishedAt || moment.now())
								.fromNow()
								.slice(0, 1) + "時間前";
				return (
					<Link href={d.url} isExternal>
						<Box
							as="button"
							minW="100%"
							m={3}
							p={3}
							rounded="xl"
							borderWidth="1px"
							borderColor="white"
							_hover={{
								cursor: "pointer",
								opacity: "0.7",
								transition: "0.3s",
							}}
						>
							<HStack>
								<Box textAlign="left">
									<Stack>
										<Box>{d.title}</Box>
										<Box color="gray.400">{time}</Box>
									</Stack>
								</Box>
								<Spacer />
								<Image
									src={d.urlToImage}
									w="250px"
									maxH="150px"
									objectFit="cover"
									key={index}
								/>
							</HStack>
						</Box>
					</Link>
				);
			})}
		</>
	);
};
