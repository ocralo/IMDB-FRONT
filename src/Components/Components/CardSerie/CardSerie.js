import React from "react";

//importacion de librerias externas
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

/**
 *
 * @param {*} param0
 */
export default function CardSerie({
	title = "titulo",
	imageURL,
	vote_average,
	idSerie,
}) {
	let history = useHistory();

	function handleDoubleClick() {
		history.push(`/Series/${idSerie}`);
	}
	return (
		<div
			className="flip-card mt-4"
			onDoubleClick={handleDoubleClick}>
			<div className="flip-card-inner">
				<Card className="shadow flip-card-front">
					<Card.Img
						variant="top"
						src={
							imageURL
								? `https://image.tmdb.org/t/p/w500${imageURL}`
								: `${process.env.PUBLIC_URL}/img/error.svg`
						}
						height="167.453"
					/>
					<Card.Body className="p-2">
						<Card.Title className="m-0">
							{title}
						</Card.Title>
					</Card.Body>
				</Card>
				<Card className="shadow flip-card-back">
					<Card.Body className="p-2">
						<Card.Title className="m-0">
							{title}
						</Card.Title>
						<Card.Text className="mt-2">
							Rating : {vote_average}
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
}
