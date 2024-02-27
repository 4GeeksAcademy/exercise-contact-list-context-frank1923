const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getAgenda: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/osifrankpeter_list")
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			},
			deleteContact: id => {
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: "DELETE"
				})
					.then(response => {
						if (response.status === 201) {
							getActions().getAgenda();
						}
						return response.json();
					})
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},

			createContact: (name, email, agenda, address, phone) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: agenda,
						address: address,
						phone: phone
					}),
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			updateContact: (name, email, agenda, address, phone, id) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: "PUT",
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: agenda,
						address: address,
						phone: phone
					}),
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(response => {
						if (response.status === 201) {
							getActions().getAgenda();
						}
						return response.json();
					})
					.then(data => console.log(data))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
