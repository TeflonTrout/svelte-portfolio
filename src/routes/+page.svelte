<script lang='ts'>
    import { onMount } from "svelte";
    import About from "$lib/About.svelte";
    import Contact from "$lib/Contact.svelte";
    import Experience from "$lib/Experience.svelte";
    import Home from "$lib/Home.svelte";
    import OtherExperience from "$lib/OtherExperience.svelte";
    import Projects from "$lib/Projects.svelte";
    import Resume from "$lib/Resume.svelte";
    import Skills from "$lib/Skills.svelte";


    let windowWidth:number = window.innerWidth
    onMount(() => {
        function onResize() {
			windowWidth = window.innerWidth;
		}
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);    
    })
</script>

<head>
    <title>JT Kazousky</title>
    <meta name="description" content="">
</head>

<div id="home" class="homePage">
    <Home />
</div>
<div  >
    <About />
</div>
<div id="experience" class="page">
    <Experience innerWidth={windowWidth}/>
    <OtherExperience innerWidth={windowWidth}/>
</div>
<div id="projects" class="page">
    <Projects />
</div>
<div id="skills" class="page">
    <Skills />
</div>
<div id="resume" class="page">
    <Resume innerWidth={windowWidth}/>
</div>
<div id="contact" class="page">
    <Contact innerWidth={windowWidth}/>
</div>

<style>
    /* MOBILE */
    @media screen and (max-width: 786px) {
        .homePage {
            width: 100%;
            height: 100vh;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        } 

        .page {    
            width: 100%;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }
    }

    @media screen and (min-width: 786px) {
        .homePage {
            height: 100vh;
            width: 100%;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .page {    
            min-height: 100vh;
            width: 100%;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
</style>