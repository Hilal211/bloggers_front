import './ContactUs.css'
import Navb from '../../components/Navb/Navb'


const { Component } = require("react");

export default class ContactUS extends Component {

	state = {

		name: "",
		email: "",
		title: "",
		message: "",
		dateC: null,
		error: false
	}

	createContact = async (params = {}) => {
		let { name, title, email, message, dateC } = params;
		let url = `//localhost:8000/Contacts/create`;
		let paramsErr = "you need at least name or email properties to update a admin";
		if (!name || !title || !email || !message || !dateC) throw new Error(paramsErr);
		try {
			await fetch(url, {
				method: "post",
				body: JSON.stringify({ name, title, email, message, dateC }),
				headers: { 'Content-Type': 'application/json' },
			});
		} catch (err) {
			this.setState({ error_message: err })
		}

	}
	handleChange = (event) => {
		let { name, value } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit = async (event) => {
		event.nativeEvent.preventDefault();
		let timeElapsed = Date.now();
		let datef = new Date(timeElapsed);
		await this.setState({ dateC: datef })
		let { name, title, email, message, dateC } = this.state;
		this.createContact({ name, title, email, message, dateC });
		this.setState({ name: "", title: "", email: "", message: "" })

	}

	render() {
		let { name, title, email, message } = this.state;
		return (
			<>
				<Navb />
				<div class="form_CU ">
					<div class="hedding-title_CU">
						<h1>CONTACT US</h1>
					</div>
					<div class="hedding-description_CU ">
						<p>Thanks for Contacting US</p><p>We are happy to get feedback from you</p><p>You can fill that forum and send us your message</p>
					</div>
					<div class="form-input_CU ">
						<form onSubmit={this.handleSubmit}>
							Full Name:
				<input required type="name" name="name" value={name} onChange={this.handleChange}></input>
				Email:
				<input required type="email" name="email" value={email} onChange={this.handleChange}></input>
                Title:
				<input required type="title" name="title" value={title} onChange={this.handleChange}></input>
				Message:
				<textarea required type="message" rows="4" name="message" value={message} onChange={this.handleChange}></textarea>
							<button class="button_CU" type="submit">Send Message</button>
						</form>
					</div>
				</div>
			</>




		)
	}
}