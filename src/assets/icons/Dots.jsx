const Dots = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			{...props}
		>
			<g>
				<circle cx="2.5" cy="12.5" r="2.5" />
				<circle cx="12" cy="12.5" r="2.5" />
				<circle cx="21.5" cy="12.5" r="2.5" />
			</g>
		</svg>
	);
};

export default Dots;
