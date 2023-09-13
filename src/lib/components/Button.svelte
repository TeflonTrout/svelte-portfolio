<script lang='ts'>
    export let text:string;
    export let onClick:Function | undefined = undefined;
</script>

<div>
    {#if onClick != undefined}
        <button on:click={() => onClick?.()}>
            <h1>{text}</h1>
        </button>
        {:else}
        <button>
            <h1>{text}</h1>
        </button>
    {/if}
    
</div>

<style>
    button {
        display: inline-block;
        position: relative;
        color: var(--indigo-2);
        outline: none;
        border: none;
        background-color: white;
        padding: 5px 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: .25s ease-in;
        font-weight: bold;
        width: auto;
    }

    button:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 4px;
        bottom: 0;
        left: 0;
        border-radius: 0 0 5px 5px;
        background: var(--sky-blue);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
    
    button:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
</style>