import { Container } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import MediaQuery from "react-responsive";

import "./App.css";
import { Header } from "./components/Header";
import { getNews } from "./api/getNews";
import { DesktopContents } from "./components/DesktopContents";
import { MobileContents } from "./components/MobileContents";
import { Footer } from "./components/Footer";

function App() {
	getNews().then((d) => {
		console.log(d.props);
	});

	return (
		<BrowserRouter>
			<Header />

			<Container maxW="100%" p={3}>
				<MediaQuery query="(max-width:767px)">
					<MobileContents />
				</MediaQuery>
				<MediaQuery query="(min-width:767px)">
					<DesktopContents />
				</MediaQuery>
			</Container>
			<MediaQuery query="(max-width:767px)">
				<Footer />
			</MediaQuery>
		</BrowserRouter>
	);
}

export default App;
