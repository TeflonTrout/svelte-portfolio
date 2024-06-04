<script lang="ts">
  import Resume from "$lib/JT_Kazousky.pdf";
  //   import Web3Resume from "$lib/Resume.pdf";
  export let innerWidth: number;
</script>

<div class="resumePage">
  {#if innerWidth > 786}
    <h1>Resume</h1>
    <!-- <div class="resumeContainer">
            <iframe src={`${Resume}#zoom=80`} frameborder="0" title="resume" width="100%"></iframe>
        </div> -->
    <a href={`${Resume}`} target="_blank" rel="noopener noreferrer">
      <h2>JT Kazousky</h2>
    </a>
    <!-- <a href={`${Web3Resume}`} target="_blank" rel="noopener noreferrer">
            <h2>Web3 Resume</h2>
        </a> -->
  {:else}
    <h1>Resume</h1>
    <a href={`${Resume}`} target="_blank" rel="noopener noreferrer">
      <h2>JT Kazousky</h2>
    </a>
    <!-- <a href={`${Web3Resume}`} target="_blank" rel="noopener noreferrer">
            <h2>Web3 Resume</h2>
        </a> -->
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
      padding: 0px;
      width: 80%;
      border-radius: 10px;
      margin: 10px;
      background-color: var(--indigo);
    }

    .resumePage a h2 {
      text-decoration: underline;
      font-size: 36px;
      text-align: center;
      font-weight: 100;
      margin: 20px;
      font-family: "Yellowtail";
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

    .resumePage a {
      color: white;
      padding: 0px;
      width: 50%;
      border-radius: 10px;
      margin: 20px;
      background-color: var(--indigo);
    }

    .resumePage a h2 {
      text-decoration: underline;
      font-size: 36px;
      text-align: center;
      font-weight: 100;
      margin: 20px;
      font-family: "Yellowtail";
    }
  }
</style>
