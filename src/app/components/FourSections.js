// components/FourSections.js
import React from "react";
import ButtonDesign from "./ButtonDesign";
import Feature from "./Feature";

const FourSections = () => {
	return (
		<div className="flex h-screen">
			<div className="w-1/4 bg-color-container">
				<h1 className="text-4xl font-medium mb-4">
					Unlock Creativity and Collaboration Today!
				</h1>
				<ButtonDesign />
				{/* hace falta cambiarlo por props Join +1K professionals */}
			</div>
			<div className="w-1/4 bg-color-container">
				<Feature title="s" description="s" />
			</div>
			<div className="w-1/4 bg-color-container">
				<Feature title="s" description="s" />
			</div>
			<div className="w-1/4 bg-color-container">
				<Feature title="s" description="s" />
			</div>
		</div>
	);
};

export default FourSections;
