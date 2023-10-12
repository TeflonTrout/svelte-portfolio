<script lang="ts">
    import { onMount } from "svelte";
    import Logo from "$lib/images/JT.jpg"
    import Icon from '@iconify/svelte';

    let isModalOpen:boolean = false;

    function handleLinkClick(elementId:string) {
        isModalOpen = false;
        const anchor = document.getElementById(elementId);
        if(innerWidth > 786) {
            window.scrollTo({
                top: anchor?.offsetTop,
                behavior: 'smooth'
            })
        } else {
            if(anchor?.offsetTop) {
                let scrollOffset = anchor?.offsetTop - 75
                window.scrollTo({
                    top: scrollOffset,
                    behavior: 'smooth'
                })
            } else {
                window.scrollTo({
                    top: anchor?.offsetTop,
                    behavior: 'smooth'
                })
            }
        }
    }

    function toggleMobileNav() {
        isModalOpen = !isModalOpen;
    }

    let innerWidth:number;
    onMount(() => {
        innerWidth = window.innerWidth
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
                <Icon icon="carbon:close-filled" />
            </div>
            <button on:click={() =>handleLinkClick('about')}>About</button>
            <button on:click={() => handleLinkClick('experience')}>Experience</button>
            <button on:click={() => handleLinkClick('projects')}>Projects</button>
            <button on:click={() => handleLinkClick('skills')}>Skills</button>
            <button on:click={() => handleLinkClick('resume')}>Resume</button>
            <button on:click={() => handleLinkClick('contact')}>Contact</button>
            <div class="socials">
                <a href="https://github.com/TeflonTrout" target="_blank" rel="noreferrer">
                    <Icon icon="mdi:github" width="50" height="50" color="black"/>
                </a>
                <a href="https://linkedin.com/in/jtkazousky" target="_blank" rel="noreferrer">
                    <Icon icon="mdi:linkedin" width="50" height="50" color="black"/>
                </a>
            </div>
        </div>
        {:else}
        <div class="linkContainer">
            <button on:click={() =>handleLinkClick('about')}>About</button>
            <button on:click={() => handleLinkClick('experience')}>Experience</button>
            <button on:click={() => handleLinkClick('projects')}>Projects</button>
            <button on:click={() => handleLinkClick('skills')}>Skills</button>
            <button on:click={() => handleLinkClick('resume')}>Resume</button>
            <button on:click={() => handleLinkClick('contact')}>Contact</button>
            <a href="https://github.com/TeflonTrout" target="_blank" rel="noreferrer">
                <Icon icon="mdi:github" width="35" height="35" color="white"/>
            </a>
            <a href="https://linkedin.com/in/jtkazousky" target="_blank" rel="noreferrer">
                <Icon icon="mdi:linkedin" width="35" height="35" color="white"/>
            </a>
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

    nav .linkContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    nav .linkContainer button {
        text-decoration: none;
        color: white;
        font-family: inherit;
        outline: none;
        border: none;
        border-radius: 5px;
        transition: color .2s ease-in-out;
        font-family: "Yellowtail";
        font-size: 20px;
        background-color: transparent;
        transition: .35s ease-in;
        cursor: pointer;
        user-select: none; /* standard */
        -moz-user-select: none; /* firefox specific */
        -webkit-user-select: none; /* Chrome, Opera and Safari*/
        -ms-user-select: none; /* IE, ms-edge */
    }

    nav .linkContainer button:hover{
        color: var(--azure);
        transform: scale(1.15);
        transition: .1s ease-in;
    }

    nav .linkContainer a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        font-family: inherit;
        outline: none;
        border: none;
        border-radius: 5px;
        transition: color .2s ease-in-out;
        font-family: "Yellowtail";
        font-size: 20px;
        background-color: transparent;
        transition: .35s ease-in;
        cursor: pointer;
        user-select: none; /* standard */
        -moz-user-select: none; /* firefox specific */
        -webkit-user-select: none; /* Chrome, Opera and Safari*/
        -ms-user-select: none; /* IE, ms-edge */
    }

    nav .linkContainer a:hover{
        color: var(--azure);
        transform: scale(1.15);
        transition: .1s ease-in;
    }

    nav .closeBtn {
        display: block;
        position: absolute;
        top: 3%;
        right: 6%;
        font-size: 36px;
    }

    nav .closedModal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        gap: 3rem;
        top: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--azure);
        color: black;
        animation: closeModal .3s ease-in-out forwards;
    }

    nav .closedModal button {
        outline: none;
        border: none;
        background-color: transparent;
        font-family: "Yellowtail";
        font-size: 36px;
    }

    nav .closedModal .socials {
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav .mobileLinkContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        gap: 3rem;
        top: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--azure);
        color: black;
        animation: openModal .3s ease-in-out forwards;
    }

    nav .mobileLinkContainer button {
        font-size: 36px;
        outline: none;
        border: none;
        background-color: transparent;
        font-family: "Yellowtail";
        font-size: 36px;
    }

    nav .mobileLinkContainer .socials {
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav .hamburgerIcon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 30px
    }
    
    nav .hamburgerIcon:hover {    
        cursor: pointer;
    }

    nav .hamburgerIcon span {
        display: block;
        width: 40px;
        border-bottom: 3px solid var(--azure);
        transition: .15s ease-in;
    }
    
    nav .hamburgerIcon:hover span{
        cursor: pointer;
        border-bottom: 3px solid var(--tropical-indigo);
        transition: .15s ease-in;
    }

    nav .logo {
        border-radius: 50%;
        width: 50px;
        cursor: pointer;
        transition: .15s ease-in;
    }

    nav .logo:hover {
        transform: scale(1.15);
        transition: .15s ease-in;
    }
</style>