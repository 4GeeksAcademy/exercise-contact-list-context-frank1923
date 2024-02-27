import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Modal2 } from "../component/Modal2";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal2: false,
		showModal: false,
		idToDelete: null
	});

	const { store, actions } = useContext(Context);

	console.log(store.contacts);
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.map((item, index) => (
							<ContactCard
								infoContact={item}
								key={item.id}
								onDelete={id => setState({ showModal: true, idToDelete: item.id })}
								onEdit={id => setState({ showModal2: true, idToDelete: item.id })}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={state.idToDelete} onClose={() => setState({ showModal: false })} />
			<Modal2 show={state.showModal2} id={state.idToDelete} onClose={() => setState({ showModal2: false })} />
		</div>
	);
};
