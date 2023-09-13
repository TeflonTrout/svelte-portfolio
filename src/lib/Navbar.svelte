<script lang="ts">
    import Logo from "$lib/images/JT.jpg"

    function handleLinkClick(elementId:string) {
        const anchor = document.getElementById(elementId)
        window.
        window.scrollTo({
            top: anchor?.offsetTop,
            behavior: 'smooth'
        })
    }
</script>

<nav>
    <img src={Logo} alt="JTK" class="logo">
    <div class="linkContainer">
        <h1 on:click={() => handleLinkClick('home')}>Home</h1>
        <h1 on:click={() =>handleLinkClick('about')}>About</h1>
        <h1 on:click={() => handleLinkClick('experience')}>Experience</h1>
        <h1 on:click={() => handleLinkClick('projects')}>Projects</h1>
        <h1 on:click={() => handleLinkClick('contact')}>Contact</h1>
        <h1>Resume</h1>
    </div>
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