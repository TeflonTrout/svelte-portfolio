import { render } from 'svelte-email';
import Hello from '$lib/emails/Hello.svelte';
import nodemailer from 'nodemailer';

export async function POST({request}) {
	const { subject, sender, emailBody} = await request.json();

	const headers = {headers: {'Content-Type': 'application/json'}}
	
	function sendEmail(req, res) {
		const transporter = nodemailer.createTransport({
			host: 'smtp.sendgrid.net',
			port: 587,
			secure: false,
			auth: {
				user: 'apikey',
				pass: import.meta.env.VITE_SENDGRID_API_KEY
			}
		});

		const emailHtml = render({
			template: Hello,
			props: {
				name: 'Svelte'
			}
		});

		transporter.sendMail({
			from: `"PORTFOLIO CONTACT: ${sender}" jtkazo@gmail.com`, // verified sender email
			to: "jtkazo@gmail.com", // recipient email
			subject: `${subject}`, // Subject line
			replyTo: `${sender}`, // Reply to XYZ Email
			text: `${emailBody}`, // plain text body
			html: `<div><h3>Email From: ${sender}!</h3><p>${emailBody}</p></div>`,
		}, function(error, info){
			let data = {}
			if(error) {
				res.status(500).send({error: error})
			} else {
				res.status(200).send({success: info})
			}
		})
	}

	try {
		sendEmail()
		let data = {
			error: false,
			message: 'Email sent succesfully'
		}
		return new Response(JSON.stringify(data), headers)
	} catch(e) {
		console.log(e)
		let data = {
			error: true,
			message: 'Oops, something went wrong.'
		}
		return new Response(JSON.stringify(data), headers)
	}
}