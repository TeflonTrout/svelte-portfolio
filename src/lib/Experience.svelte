<script lang="ts">
  import WorkCard from "./components/WorkCard.svelte";
  import PNC from "./images/pncLogo.png";
  import IronGrid from "./images/ironGridLogo.png";
  import KingPool from "./images/KingPool.png";
  import Joyworld from "./images/joyworldLogo.jpg";

  export let innerWidth: number;
</script>

<div class="workPage">
  <h1>Work Experience</h1>
  <div class="container">
    <WorkCard
      logo={KingPool}
      backgroundColor="#DA1830"
      title="Lead Front End Engineer"
      company="KingPool"
      date="October 2024 - Present"
      techStack={innerWidth <= 786
        ? [
            "Next.js",
            "|",
            "TypeScript",
            "|",
            "0Auth",
            "|",
            "Supabase",
            "|",
            "Postgres",
            "|",
            "API",
            "|",
            "CSS",
            "|",
            "Git/GitHub",
            "|",
            "CI/CD",
          ].filter((x) => x != "|")
        : [
            "Next.js",
            "|",
            "TypeScript",
            "|",
            "0Auth",
            "|",
            "Supabase",
            "|",
            "Postgres",
            "|",
            "API",
            "|",
            "CSS",
            "|",
            "Git/GitHub",
            "|",
            "CI/CD",
          ]}
      description={[
        "Developed a comprehensive web application leveraging Next.js and TypeScript to create a responsive, user-friendly interface.",
        "Integrated OAuth-based authentication, enabling secure and seamless user login through various providers.",
        "Utilized Supabase and Postgres for backend development, focusing on efficient data storage, retrieval, and management.",
        "Worked extensively with APIs to enhance application functionality and improve user experience.",
        "Employed CSS for frontend styling, ensuring a visually appealing and intuitive UI.",
        "Managed codebase using Git/GitHub, adhering to best practices for version control.",
        "Implemented CI/CD pipelines for automated testing and deployment, enhancing application reliability and development workflow.",
      ]}
    />
    <WorkCard
      logo={IronGrid}
      title="Software Engineer"
      company="Iron Grid"
      date="May 2023 - October 2024"
      techStack={innerWidth <= 786
        ? [
            "Next.js",
            "|",
            "TypeScript",
            "|",
            "0Auth",
            "|",
            "Supabase",
            "|",
            "Postgres",
            "|",
            "API",
            "|",
            "CSS",
            "|",
            "Git/GitHub",
            "|",
            "CI/CD",
          ].filter((x) => x != "|")
        : [
            "Next.js",
            "|",
            "TypeScript",
            "|",
            "0Auth",
            "|",
            "Supabase",
            "|",
            "Postgres",
            "|",
            "API",
            "|",
            "CSS",
            "|",
            "Git/GitHub",
            "|",
            "CI/CD",
          ]}
      description={[
        "Developed a comprehensive web application leveraging Next.js and TypeScript to create a responsive, user-friendly interface.",
        "Integrated OAuth-based authentication, enabling secure and seamless user login through various providers.",
        "Utilized Supabase and Postgres for backend development, focusing on efficient data storage, retrieval, and management.",
        "Worked extensively with APIs to enhance application functionality and improve user experience.",
        "Employed CSS for frontend styling, ensuring a visually appealing and intuitive UI.",
        "Managed codebase using Git/GitHub, adhering to best practices for version control.",
        "Implemented CI/CD pipelines for automated testing and deployment, enhancing application reliability and development workflow.",
      ]}
    />
    <WorkCard
      logo={Joyworld}
      title="Software Engineer"
      company={innerWidth <= 786 ? "JOYWORLD" : "JOYWORLD, Inc"}
      date="June 2021 - May 2023"
      techStack={innerWidth <= 786
        ? [
            "React",
            "|",
            "Next.js",
            "|",
            "TypeScript",
            "|",
            "Web3.js",
            "|",
            "GraphQL",
            "|",
            "MongoDB",
            "|",
            "API",
            "|",
            "Deno.js",
            "|",
            "AWS",
            "|",
            "CI/CD",
          ].filter((x) => x != "|")
        : [
            "React",
            "|",
            "Next.js",
            "|",
            "TypeScript",
            "|",
            "Web3.js",
            "|",
            "GraphQL",
            "|",
            "MongoDB",
            "|",
            "API",
            "|",
            "Deno.js",
            "|",
            "AWS",
            "|",
            "CI/CD",
          ]}
      description={[
        "Developed user-centric Web3-enabled marketplace with React and Next.js, focusing on performance and scalability.",
        "Utilized TypeScript and Web3.js for type-safe code and secure Ethereum smart contract interactions.",
        "Employed GraphQL and MongoDB for efficient data retrieval and robust storage, serving both web and NFT use-cases.",
        "Integrated multiple APIs to enhance application functionality for both traditional web and blockchain platforms.",
        "Managed backend using Deno.js and deployed on AWS for high performance and reliability.",
        "Implemented CI/CD pipelines for automated testing and deployment, optimizing the development workflow.",
      ]}
    />
    <WorkCard
      logo={PNC}
      title="Lead Loan Analyst"
      company="PNC Bank"
      date="Dec. 2018 - June 2021"
      techStack={innerWidth <= 786
        ? ["Excel", "|", "SQL", "|", "CRM Software", "|"].filter(
            (x) => x != "|"
          )
        : [
            "Excel",
            "|",
            "SQL",
            "|",
            "CRM Software",
            "|",
            "Risk Assessment Software",
            "|",
            "Data Visualization Tools",
          ]}
      description={[
        "Reviewed and analyzed loan applications, applying data-driven techniques to assess creditworthiness, similar to evaluating code quality and system reliability in engineering.",
        "Adapted workflows to comply with federal regulations, demonstrating adaptability to procedural changes, a skill transferable to agile software development environments.",
        "Utilized financial software tools for loan processing, gaining experience in specialized software systems akin to specialized libraries and frameworks in engineering.",
        "Collaborated cross-functionally with sales, underwriting, and compliance teams, honing communication and teamwork skills relevant in software development projects.",
        "Managed large datasets of financial information, showcasing data management skills transferable to database design and implementation in software engineering.",
      ]}
    />
  </div>
</div>

<style>
  @keyframes slide-in {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* MOBILE */
  @media screen and (max-width: 786px) {
    .workPage {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    }

    .workPage h1 {
      font-size: 48px;
      text-decoration: underline;
      animation: 1s slide-in ease-out 0.15s forwards;
      transform: translateX(-110%);
      opacity: 0;
    }

    .workPage .container {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      animation: 1s slide-in ease-out 0.3s forwards;
      /* transform: translateX(-110%); */
      opacity: 0;
    }
  }

  @media screen and (min-width: 786px) {
    .workPage {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin-top: 70px;
      min-height: 1260px;
    }

    .workPage h1 {
      font-size: 48px;
      text-decoration: underline;
      animation: 1s slide-in ease-out 0.15s forwards;
      transform: translateX(-110%);
      opacity: 0;
    }

    .workPage .container {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      animation: 1s slide-in ease-out 0.3s forwards;
      /* transform: translateX(-110%); */
      opacity: 0;
    }
  }
</style>
