<script>
  import LazyLoad from "./components/LazyLoad.svelte";

</script>

<LazyLoad>
    <div class="aboutPage">
        <div class="container">
            <h1>Frontend Excellence, Fullstack Fusion</h1>
            <p>
                I'm a fullstack engineer who takes pride in mastering both the frontend and backend domains. I excel in frontend web development, using React, Next.js, and TypeScript to build immersive user experiences. With a strong foundation in Express.js and Node.js, I seamlessly connect the frontend with powerful backend solutions, creating complete, dynamic, and high-performing web applications.
            </p>
            <p>
                My experience extends to database management as well. I'm well-versed in working with both relational databases like Postgres and NoSQL databases like MongoDB, ensuring that data is efficiently stored, retrieved, and managed in every project I undertake.
            </p>
        </div>
        <div class="graphic">
            
        </div>
    </div>
</LazyLoad>

<style>
    .aboutPage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    
    .aboutPage .container {
        display: flex;
        width: 80%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        background-color: var(--indigo);
        padding: 40px;
        border-radius: 10px;
    }

    .aboutPage h1 {
        margin-bottom: 10px;
        text-decoration: underline;
        font-size: 48px;
    }

    .aboutPage p {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
</style>