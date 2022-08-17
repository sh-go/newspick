import {
	Box,
	Heading,
	HStack,
	Image,
	Spacer,
	Stack,
	VStack,
} from "@chakra-ui/react";
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

	const currentWeatherMain = weatherNews.current.weather[0].main;
	const currentWeatherIcon = weatherNews.current.weather[0].icon.slice(0, 2);
	const currentWeatherTemp = Math.round(weatherNews.current.temp);

	const dailyWeather = weatherNews.daily.slice(0, 5);

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
				<Box mr={3} fontSize="xl" textAlign="right">
					Tokyo
				</Box>

				<HStack>
					<Box>
						<Stack>
							<Box fontSize="md">{currentWeatherMain}</Box>
							<Box fontSize="3xl">
								{currentWeatherTemp}
								<Box as="span" fontSize="md">
									℃
								</Box>
							</Box>
						</Stack>
					</Box>
					<Image
						src={`http://openweathermap.org/img/wn/${currentWeatherIcon}d@2x.png`}
					/>
					<Box>
						<HStack>
							{dailyWeather.map((d, index) => {
								const dailyWeatherIcon =
									d.weather[0].icon.slice(0, 2);
								return (
									<VStack>
										<Image
											key={index}
											src={`http://openweathermap.org/img/wn/${dailyWeatherIcon}d.png`}
										/>
										<Box fontSize="15px">
											{Math.round(d.temp.max)}
											<Box as="span" fontSize="11px">
												℃
											</Box>
										</Box>
										<Box fontSize="15px">
											{Math.round(d.temp.min)}
											<Box as="span" fontSize="11px">
												℃
											</Box>
										</Box>
									</VStack>
								);
							})}
						</HStack>
					</Box>
				</HStack>
			</Box>
		</>
	);
};
