import React from "react";

//importacion de librerias externas
import {
	Container,
	Row,
	Col,
	Card,
	Nav,
	ListGroup,
} from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useParams } from "react-router-dom";

//importacion de reducer de redux
import {
	getSeriesError,
	getSeriesPending,
	getSeriesSearch,
} from "../../../Redux/Reducer/index";

//importacion de componentes
import { fetchSearchSeries } from "../../../Requests/Requests";

function Series() {
	let { query } = useParams();
	return (
		<Container className="mt-5 mb-5">
			<Row>
				<Col>
					<Card className="shadow">
						<Card.Img
							variant="top"
							src="https://image.tmdb.org/t/p/w500/k1lICEYRpJeFRIRfjxYwmpO9LTu.jpg"
						/>
						<Card.Body>
							<Card.Title className="mb-0">
								Title Series
							</Card.Title>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Row>
						<Col>
							<h3>Temporadas</h3>
						</Col>
					</Row>
					<Row>
						<Col>
							<Nav
								variant="tabs"
								defaultActiveKey="link-0">
								<Nav.Item>
									<Nav.Link eventKey="link-0">
										Active
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="link-1">
										Option 2
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
					</Row>
					<Row>
						<Col>
							<ListGroup>
								<ListGroup.Item className="border-top-0 rounded-0 rounded-bottom">
									Cras justo odio
								</ListGroup.Item>
								<ListGroup.Item>
									Dapibus ac facilisis in
								</ListGroup.Item>
								<ListGroup.Item>
									Morbi leo risus
								</ListGroup.Item>
								<ListGroup.Item>
									Porta ac consectetur ac
								</ListGroup.Item>
								<ListGroup.Item>
									Vestibulum at eros
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

/**
 * trae los estados de la storage
 * @param {*} state
 */
const mapStateToProps = (state) => ({
	error: getSeriesError(state),
	series: getSeriesSearch(state),
	pending: getSeriesPending(state),
});

/**
 * metodo para emitir acciones, para modificar el estado
 * de la storage
 * @param {*} dispatch
 */
const mapDispatchToProps = (dispatch) =>
	bindActionCreators(
		{
			fetchSeries: fetchSearchSeries,
		},
		dispatch
	);

export default connect(mapStateToProps, mapDispatchToProps)(Series);
