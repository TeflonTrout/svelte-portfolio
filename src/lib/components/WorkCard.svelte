<script lang="ts">
    import LazyLoad from "./LazyLoad.svelte";

    export let title:string;
    export let company:string;
    export let date:string;
    export let techStack:Array<string>;
    export let description:Array<string>;
</script>

<div class="workCardWrapper">
    <LazyLoad>
        <div class="workCard">
            <div class="heading">
                <h1 class="company">{company}&nbsp;</h1>
                <h1 class="title">- {title}</h1>
            </div>
            <h4 class="date">{date}</h4>
                <span></span>
                    <div class="techStack">
                        {#each techStack as tech}
                            <p>{tech}</p>
                        {/each}
                    </div>
            <span></span>
            <div class="description">
                <ul>
                    {#each description as item}
                        <li>{item}</li>
                    {/each}
                </ul>
            </div>
        </div>
    </LazyLoad>
</div>  

<style>
    .workCardWrapper {
        width: 80%;
    }

    .workCardWrapper .workCard {
        display: flex;
        min-width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        margin: 20px;
        background-color: var(--indigo);
        padding: 20px;
        border-radius: 10px;
    }

    .workCardWrapper .workCard .heading {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        align-self: flex-start;
    }

    .workCardWrapper .workCard .heading .company {
        font-size: 36px;
    }

    .workCardWrapper .workCard .heading .title {
        font-size: 26px;
        font-weight: bold;
        font-family: "Nunito";
    }

    .workCardWrapper .workCard .date {
        width: 100%;
        align-self: flex-start;
        text-align: start;
    }

    .workCardWrapper .workCard span {
        border-bottom: 2px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 10px 0 ;
    }

    .workCardWrapper .workCard .techStack {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }

    .workCardWrapper .workCard .description {
        width: 100%;
        gap: 5px;
    }

    .workCardWrapper .workCard .description ul {
        padding-left: 15px;

    }
</style>