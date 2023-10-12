<script lang="ts">
    import Resume from "$lib/Resume.pdf"
    export let innerWidth:number;
</script>

<div class="resumePage">
    {#if innerWidth > 786}
        <h1>Resume</h1>
        <div class="resumeContainer">
            <iframe src={`${Resume}#zoom=80`} frameborder="0" title="resume" width="100%"></iframe>
        </div>
        {:else}
        <a href={`${Resume}`} target="_blank" rel="noopener noreferrer">
            <h1>View My Resume</h1>
        </a>
    {/if}
</div>

<style>
    @media screen and (max-width: 786px) {
        .resumePage {
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 50vh;
        }

        .resumePage a {
            color: white;
            padding: 10px;
            width: 100%;
            border-radius: 10px;
            margin: 20px;
            background-color: var(--indigo);
        }
        
        .resumePage a h1 {
            text-decoration: underline;
            font-size: 36px;
            text-align: center;
            margin: 20px;
        }
    }

    @media screen and (min-width: 786px) {
        .resumePage {
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin-top: 70px;
        }

        .resumePage .resumeContainer {
            width: 100%;
        }

        .resumePage h1 {
            text-decoration: underline;
            font-size: 48px;
            margin: 20px;
        }

        .resumePage iframe {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            text-align: center;
        }
    }
</style>