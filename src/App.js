import React from "react";
import Header from "./component/Header";
import Navigation from "./component/Navigation";
import Stack from "./component/Stack";
import Contact from "./component/Contact";
import { Work } from "./component/Work";
import Experience from './component/Experience'

function App() {
	return (
		<>
			<Navigation />
			<Header />
			<Work />
			<Stack />
			<Experience/>
			<Contact />
		</>
	);
}

export default App;
