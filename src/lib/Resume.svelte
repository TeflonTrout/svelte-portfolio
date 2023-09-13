<script lang="ts">
    import PdfViewer from 'svelte-pdf';
    import Resume from "$lib/Resume.pdf"
</script>

<div class="resumePage">
    <h1>Resume</h1>
    <div class="resumeContainer">
        <PdfViewer data={""} url={Resume} scale={1.25} showButtons={["download", 'zoom', 'print']}/>
    </div>
</div>

<style>
    .resumePage {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .resumePage .resumeContainer {
        width: 80%;
    }

    .resumePage h1 {
        text-decoration: underline;
        font-size: 48px;
    }
</style>