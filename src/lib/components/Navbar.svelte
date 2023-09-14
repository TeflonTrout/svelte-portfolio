<script lang="ts">
    import { onMount } from "svelte";
    import Logo from "$lib/images/JT.jpg"

    let innerWidth:number = window.innerWidth;
    let isModalOpen:boolean = false;

    function handleLinkClick(elementId:string) {
        isModalOpen = false;
        const anchor = document.getElementById(elementId);
        window.
        window.scrollTo({
            top: anchor?.offsetTop,
            behavior: 'smooth'
        })
    }

    function toggleMobileNav() {
        isModalOpen = !isModalOpen;
    }

    onMount(() => {
        function onResize() {
            innerWidth = window.innerWidth;
        }
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);    
    })
</script>

<nav>
    <img src={Logo} alt="JTK" class="logo" on:click={() => handleLinkClick('home')}>
    {#if innerWidth <= 786}
        <div class="hamburgerIcon" on:click={() => toggleMobileNav()}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class={isModalOpen ? "mobileLinkContainer" : "closedModal"}>
            <div class="closeBtn" on:click={() => toggleMobileNav()}>
                <h1>X</h1>
            </div>
            <h1 on:click={() =>handleLinkClick('about')}>About</h1>
            <h1 on:click={() => handleLinkClick('experience')}>Experience</h1>
            <h1 on:click={() => handleLinkClick('projects')}>Projects</h1>
            <h1 on:click={() => handleLinkClick('contact')}>Contact</h1>
            <h1 on:click={() => handleLinkClick('resume')}>Resume</h1>
        </div>
    {:else}
        <div class="linkContainer">
            <h1 on:click={() =>handleLinkClick('about')}>About</h1>
            <h1 on:click={() => handleLinkClick('experience')}>Experience</h1>
            <h1 on:click={() => handleLinkClick('projects')}>Projects</h1>
            <h1 on:click={() => handleLinkClick('contact')}>Contact</h1>
            <h1 on:click={() => handleLinkClick('resume')}>Resume</h1>
        </div>
    {/if}
</nav>

<style>
    @keyframes slide-in {
        to {
            opacity: 1;
            transform: translateY(0)
        }
    }

    @keyframes rainbow { 
        0%{background-position:left}
        50%{background-position:right}
        100%{background-position:left}
    }

    @keyframes closeModal {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(100%);
        }
    }

    @keyframes openModal {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }

    nav .closeBtn {
        display: block;
        position: absolute;
        top: 1%;
        right: 6%;
        font-size: 36px;
    }

    nav .closedModal {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--azure);
        color: black;
        animation: closeModal .3s ease-in-out forwards;
    }

    nav .mobileLinkContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--azure);
        color: black;
        animation: openModal .3s ease-in-out forwards;
    }

    nav .mobileLinkContainer h1 {
        font-size: 36px;
    }

    nav .hamburgerIcon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 30px
    }

    nav .hamburgerIcon span {
        display: block;
        width: 40px;
        border-bottom: 3px solid var(--azure);
    }

    nav {
        opacity: 0;
        animation: 1s slide-in ease-in .3s forwards;
        transform: translateY(-100%);
        position: fixed;
        background-color: var(--indigo);
        color: white;
        top: 0;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 0;
        z-index: 1;
    }

    nav .linkContainer h1 {
        text-decoration: none;
        font-family: inherit;
        outline: none;
        border: none;
        border-radius: 5px;
        transition: color .2s ease-in-out;
        font-family: "Yellowtail";
        font-size: 20px;
        background-color: transparent;
        transition: .15s ease-in;
        cursor: pointer;
        user-select: none; /* standard */
        -moz-user-select: none; /* firefox specific */
        -webkit-user-select: none; /* Chrome, Opera and Safari*/
        -ms-user-select: none; /* IE, ms-edge */
    }

    nav .linkContainer h1:hover{
        color: var(--azure);
        transition: .15s ease-in-out;
    }

    nav .logo {
        border-radius: 50%;
        width: 50px;
    }

    nav .linkContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;
    }
</style>