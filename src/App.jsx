import React from "react";
import { Albums } from "./components/Albums/Albums";
import data from "./data.json";

export const App = () => {
	const albums = data.albums;
	return (
		<>
			<Albums albums={albums} />
		</>
	);
};
