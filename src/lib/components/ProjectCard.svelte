<script lang="ts">
    import Button from "./Button.svelte";

    export let backgroundImage:string;
    export let projectName: string;
    export let description: string;
    export let liveSiteURL: string;
    export let codeURL: string;
</script>

<div class="projectCard">
    <img src={backgroundImage} alt="project preview">
    <h1>{projectName}</h1>
    <div class="infoContainer">
        <p class="description">{description}</p>
        <div class="btnContainer">
            <a href={liveSiteURL} target="_blank" rel="noopener noreferrer">
                <Button text="Live Site" />
            </a>
            <a href={codeURL} target="_blank" rel="noopener noreferrer">
                <Button text="Code" />
            </a>
        </div>
    </div>
</div>

<style>
    .projectCard {
        width: 100%;
        min-height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-position: center;
        background-size: cover;
        border-radius: 5px;
        transition: .35s ease-in-out;
        background: var(--indigo-2);
    }
    
    img {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 16/9;
        border-radius: 5px 5px 0 0 ;
    }

    .projectCard:hover {
        transition: .15s ease-in-out;
        box-shadow: 0px 0px 10px 2px;
    }

    .projectCard .infoContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        width: 80%;
        margin-bottom: 10px;
    }

    .projectCard .infoContainer .description {
        text-align: center;
    }

    .projectCard .btnContainer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 5px;
        width: 100%;
    }
</style>