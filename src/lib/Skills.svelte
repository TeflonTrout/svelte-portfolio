<script lang='ts'>
    import Icon from "@iconify/svelte";
</script>

<div class="skillsPage">
    <h1>Skills</h1>
    <div class="containers">
        <div class="skillsContainer">
            <h2>Front End</h2>
            <ul>
                <div>
                    <Icon icon="mdi:react" width="30px" height="30px" color="black"/>
                    <li>React</li> 
                </div>
                <div>
                    <Icon icon="cib:next-js" width="30px" height="30px" color="black"/>
                    <li>Next.js</li>
                </div>
                <div>
                    <Icon icon="teenyicons:svelte-outline" width="30px" height="30px" color="black"/>
                    <li>Svelte</li>
                </div>
                <div>
                    <Icon icon="ri:javascript-fill" width="30px" height="30px" color="black"/>
                    <li>JavaScript</li>
                </div>
                <div>
                    <Icon icon="bxl:typescript" width="30px" height="30px" color="black"/>
                    <li>TypeScript</li>
                </div>
                <div>
                    <Icon icon="bxl:css3" width="30px" height="30px" color="black"/>
                    <li>CSS/SCSS</li>  
                </div>
                <div>
                    <Icon icon="mdi:ethereum" width="30px" height="30px" color="black"/>
                    <li>Web3.js</li>
                </div>
                <div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 162"><path fill="#000" d="M256 138.739c-133.839 17.491-229.367 38.5-230.78-47.733c0 0 2.92-33.412 43.902-35.516c0 0 1.381-29.676 32.69-33.036c16.832-1.822 35.956 15.513 38.029 33.758c0 0 41.42-7.662 43.21 32.722c.628 14.068-2.544 37.997-42.488 36.96c0 0-23.112-3.14-26.253-38.876c-6.5 69.18 93.518 65.161 94.963 2.324c.628-27.164-16.77-55.112-55.96-49.868c-21.48-54.044-78.665-50.935-99.956-.816c-30.43 0-53.699 23.426-53.353 54.013C1.166 191.119 138.176 161.443 256 138.739Z"/></svg>
                    <li>Ethers.js</li>
                </div>
                <div>
                    <Icon icon="logos:threejs" width="30px" height="30px" color="black"/>
                    <li>Three.js</li>
                </div>
            </ul>
        </div>
        <div class="skillsContainer">
            <h2>Back End</h2>
            <ul>
                <div><Icon icon="mdi:nodejs" width="30px" height="30px" color="black"/>
                    <li>Node.js</li>
                </div>
                <div><Icon icon="simple-icons:express" width="30px" height="30px" color="black"/>
                    <li>Express.js</li>
                </div>
                <div><Icon icon="mdi:graphql"width="30px" height="30px" color="black"/>
                    <li>GraphQL</li>
                </div>
                <div><Icon icon="file-icons:go-old" width="30px" height="30px" color="black"/>
                    <li>Go</li>
                </div>
                <div><Icon icon="teenyicons:mongodb-outline" width="30px" height="30px" color="black"/>
                    <li>MongoDB</li>
                </div>
                <div><Icon icon="simple-icons:mongoose" width="30px" height="30px" color="black"/>
                    <li>Mongoose</li>
                </div>
                <div><Icon icon="akar-icons:postgresql-fill" width="30px" height="30px" color="black"/>
                    <li>Postgres</li>
                </div>
                <div><Icon icon="tabler:brand-oauth" width="30px" height="30px" color="black"/>
                    <li>0Auth</li>
                </div>
                <div><Icon icon="dashicons:rest-api" width="30px" height="30px" color="black"/>
                    <li>Rest API</li>
                </div>
            </ul>
        </div>
        <div class="skillsContainer">
            <h2>Other Tech</h2>
            <ul>
                <div>
                    <Icon icon="mdi:github" width="30px" height="30px" color="black" id="icon"/>
                    <li>Git/GitHub</li>
                </div>
                <div>
                    <Icon icon="solar:figma-bold" width="30px" height="30px" color="black"/>
                    <li>Figma</li>
                </div>
                <div>
                    <Icon icon="file-icons:solidity" width="30px" height="25px" color="black"/>
                    <li>Solidity</li>
                </div>
                <div>
                    <Icon icon="simple-icons:chainlink" width="30px" height="30px" color="black"/>
                    <li>Chainlink</li>
                </div>
                <div>
                    <Icon icon="cib:jira" width="30px" height="30px" color="black"/>
                    <li>Jira</li>
                </div>
                <div>
                    <Icon icon="ph:git-diff" width="30px" height="30px" color="black"/>
                    <li>CI/CD</li>
                </div>
                <div>
                    <Icon icon="devicon-plain:heroku" width="30px" height="30px" color="black"/>
                    <li>Heroku</li>
                </div>
                <div>
                    <Icon icon="mdi:aws" width="30px" height="30px" color="black"/>
                    <li>AWS</li>
                </div>
            </ul>
        </div>
    </div>
    <!-- <div class="skillsContainer">
        <h2>Non-Tech Skills</h2>
        <ul>
            <li>Blender</li>
            <li>3D Modeling</li>
            <li>Virtual Production</li>
            <li>Resin Casting</li>
            <li>Film Photography</li>
            <li>Film Production</li>
        </ul>
    </div> -->
</div>

<style>
    /* MOBILE */
    @media screen and (max-width: 786px) {
        .skillsPage {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
        }

        .skillsPage h1 {
            margin: 20px;
            text-decoration: underline;
            font-size: 48px;
        }

        .skillsPage .containers {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: 20px;
        }

        .skillsPage h2 {
            margin-bottom: 5px;
            text-decoration: underline;
        }

        .skillsPage .skillsContainer {
            background-color: var(--azure);
            width: 90%;
            color: black;
            border-radius: 5px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            transition: .15s ease-in;
        }

        .skillsPage .skillsContainer ul {
            display: grid;
            width: 100%;
            grid-template-columns: 1fr 1fr;
            justify-content: space-between;
            justify-items: center;
            align-items: center;
            padding: 0;
            gap: 0 10px;
            margin-top: 5px;
        }

        .skillsPage .skillsContainer div {
            display: flex;
            width: 80%;
            justify-content: center;
            align-items: center;
            text-align: center;
            list-style: none;
            font-size: 20px;
            font-weight: bold;
            transition: .3s ease-in;
            cursor: default;
        }

        .skillsPage .skillsContainer li {
            display: flex;
            width: 100%;
            justify-content: flex-start;
            align-items: center;
            text-align: start;
            list-style: none;
            font-size: 20px;
            font-weight: bold;
            transition: .3s ease-in;
            margin-left: 10px;
            cursor: default;
        }
    }

    @media screen and (min-width: 786px) {
        .skillsPage {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 85%;
        }

        .skillsPage h1 {
            margin-bottom: 10px;
            text-decoration: underline;
            font-size: 48px;
        }

        .skillsPage .containers {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: stretch;
        }

        .skillsPage h2 {
            margin-bottom: 10px;
            text-decoration: underline;
        }

        .skillsPage .skillsContainer {
            background-color: var(--azure);
            color: black;
            border-radius: 5px;
            padding: 10px;
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            transition: .15s ease-in;
        }

        .skillsPage .skillsContainer ul {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 0;
        }

        .skillsPage .skillsContainer div {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            text-align: center;
            list-style: none;
            font-size: 20px;
            font-weight: bold;
            transition: .3s ease-in;
            cursor: default;
        }

        .skillsPage .skillsContainer li {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            text-align: center;
            list-style: none;
            font-size: 20px;
            font-weight: bold;
            transition: .3s ease-in;
            cursor: default;
        }

        .skillsPage .skillsContainer div:hover{
            transform: scale(1.15);
            transition: .15s ease-in;
        }
    }
</style>