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
			{news.map((d, index) => (
				<Link href={d.url} isExternal>
					<Box
						as="button"
						minW="100%"
						m={3}
						p={3}
						rounded="xl"
						borderWidth="1px"
						borderColor="white"
					>
						<HStack>
							<Box textAlign="left">
								<Stack>
									<Box>{d.title}</Box>
									<Box>{moment(d.publishedAt).fromNow()}</Box>
									<Box>{d.publishedAt}</Box>
								</Stack>
							</Box>
							<Spacer />
							<Image
								src={d.urlToImage}
								w="250px"
								objectFit="cover"
								key={index}
							/>
						</HStack>
					</Box>
				</Link>
			))}
		</>
	);
};
