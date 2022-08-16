import { Box, Heading, HStack, Image, Link, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

import { getNewsCategory } from "../api/getNewsCategory";

export const CategoryList = () => {
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
	const { cat } = useParams();

	useEffect(() => {
		getNewsCategory(cat)
			.then((d) => setNews(d))
			.catch((e) => {
				throw new Error(e);
			});
	}, [cat]);

	return (
		<>
			<Heading>Top News</Heading>
			{news.map((d, index) => (
				<Link href={d.url} isExternal>
					<Box
						as="button"
						maxW="800px"
						m={3}
						p={3}
						rounded="xl"
						borderWidth="1px"
						borderColor="white"
					>
						<HStack gap={10}>
							<Box textAlign="left">
								<Stack>
									<Box>{d.title}</Box>
									<Box>{moment(d.publishedAt).fromNow()}</Box>
									<Box>{d.publishedAt}</Box>
								</Stack>
							</Box>
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
