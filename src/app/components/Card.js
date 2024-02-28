// components/Card.js
import React from "react";
import ButtonDesign from "./ButtonDesign";

const Card = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="bg-color-container p-8 rounded shadow-md text-white text-center">
				<h1 className="text-4xl font-bold mb-4">
					Organize, create, and collaborate with confidence.
				</h1>
				<p className="text-lg mb-8">
					Our platform isn&apos;t just a workspace management tool—it&apos;s a
					platform for creativity, innovation, and collaboration. With advanced
					features like template creation, real-time collaboration, and robust
					security measures, empower your team to stay organized, unleash their
					creativity, and achieve their goals with confidence.
				</p>
				<ButtonDesign />
			</div>
		</div>
	);
};

export default Card;
