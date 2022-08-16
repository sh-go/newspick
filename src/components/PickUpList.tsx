import { Box, Heading, HStack, Image, Spacer, Stack } from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useState } from "react";
import { getNews } from "../api/getNews";

export const PickUpList = () => {
	const initState = [
		{
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
				as="button"
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
								<HStack>
									<Box textAlign="left" fontSize="sm">
										<Stack>
											<Box>{d.title}</Box>
											<Box color="gray.400">
												{time} 時間前
											</Box>
										</Stack>
									</Box>
									<Spacer />
									<Image
										src={d.urlToImage}
										w="100px"
										objectFit="cover"
										key={index}
									/>
								</HStack>
							</>
						);
					})}
				</Stack>
			</Box>
		</Stack>
	);
};
