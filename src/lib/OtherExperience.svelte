<script lang="ts">
  import Chainlink from "./images/chainlink.svg";
  import PlacementLabs from "./images/placementLabs.png";
  import BlockMagic from "./images/BlockMagic.png";
  import OtherXpCard from "./components/OtherXPCard.svelte";

  export let innerWidth: number;
</script>

<div class="otherExperience">
  <h1>Other Experience</h1>
  <div class="container">
    <OtherXpCard
      logo={BlockMagic}
      isLogoBackground={true}
      title="Chainlink Block Magic Hackathon - Econobloom"
      link="https://chainlinkblockmagic.devpost.com"
      date="Apr. 2024 - June 2024"
      skillArray={innerWidth <= 786
        ? [
            "Next.js",
            "|",
            "Chainlink Oracle",
            "|",
            "Typescript",
            "|",
            "Postgres",
            "|",
            "Solidity",
            "|",
            "ERC-721",
            "|",
            "SQL",
            "|",
            "API",
            "|",
            "Node.js",
          ].filter((x) => x != "|")
        : [
            "Next.js",
            "|",
            "Chainlink Oracle",
            "|",
            "Typescript",
            "|",
            "Postgres",
            "|",
            "Solidity",
            "|",
            "ERC-721",
            "|",
            "SQL",
            "|",
            "API",
            "|",
            "Node.js",
          ]}
      descriptionArray={[
        "Developed and launched Econobloom, a blockchain-based NFT game, enabling users to mint, nurture, and evolve digital plants based on real-time RSI market data, leveraging Chainlink to integrate dynamic external data feeds.",
        "Implemented a full-stack solution using React and Node.js, integrating smart contracts for on-chain transactions and Supabase for off-chain data management, enhancing user interaction through a responsive, intuitive UI.",
      ]}
    />
    <OtherXpCard
      logo={PlacementLabs}
      isLogoBackground={true}
      title="Placement Labs Bootcamp"
      link="https://placementlabs.xyz"
      date="Sep. 2023 - Oct. 2023"
      skillArray={innerWidth <= 786
        ? [
            "Web3 Ecosystem",
            "|",
            "Blockchain Segmentation",
            "|",
            "Web3 Networking",
          ].filter((x) => x != "|")
        : [
            "Web3 Ecosystem",
            "|",
            "Blockchain Segmentation",
            "|",
            "Web3 Networking",
          ]}
      descriptionArray={[
        "Utilized strategic approaches to position effectively within the Web3 industry, showcasing relevant experience, securing interviews, and successfully adapting to evolving career pathways within this dynamic sector.",
        "Developed proficient skills in autonomously exploring the Web3 ecosystem, resulting in a comprehensive grasp of its core concepts and terminology.",
      ]}
    />
    <OtherXpCard
      logo={Chainlink}
      title="Chainlink Spring Hackathon"
      projectName="Wormhole Fishing NFT"
      link="https://chain.link/hackathon/hackathon-spring-2023"
      date="Apr. 2023 - June 2023"
      skillArray={innerWidth <= 786
        ? [
            "ChainlinkVRF",
            "|",
            "Chainlink Functions",
            "|",
            "Next.js",
            "|",
            "TypeScript",
            "|",
            "Solidity",
            "|",
            "ERC-721",
            "|",
            "ERC-1155",
            "|",
            "Go",
            "|",
            "API",
          ].filter((x) => x != "|")
        : [
            "ChainlinkVRF",
            "|",
            "Chainlink Functions",
            "|",
            "Next.js",
            "|",
            "TypeScript",
            "|",
            "Solidity",
            "|",
            "ERC-721",
            "|",
            "ERC-1155",
            "|",
            "Go",
            "|",
            "API",
          ]}
      descriptionArray={[
        "Engineered a decentralized application (dApp) with a robust backend API utilizing Go, seamlessly allowing users to mint and trade unique NFTs on the blockchain using Chainlink functions.",
        "Integration of Chainlink Functions: Integrated Chainlink functions to securely fetch and display real-time external data, enhancing NFT metadata dynamically with accurate information, adding value and functionality to the NFTs.",
        "User-Friendly Interface and Experience: Designed and developed an intuitive user interface (UI) and experience (UX) to facilitate effortless NFT minting, browsing, and trading, fostering user engagement and promoting adoption within the Web3 community.",
      ]}
    />
  </div>
</div>

<style>
  /* MOBILE */
  @media screen and (max-width: 786px) {
    .otherExperience {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    }

    .otherExperience * {
      margin: 0;
    }

    .otherExperience h1 {
      font-size: 48px;
      margin: 20px;
      text-decoration: underline;
    }

    .otherExperience .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 20px;
    }
  }

  /* DESKTOP */
  @media screen and (min-width: 786px) {
    .otherExperience {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    }

    .otherExperience * {
      margin: 0;
    }

    .otherExperience h1 {
      font-size: 48px;
      margin: 20px;
      text-decoration: underline;
    }

    .otherExperience .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
</style>
