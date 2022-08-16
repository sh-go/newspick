export const getWeather = async () => {
	const lat = 35.4122;
	const lon = 139.413;
	const exclude = "hourly,minutely";

	const weatherRes = await fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=76d6c01142e724f2e9993926af9cc2fc`
	);
	const weatherJson = weatherRes.json();
	return weatherJson;
};
