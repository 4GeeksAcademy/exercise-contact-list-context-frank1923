import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Modal2 = props => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [agenda, setAgenda] = useState("osifrankpeter_list");

	const { store, actions } = useContext(Context);

	function updateOldContact() {
		actions.updateContact(name, email, agenda, address, phone, props.id);
		props.onClose();
	}

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Update Contact</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<div className="form-group mx-2">
							<input
								type="text"
								className="form-control"
								placeholder="Full Name"
								onChange={e => setName(e.target.value)}
								value={name}
							/>
						</div>
						<div className="form-group mx-2">
							<input
								type="email"
								className="form-control"
								placeholder="Enter email"
								onChange={e => setEmail(e.target.value)}
								value={email}
							/>
						</div>
						<div className="form-group mx-2">
							<input
								type="phone"
								className="form-control"
								placeholder="Enter phone"
								onChange={e => setPhone(e.target.value)}
								value={phone}
							/>
						</div>
						<div className="form-group mx-2">
							<input
								type="text"
								className="form-control"
								placeholder="Enter address"
								onChange={e => setAddress(e.target.value)}
								value={address}
							/>
						</div>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-primary"
							data-dismiss="modal"
							onClick={updateOldContact}>
							Update Contact
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal2.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.number
};

Modal2.defaultProps = {
	show: false,
	onClose: null
};
