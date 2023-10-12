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

<div class="aboutPage" id="about">
        <LazyLoad>
        <div class="container">
            <div class="graphic">
                <img src={Graphic} alt="logo">
            </div>
            <div class="textBox">
                <h1>Frontend Excellence, Fullstack Fusion</h1>
                <p>
                    👋 Passionate full-stack developer with experience in creating web applications that are both functional and visually appealing.
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
            justify-content: center;
            align-items: flex-start;
            color: white;
            width: 100%;
            min-height: 100vh;
            margin-bottom: 70px;
        }

        .aboutPage .container {
            display: flex;
            flex-direction: column;
            width: 95%;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            margin: auto;
        }

        .aboutPage .graphic {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 80%;
        }
        
        .aboutPage .container .graphic img {
            width: 100%;
            border-radius: 5px;
            object-fit: cover;
            aspect-ratio: 16/9;
        }

        .aboutPage h1 {
            margin-bottom: 10px;
            text-decoration: underline;
            font-size: 36px;
            text-align: center;
        }

        .aboutPage p {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: flex-start;
            text-align: center;
            font-size: 18px;
        }

        .aboutPage .buttonContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .aboutPage .textBox {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            gap: 20px;
            width: 85%;
        }
    }

    @media screen and (min-width: 786px) {
        .aboutPage {
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            width: 100%;
            padding-top: 70px;
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
            width: auto;
        }
        
        .aboutPage .container .graphic img {
            max-height: calc(100vh - 100px);
            border-radius: 50%;
        }

        .aboutPage h1 {
            margin-bottom: 10px;
            text-decoration: underline;
            font-size: 48px;
        }

        .aboutPage p {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            text-align: justify;
            width: 100%;
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
    }
</style>