import { Album } from "../Album/Album";
import "./Albums.css";

export const Albums = ({ albums }) => {
	const albumItems = albums.items;
	const renderAlbumItems = () =>
		albumItems.map((item) => {
			return (
				<Album
					key={item.id}
					artists={item.artists}
					external_urls={item.external_urls}
					images={item.images}
					albumName={item.name}
				/>
			);
		});

	return (
		<main className="main">
			<h1>New Albums & Singles</h1>
			<div className="albumsContainer">{renderAlbumItems()}</div>
		</main>
	);
};

Albums.defaultProps = {
	albums: "No Albums",
};
