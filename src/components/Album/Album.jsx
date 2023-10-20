import { useState } from "react";
import { Artist } from "../Artist/Artist";
import "./Album.css";
import Dots from "../../assets/icons/Dots";
import Heart from "../../assets/icons/Heart";
import Play from "../../assets/icons/Play";

export const Album = ({ artists, external_urls, images, albumName }) => {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};
	return (
		<div className="albumContainer">
			<div
				className="imageContainer"
				onMouseEnter={handleMouseOver}
				onMouseLeave={handleMouseOut}
			>
				<img src={images[0].url} alt={albumName} className="albumImage" />
				<div className={`hoverContainer ${isHovering ? "visible" : ""}`}>
					<button className="btn">
						<Heart />
					</button>
					<button className="btn">
						<Play />
					</button>
					<button className="btn">
						<Dots />
					</button>
				</div>
			</div>
			<h2>
				<a href={external_urls.spotify} target="_blank">
					{albumName}
				</a>
			</h2>
			<Artist artists={artists} />
		</div>
	);
};
