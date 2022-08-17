import {
	Box,
	Heading,
	HStack,
	Image,
	Link,
	Spacer,
	Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

import { getNewsCategory } from "../api/getNewsCategory";

export const CategoryList = () => {
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
			<Heading fontWeight="semibold">{cat}</Heading>
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
							<HStack gap={10}>
								<Box textAlign="left">
									<Stack>
										<Box>{d.title}</Box>
										<Box>
											{d.source.name}
											<Box
												as="span"
												color="gray.400"
												ml={3}
											>
												{time}
											</Box>
										</Box>
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
