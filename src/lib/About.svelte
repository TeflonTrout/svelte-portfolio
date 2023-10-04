<script lang="ts">
    import Button from "./components/Button.svelte";
    import LazyLoad from "./components/LazyLoad.svelte";
    import Graphic from "$lib/images/graphic1.png"

    function handleLinkClick(location:string) {
        const anchor = document.getElementById(location)
        window.scrollTo({
            top: anchor?.offsetTop,
            behavior: 'smooth'
        })
    }
</script>

<div class="aboutPage">
        <LazyLoad>
        <div class="container">
            <div class="graphic">
                <img src={Graphic} alt="logo">
            </div>
            <div class="textBox">
                <h1>Frontend Excellence, Fullstack Fusion</h1>
                <p>
                    👋 Hey there! I'm J.T., a passionate full-stack developer with experience in creating web applications that are both functional and visually appealing.
                </p>
                <p>
                    🚀 With a background in full-stack development, I've had the opportunity to work on diverse projects, leveraging technologies like React/Next.js, TypeScript, Node.js, and more. From building robust backends to creating intuitive front-end interfaces, I enjoy every aspect of the development process. 
                </p>
                <p>
                    🛠️ My goal is to continue honing my skills and contribute to meaningful projects that make a positive impact.
                </p>
                <div class="buttonContainer">
                    <Button text="Explore" onClick={() => handleLinkClick('projects')}/>
                    <Button text="Contact" onClick={() => handleLinkClick('contact')}/>
                </div>
            </div>
        </div>
    </LazyLoad>
    </div>

<style>
    /* MOBILE */
    @media screen and (max-width: 786px) {
        .aboutPage {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 80px !important;
        }
    }

    .aboutPage {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        width: 100%;
        margin-top: 70px;
        min-height: 100vh;
    }

    .aboutPage .container {
        display: flex;
        width: 90%;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        margin: auto;
    }

    .aboutPage .graphic {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
    }
    
    .aboutPage .container .graphic img {
        width: 100%;
        border-radius: 50%;
    }

    .aboutPage h1 {
        margin-bottom: 10px;
        text-decoration: underline;
        font-size: 48px;
    }

    .aboutPage p {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .aboutPage .buttonContainer {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }

    .aboutPage .textBox {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
        width: 70%;
    }
</style>