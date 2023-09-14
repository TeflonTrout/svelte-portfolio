<div class="skillsPage">
    <h1>Skills</h1>
    <div class="containers">
        <div class="skillsContainer">
            <h2>Front End</h2>
            <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>Svelte</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>CSS/SCSS</li>
                <li>Web3.js</li>
                <li>Ethers.js</li>
                <li>Three.js</li>
            </ul>
        </div>
        <div class="skillsContainer">
            <h2>Back End</h2>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>GraphQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Postgres</li>
                <li>0Auth</li>
                <li>Rest API</li>
            </ul>
        </div>
        <div class="skillsContainer">
            <h2>Other Tech</h2>
            <ul>
                <li>Git/GitHub</li>
                <li>Figma</li>
                <li>Solidity</li>
                <li>Jira</li>
                <li>CI/CD</li>
                <li>Heroku</li>
                <li>AWS</li>
            </ul>
        </div>
    </div>
    <br/>
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
            justify-content: center;
            align-items: center;
            width: 90%;
        }

        .skillsPage h1 {
            margin-bottom: 10px;
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

        .skillsPage .skillsContainer:hover {
            transition: .15s ease-in;
            box-shadow: white 0px 0px 5px 3px;
        }

        .skillsPage .skillsContainer ul {
            display: grid;
            width: 100%;
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
            justify-content: center;
            justify-items: center;
            align-items: center;
            padding: 0;
            margin-top: 5px;
        }

        .skillsPage .skillsContainer li {
            text-align: center;
            list-style: none;
            font-size: 20px;
        }
    }

    @media screen and (min-width: 786px) {
        .skillsPage {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 90%;
        }

        .skillsPage h1 {
            margin-bottom: 10px;
            text-decoration: underline;
            font-size: 48px;
        }

        .skillsPage .containers {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: stretch;
        }

        .skillsPage h2 {
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

        .skillsPage .skillsContainer:hover {
            transition: .15s ease-in;
            box-shadow: white 0px 0px 5px 3px;
        }

        .skillsPage .skillsContainer ul {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 0;
        }

        .skillsPage .skillsContainer li {
            text-align: center;
            list-style: none;
            font-size: 20px;
        }
    }
</style>