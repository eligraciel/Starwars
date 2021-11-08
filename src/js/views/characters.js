import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsHeart } from "react-icons/bs";

import "../../styles/demo.scss";

export const Characters = () => {
	const { store } = useContext(Context);
	const [rojo, setRojo] = useState("white");

	return (
		<div className="container">
			<div className="row mt-5 pt-5">
				<div className="d-flex flex-wrap container">
					{store.characters.map(characts => {
						let images = "https://starwars-visualguide.com/assets/img/characters/" + characts.uid + ".jpg";

						return (
							<div className="card col-md-4 px-2 py-2" key={characts.uid}>
								<img style={{ margin: "auto" }} src={images} className="card-img-top" alt="..." />
								<div className="card-body">
									<h3>{characts.name}</h3>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										cards content.
									</p>
									<div className="d-flex justify-content-between">
										<div>
											<Link
												to={"/characters/" + characts.uid + "/detail"}
												className="btn btn-primary mt-2">
												Details
											</Link>
										</div>

										<div>
											<BsHeart
												className={rojo}
												onClick={() => {
													setRojo("red");
												}}
											/>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
