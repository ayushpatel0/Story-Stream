import React from "react";
import img from "../images/logo.webp";

function Logo() {
	return (
		<div className="flex items-center justify-center rounded-lg bg-gray-500">
			<img
				src={img}
				alt="Logo"
				className="w-10 h-10 object-contain rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300"
			/>
		</div>
	);
}

export default Logo;
