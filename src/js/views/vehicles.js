import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { BsHeart } from "react-icons/bs";

import "../../styles/demo.scss";

export const Vehicles = () => {
	const { store } = useContext(Context);

	return (
		<div className="container">
			<div className="row mt-5 pt-5">
				<div className="d-flex flex-wrap container">
					{store.vehicles.map(vehic => {
						let images = "https://starwars-visualguide.com/assets/img/starships/" + vehic.uid + ".jpg";

						return (
							<div className="card col-md-4 px-2 py-2" key={vehic.uid}>
								<img style={{ margin: "auto" }} src={images} className="card-img-top" alt="..." />
								<div className="card-body">
									<h3>{vehic.name}</h3>
									<p className="card-text">
										Some quick example text to build on the card title and make up the bulk of the
										cards content.
									</p>
									<div className="d-flex justify-content-between">
										<div>
											<Link
												to={"/vehicles/" + vehic.uid + "/detail"}
												className="btn btn-primary mt-2">
												Details
											</Link>
										</div>

										<div className="icon">
											<BsHeart />
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
