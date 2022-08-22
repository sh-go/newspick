import { BrowserRouter } from "react-router-dom";
import MediaQuery from "react-responsive";

import "./App.css";
import { getNews } from "./api/getNews";
import { DesktopContents } from "./components/DesktopContents";
import { MobileContents } from "./components/MobileContents";

function App() {
	getNews().then((d) => {
		console.log(d.props);
	});

	return (
		<BrowserRouter>
			<MediaQuery query="(max-width:767px)">
				<MobileContents />
			</MediaQuery>
			<MediaQuery query="(min-width:767px)">
				<DesktopContents />
			</MediaQuery>
		</BrowserRouter>
	);
}

export default App;
