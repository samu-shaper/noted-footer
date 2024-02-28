// components/Feature.js
import React from "react";

const Feature = ({ imageUrl, title, description }) => {
	return (
		<div className="bg-white p-6 rounded-lg shadow-md w-240 h-534">
			<img
				src={imageUrl}
				alt="Feature Image"
				className="w-full h-311 object-cover mb-2"
			/>
			<h2 className="text-xl font-bold mb-1">{title}</h2>
			<p className="text-gray-600">{description}</p>
		</div>
	);
};

export default Feature;
