<script lang="ts">
    import { onMount } from "svelte";

    export let logo:string | null = null;
    export let isLogoBackground:boolean | undefined = false;
    export let title:string;
    export let projectName:string | undefined = undefined;
    export let link:string | undefined;
    export let date:string;
    export let skillArray: string[] = [];
    export let descriptionArray: string[] = [];

    let innerWidth:number = window.innerWidth

    onMount(() => {
        function onResize() {
			innerWidth = window.innerWidth;
		}
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);    
    })
</script>

<div class="otherXPCard">
    <div class="title">
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="experience" class={isLogoBackground == true ? "logoBackground" : "logo"}>
            <h1>{title}{projectName != undefined ? ` ${innerWidth > 786 ? "-" : ""} ${projectName}` : ""}</h1>
        </a>
    </div>
    <p class="date">{date}</p>
    <span></span>
    <div class="skillContainer">
        {#each skillArray as skill}
            <p>{skill}</p>
        {/each}
    </div>
    <span></span>
    <div class="description">
        <ul>
            {#each descriptionArray as bullet}
                <li>{bullet}</li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .otherXPCard a {
        text-decoration: none;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        width: 100%;
    }

    .otherXPCard span {
        border-bottom: 2px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 10px 0;
    }

    /* MOBILE */
    @media screen and (max-width: 786px) {
        .otherXPCard {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: var(--light-blue);
            color: black;
            width: 95%;
            padding: 20px;
            border-radius: 10px;
        }

        .otherXPCard .title {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            align-self: center;
            text-align: center;
        }

        .otherXPCard a {
            width: auto;
            display: flex;
            flex-direction: column;
            gap: 5px;
            justify-content: center;
            align-items: center;
            transition: .15s ease-in;
        }

        .otherXPCard a:hover {
            transform: scale(1.05);
            transition: .15s ease-in;
        }

        .otherXPCard .title .logo {
            height: 50px;
            object-fit: contain;
            background: white;
            padding: 5px;
            border-radius: 10px;
        }
        
        .otherXPCard .title .logoBackground {
            width: 100px;
            object-fit: contain;
            background: black;
            padding: 5px;
            border-radius: 10px;
        }

        .otherXPCard .date {
            display: flex;
            width: 100%;
            font-size: 18px;
            font-weight: bold;
            justify-content: center;
            align-items: center;
        }

        .otherXPCard .skillContainer {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr) );
            justify-content: space-between;
            justify-items: center;
            align-items: center;
            width: 100%;
        }

        .otherXPCard .skillContainer p {
            width: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .otherXPCard .description {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .otherXPCard .description ul {
            padding-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 8px;
        }
    }

    /* DESKTOP */
    @media screen and (min-width: 786px) {
        .otherXPCard {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: var(--light-blue);
            color: black;
            width: 80%;
            padding: 20px;
            margin:20px;
            border-radius: 20px;
        }

        .otherXPCard .title {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            gap: 10px;
            margin-bottom: 10px;
        }

        .otherXPCard a {
            width: auto;
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
            transition: .15s ease-in;
        }

        .otherXPCard a:hover {
            transform: scale(1.05);
            transition: .15s ease-in;
        }

        .otherXPCard .title .logo {
            width: 100px;
            object-fit: contain;
            background: white;
            padding: 5px;
            border-radius: 10px;
        }
        
        .otherXPCard .title .logoBackground {
            width: 100px;
            object-fit: contain;
            background: black;
            padding: 5px;
            border-radius: 10px;
        }

        .otherXPCard .date {
            display: flex;
            width: 100%;
            font-weight: bold;
            justify-content: center;
            align-items: center;
        }

        .otherXPCard .skillContainer {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
        }

        .otherXPCard .skillContainer p {
            width: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .otherXPCard .description {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .otherXPCard .description ul {
            padding-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 8px;
        }
    }
</style>