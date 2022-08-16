import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getWeather } from "../api/getWeather";

export const Weather = () => {
	const initState = {
		current: {
			temp: 0,
			weather: [
				{
					main: "",
					icon: "",
				},
			],
		},
		daily: [
			{
				dt: 0,
				temp: { min: 0, max: 0 },
				weather: [{ main: "", icon: "" }],
			},
		],
	};

	const [weatherNews, setWeather] = useState(initState);
	useEffect(() => {
		getWeather()
			.then((d) => {
				setWeather(d);
			})
			.catch((e) => {
				throw new Error(e);
			});
	}, []);
	console.log(weatherNews);
	return (
		<>
			<Heading fontWeight="semibold">Weather News</Heading>
			<Box
				w="95%"
				m={3}
				p={3}
				rounded="xl"
				borderWidth="1px"
				borderColor="white"
			>
				{weatherNews.current.temp}
			</Box>
		</>
	);
};
