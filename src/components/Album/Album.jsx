import "./Album.css";

export const Album = ({ artists, external_urls, images, albumName }) => {
	console.log("--", external_urls);
	return (
		<div className="albumContainer">
			<div>
				<img src={images[0].url} alt={albumName} className="albumImage" />
			</div>
			<h2>
				<a href={external_urls.spotify}>{albumName}</a>
			</h2>
		</div>
	);
};
