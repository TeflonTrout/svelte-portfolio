<script lang="ts">
  import { onMount } from "svelte";

    export let logo:string;
    export let title:string;
    export let company:string;
    export let date:string;
    export let techStack:Array<string>;
    export let description:Array<string>;
        let innerWidth:number = window.innerWidth

    onMount(() => {
        function onResize() {
			innerWidth = window.innerWidth;
		}
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);    
    })
</script>

<div class="workCardWrapper">
        <div class="workCard">
            <div class="heading">
                <img src={logo} alt="company">
                <h1 class="company">{company}&nbsp;</h1>
                <h1 class="title">{innerWidth > 786 ? "-" : ""} {title}</h1>
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
</div>  

<style>
    /* MOBILE */
    @media screen and (max-width: 786px) {
        .workCardWrapper {
            width: 95%;
        }

        .workCardWrapper .workCard {
            display: flex;
            min-width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
            margin: 0;
            margin-top: 20px;
            background-color: var(--indigo);
            padding: 20px;
            border-radius: 10px;
        }

        .workCardWrapper .workCard .heading {
            display: flex;
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
            align-self: center;
        }
        
        .workCardWrapper .workCard .heading img {
            width: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }

        .workCardWrapper .workCard .heading .company {
            font-size: 32px;
        }

        .workCardWrapper .workCard .heading .title {
            font-size: 20px;
            font-weight: bold;
            font-family: "Nunito";
        }
        
        .workCardWrapper .workCard .date {
            font-size: 18px;
            font-weight: bold;
            font-family: "Nunito";
            width: 100%;
            align-self: center;
            text-align: center;
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
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr) );
            justify-content: space-between;
            justify-items: center;
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
    }

    @media screen and (min-width: 786px) {
        .workCardWrapper {
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
            justify-content: center;
            align-items: center;
            align-self: center;
        }
        
        .workCardWrapper .workCard .heading img {
            height: 50px;
            border-radius: 5px;
            margin-right: 10px;
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
            text-align: center;
            align-self: center;
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
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 8px;
        }
    }
</style>