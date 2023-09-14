<script lang='ts'>
    import axios from "axios";

    let emailStatus: boolean | null = null;
    let emailSender: string | null = "";
    let emailSubject: string | null = "";
    let emailBody: string | null = "";

	const handleSubmit = async () => {
        const res = await axios.post("http://localhost:5173/email/hello", 
            {
                sender: emailSender,
                subject: emailSubject, 
                emailBody: emailBody
            })
        if(res.data.error == false){
            // IF EMAIL SENT SUCCESSFULLY CLEAR THE FORM AND RESET STATUS TO NULL
            emailStatus = true;
            emailSender = ""
            emailBody = ""
            emailSubject = ""
            setTimeout(() => {
                emailStatus = null
            }, 4000)
        } else {
            emailStatus = false;
        }
    }

    const handleSenderChange = (e: Event) => {
        e.preventDefault()
        emailSender = (e.currentTarget as HTMLInputElement).value 
    }
    const handleSubjectChange = (e: Event) => {
        e.preventDefault()
        emailSubject = (e.currentTarget as HTMLInputElement).value 
    }
    const handleEmailBodyChange = (e: Event) => {
        e.preventDefault()
        emailBody = (e.currentTarget as HTMLInputElement).value 
        emailBody = emailBody.replace(/\n\r/g,"<br />");
        emailBody = emailBody.replace(/\n/g, "<br />");
    }
</script>

<div class="contactPage">
    <h1>Get In Contact!</h1>
    <form class="contactForm" action="http://localhost:5173/email/hello" method="post" on:submit|preventDefault={handleSubmit}>
        <div class="inputField">
            <input id="sender" placeholder="Email: " type="text" required on:change={(e) => handleSenderChange(e)}>
        </div>
        <div class="inputField">
            <input id="subject" placeholder="Subject: " type="text" required on:change={(e) => handleSubjectChange(e)}>
        </div>
        <div class="messageField">
            <textarea id="body" placeholder="Write me a message!" required on:change={(e) => handleEmailBodyChange(e)} />
        </div>
        <div class="buttonContainer">
            <button type="submit"><h2>Submit</h2></button>
            <button type="reset"><h2>Clear</h2></button>
        </div>
    </form>
    <p>
        {#if emailStatus}
        <p>Email Sent Succesfully!</p>
        {:else if emailStatus == null}
        <span></span>
        {:else}
        <p>Oops, something went wrong.</p>
        {/if}
    </p>
</div>

<style>
    /* MOBILE */
    @media screen and (max-width: 786px) {
        .contactPage {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            margin-top: 45px;
        }

        .contactPage h1 {
            font-size: 48px;
            text-decoration: underline;
        }
        
        .contactForm {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            width: 100%;
            gap: 20px;
        }

        .contactForm .inputField {
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .contactForm .inputField input::placeholder {
            line-height: normal;
            font-size: 24px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .contactForm .inputField input {
            width: 100%;
            font-size: 24px;
            outline: none;
            border: none;
            background-color: var(--indigo-2);
            color: white;
            border-radius: 5px;
            padding-left: 8px;
            padding: 8px;
            transition: .15s ease-in;
        }

        .contactForm .inputField input:focus {
            background-color: var(--indigo);
            transition: .15s ease-in;
            box-shadow: 0 0 2px 2px;
        }
        
        .contactForm .messageField {
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 10px;
        }
        
        .contactForm .messageField textarea {
            width: 100%;
            padding: 10px;
            min-height: 200px;
            font-size: 24px;
            outline: none;
            border: none;
            background-color: var(--indigo-2);
            color: white;
            border-radius: 10px;
            transition: .15s ease-in;
            resize: none;
        }

        .contactForm .messageField textarea:focus {
            background-color: var(--indigo);
            transition: .15s ease-in;
            box-shadow: 0 0 2px 2px;
        }

        .contactForm .messageField textarea::placeholder {
            font-size: 24px;
            color: white;
        }

        .buttonContainer {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 80%;
        }

        button {
            display: inline-block;
            position: relative;
            color: var(--indigo-2);
            outline: none;
            border: none;
            background-color: white;
            padding: 5px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: .25s ease-in;
            font-weight: bold;
            width: auto;
        }

        button:after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 4px;
            bottom: 0;
            left: 0;
            border-radius: 0 0 5px 5px;
            background: var(--sky-blue);
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }
        
        button:hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }

    @media screen and (min-width: 786px) {
        .contactPage {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            margin-top: 45px;
        }

        .contactPage h1 {
            font-size: 48px;
            text-decoration: underline;
        }
        
        .contactForm {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            width: 100%;
            gap: 20px;
        }

        .contactForm .inputField {
            width: 50%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .contactForm .inputField input::placeholder {
            line-height: normal;
            font-size: 24px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .contactForm .inputField input {
            width: 100%;
            font-size: 24px;
            outline: none;
            border: none;
            background-color: var(--indigo-2);
            color: white;
            border-radius: 5px;
            padding-left: 8px;
            padding: 8px;
            transition: .15s ease-in;
        }

        .contactForm .inputField input:focus {
            background-color: var(--indigo);
            transition: .15s ease-in;
            box-shadow: 0 0 2px 2px;
        }
        
        .contactForm .messageField {
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 10px;
        }
        
        .contactForm .messageField textarea {
            width: 100%;
            padding: 10px;
            min-height: 200px;
            font-size: 24px;
            outline: none;
            border: none;
            background-color: var(--indigo-2);
            color: white;
            border-radius: 10px;
            transition: .15s ease-in;
            resize: none;
        }

        .contactForm .messageField textarea:focus {
            background-color: var(--indigo);
            transition: .15s ease-in;
            box-shadow: 0 0 2px 2px;
        }

        .contactForm .messageField textarea::placeholder {
            font-size: 24px;
            color: white;
        }

        .buttonContainer {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 50%;
        }

        button {
            display: inline-block;
            position: relative;
            color: var(--indigo-2);
            outline: none;
            border: none;
            background-color: white;
            padding: 5px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: .25s ease-in;
            font-weight: bold;
            width: auto;
        }

        button:after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 4px;
            bottom: 0;
            left: 0;
            border-radius: 0 0 5px 5px;
            background: var(--sky-blue);
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }
        
        button:hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }
</style>