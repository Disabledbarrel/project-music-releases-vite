import { Fragment } from "react";
import "./Artist.css";

export const Artist = ({ artists }) => {
	return (
		<div className="artistContainer">
			{artists.map((artist, index) => (
				<Fragment key={index}>
					<a href={artist.external_urls.spotify} target="_blank">
						{artist.name}
					</a>
					{index < artists.length - 2
						? ", "
						: index === artists.length - 2
						? " & "
						: null}
				</Fragment>
			))}
		</div>
	);
};
