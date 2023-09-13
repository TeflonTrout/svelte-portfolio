<script>
  import About from "$lib/About.svelte";
  import Contact from "$lib/Contact.svelte";
  import Experience from "$lib/Experience.svelte";
  import Home from "$lib/Home.svelte";
  import Projects from "$lib/Projects.svelte";
  import Resume from "$lib/Resume.svelte";
  import Skills from "$lib/Skills.svelte";
</script>

<div id="home" class="homePage">
    <Home />
</div>
<div id='about' class="page">
    <About />
</div>
<div id="experience" class="page">
    <Experience />
</div>
<div id="projects" class="page">
    <Projects />
</div>
<div id="skills" class="page">
    <Skills />
</div>
<div id="resume" class="page">
    <Resume />
</div>
<div id="contact" class="page">
    <Contact />
</div>

<style>
    .homePage {
        height: 100vh;
        width: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .aboutPage {
        height: 100vh;
        width: 100%;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>