<script lang="ts">
  import ProjectCard from "./components/ProjectCard.svelte";
  import TDI from "$lib/images/tdi.png"
  import FPC from "$lib/images/fpc.png"
  import NGW from "$lib/images/ngw.png"
</script>

<div class="projectPage">
    <h1>Projects</h1>
    <div class="projectGrid">
        <ProjectCard 
            backgroundImage={NGW} 
            projectName="Enchanted Castle API"
            description="Developed a robust fullstack web API using Golang for Disney's Lorcana game, enabling users to effortlessly explore and utilize Lorcana cards in a tailored and flexible manner."
            liveSiteURL=""
            codeURL=""
        />
        <ProjectCard 
            backgroundImage={NGW} 
            projectName="Nolengrad Warriors"
            description="Fullstack Web3 NFT Project utilizing Chainlink's VRF to create 'true random' NFT attributes."
            liveSiteURL="https://nolengrad-warriors.vercel.app/"
            codeURL="https://github.com/TeflonTrout/nolengrad-warriors-frontend"
        />
        <ProjectCard 
            backgroundImage={TDI} 
            projectName="TDI Productions"
            description="Created a high-performance landing page using Next.js and a CMS, optimizing SEO and user experience while streamlining content management for the company."
            liveSiteURL="https://tdi-productions.vercel.app"
            codeURL="https://github.com/TeflonTrout/tdi-productions"
        />
        <ProjectCard 
            backgroundImage={FPC} 
            projectName="FramePerfectControllers"
            description="Developed a responsive web app landing page using React and SASS/CSS enhancing user engagement and contributing to the company's online presence."
            liveSiteURL="https://wavedash.tech"
            codeURL="https://github.com/TeflonTrout/fpc"
        />
    </div>
</div>

<style>
    /* MOBILE */
    @media screen and (max-width: 786px) {
        .projectPage {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            width: 90%;
        }

        .projectPage h1 {
            font-size: 48px;
            text-decoration: underline;
            margin: 20px;
        }

        .projectPage .projectGrid {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: center;
            align-items: center;
        }
    }

    /* DESKTOP */
    @media screen and (min-width: 786px) {
        .projectPage {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            width: 100%;
            margin-top: 70px;
        }

        .projectPage h1 {
            font-size: 48px;
            text-decoration: underline;
            margin: 20px;
        }

        .projectPage .projectGrid {
            width: 85%;
            display: grid;
            gap: 40px;
            justify-items: center;
            align-items: stretch;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            justify-content: space-between;
        }
    }
</style>