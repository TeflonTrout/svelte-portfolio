<script lang="ts">
    import Logo from "$lib/images/JT.jpg"
    import Button from "./components/Button.svelte";

    function handleLinkClick() {
        const anchor = document.getElementById("contact")
        window.scrollTo({
            top: anchor?.offsetTop,
            behavior: 'smooth'
        })
    }
</script>

<div class="homePage">
    <div class="container">
        <div class="content">
            <h1>Howdy! I'm J.T.</h1>
            <h2>I'm a Fullstack Engineer driven by a passion for shaping immersive digital journeys while centering my expertise on the captivating realm of frontend web apps.</h2>
            <div class="btnContainer">
                <Button text="Contact Me" onClick={() => handleLinkClick()}/>
            </div>
        </div>
        <img src={Logo} alt="JTK">
    </div>
</div>

<style>
    @keyframes slide-in {
        to {
            opacity: 1;
            transform: translateX(0)
        }
    }
 
    @keyframes floating {
        0% { transform: translate(0,  0); }
        50%  { transform: translate(0, -10%); }
        100%   { transform: translate(0, 0%); }    
    }

    /* MOBILE */
    @media screen and (max-width: 786px) {
        .homePage {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .homePage .btnContainer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 100%;
            animation: 1s slide-in ease-out .5s forwards;
            transform: translateX(-110%);
            opacity: 0;
        }

        .homePage .container {
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .homePage .container .content {
            animation: 1s slide-in cubic-bezier(0.25, 0.46, 0.45, 0.94) .3s forwards;
            transform: translateX(-110%);
            opacity: 0;
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 20px;
        }
        
        .homePage .container .content h2 {
            animation: 1s slide-in cubic-bezier(0.25, 0.46, 0.45, 0.94) .4s forwards;
            transform: translateX(-110%);
            opacity: 0;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .homePage img {
            animation: 1s slide-in cubic-bezier(0.25, 0.46, 0.45, 0.94) .3s forwards;
            transform: translateX(110%);
            opacity: 0;
            width: 30%;
            border-radius: 50%;
        }

        .homePage h1 {
            text-decoration: underline;
            font-size: 48px;
            text-align: center;
        }
    }

    @media screen and (min-width: 786px) {
        .homePage {
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .homePage .btnContainer {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            animation: 1s slide-in ease-out .5s forwards;
            transform: translateX(-110%);
            opacity: 0;
        }

        .homePage .container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .homePage .container .content {
            animation: 1s slide-in cubic-bezier(0.25, 0.46, 0.45, 0.94) .3s forwards;
            transform: translateX(-110%);
            opacity: 0;
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            gap: 20px;
        }
        
        .homePage .container .content h2 {
            animation: 1s slide-in cubic-bezier(0.25, 0.46, 0.45, 0.94) .4s forwards;
            transform: translateX(-110%);
            opacity: 0;
            margin-bottom: 30px;
        }
        
        .homePage img {
            transform: translateX(110%);
            animation: 1s slide-in cubic-bezier(0.25, 0.46, 0.45, 0.94) .3s forwards, 3s floating ease-in-out 1.3s infinite forwards;
            opacity: 0;
            width: 30%;
            border-radius: 50%;
        }

        .homePage h1 {
            text-decoration: underline;
            font-size: 48px;
        }
    }
</style>