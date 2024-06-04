<script lang="ts">
  import Button from "./Button.svelte";

  export let backgroundImage: string;
  export let projectName: string;
  export let description: string;
  export let liveSiteURL: string;
  export let codeURL: string;
  export let apiURL: string | null = null;
  export let inProgress: boolean = false;
</script>

<div class="projectCard">
  <img src={backgroundImage} alt="project preview" />
  {#if inProgress == true}
    <div class="inProgressBanner">In Progress</div>
  {/if}
  <h1 class="projectName">{projectName}</h1>
  <p class="description">{description}</p>
  {#if inProgress == true}
    <div class="btnContainer">
      <span></span>
    </div>
  {:else}
    <div class="btnContainer">
      <a href={liveSiteURL} target="_blank" rel="noopener noreferrer">
        <Button text="Live Site" />
      </a>
      <a href={codeURL} target="_blank" rel="noopener noreferrer">
        <Button text="Code" />
      </a>
      {#if apiURL != null}
        <a href={apiURL} target="_blank" rel="noopener noreferrer">
          <Button text="API Code" />
        </a>
      {/if}
    </div>
  {/if}
</div>

<style>
  @keyframes backgroundShift {
    50% {
      background: var(--sky-blue);
    }
  }
  /* MOBILE */
  @media screen and (max-width: 786px) {
    .projectCard {
      width: 100%;
      min-height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background-position: center;
      background-size: cover;
      border-radius: 5px;
      transition: 0.35s ease-in-out;
      background: var(--indigo-2);
    }

    .projectCard img {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 16/9;
      border-radius: 5px 5px 0 0;
    }

    .projectCard .inProgressBanner {
      background-color: var(--azure);
      animation: backgroundShift 2s infinite;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      font-weight: bold;
      padding: 2px;
    }

    .projectCard .description {
      width: 90%;
      text-align: center;
      padding: 10px;
    }

    .projectCard .btnContainer {
      display: flex;
      justify-self: flex-end;
      justify-content: space-around;
      align-items: center;
      margin-top: auto;
      width: 100%;
      margin: 10px 0 10px 0;
    }
  }

  @media screen and (min-width: 786px) {
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
      transition: 0.35s ease-in-out;
      background: var(--indigo-2);
    }

    .projectCard:hover {
      box-shadow: 0px 0px 5px 5px white;
    }

    .projectCard .projectName {
      text-decoration: underline;
    }

    .projectCard .inProgressBanner {
      background-color: var(--azure);
      animation: backgroundShift 2s infinite;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
      font-weight: bold;
      padding: 2px;
    }

    .projectCard img {
      width: 100%;
      /* object-fit: cover; */
      aspect-ratio: 16/9;
      border-radius: 5px 5px 0 0;
    }

    .projectCard .description {
      width: 90%;
      padding: 10px;
      text-align: center;
    }

    .projectCard .btnContainer {
      display: flex;
      justify-self: flex-end;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      margin: 10px 0 10px 0;
    }
  }
</style>
