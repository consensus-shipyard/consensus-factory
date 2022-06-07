---
draft: true
blocks:
  - tailwind:
      section: ''
      wrap: px-10 pt-48 pb-16 flex items-center max-w-desktop-full mx-auto
      imageWrap: ''
      image: ''
      contentWrap: ''
      content: font-1 text-center text-white text-lg
      label: ''
      headline: text-3xl font-bold font-2
      subhead: text-2xl font-bold font-2 border-b-3 inline-block pb-6 mb-16
      text: mb-12
      buttons: inline-flex flex-col
      button: ' font-bold text-base py-2 px-4 mb-4 first:bg-accent1'
    background:
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1651519685/consensus-factory/hero_bg_gocqtx.png
      ornaments:
        - src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1651524196/consensus-factory/hero-ornament-left_lvldlf.svg
          alignment: bottom
          width: '460'
          height: '417'
          xOffset: '-390'
        - src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1651524200/consensus-factory/hero-ornament-right_dhqhk7.svg
          alignment: top
          xOffset: '300'
          yOffset: '-45'
    label: Protocol Labs Research invites you to
    headline: 'ConsensusFactory: '
    subhead: Decentralized Reflections on Consensus
    body: >
      Consensus is at the heart of decentralised systems, having taken centre
      stage with the introduction of Nakamoto’s Proof-of-Work (PoW) algorithm
      and the subsequent explosion of blockchain technology. However, it also
      poses a significant scalability bottleneck for blockchain networks. The
      goal of this event is to present different scalability approaches being
      pursued by projects across the blockchain space, and, in the process, to
      foster new ideas and new collaborations.
    buttons:
      - label: Register Here
        link: 'https://solarisevents.typeform.com/consensus'
    _template: tailwindFeature
  - style:
      textAlignment: text-center
      minHeight: min-h-0
      padding: pt-14 pb-28 pr-10 pl-10
      width: normal
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: 'text-black font-1 text-5xl mb-0 '
      subheadStyles: 'text-black font-1 text-3xl mb-0 '
      textStyles: text-primary font-1 text-xl mb-0 font-bold
      contentOrder: labelHeadingsContent
    label: ''
    headline: ''
    subhead: ''
    body: ''
    _template: banner
  - headline: This is the main headline
    cards:
      - imageSrc: >-
          https://res.cloudinary.com/protocolai/image/upload/v1651779372/consensus-factory/Arnaud_Bailly_IOHK_mnmqm6.png
        name: Arnaud Bailly
        title: Input Output (IOHK) Technical Lead | Engineering
        label: >-
          Arnaud Bailly began developing software professionally in 1994, in
          various languages and settings. He graduated with a PhD from the
          University of Lille in 2005 and since then has worked as consultant,
          lead developer, technology chief, adviser, architect, and coach,
          mostly in software publishing companies. Arnaud has been a Haskell
          enthusiast since 2001 and had been coding professionally in Haskell
          for a decade before joining IOHK in 2021.
        headline: 'Hydra: Next Generation State Channels'
        text: >+
          Accommodating a growing number of participants and transactions is a
          problem in any distributed consensus system, and blockchains make no
          exception, especially as they are gaining attention from a wider
          audience.

          Hydra Head Protocol is a Layer 2 solution for (e)UTxO based
          distributed ledgers that is part of Cardano's strategy to accommodate
          this growth, allowing the creation of Isomorphic Multi-party State
          Channels between a limited set of participants.


          This talk reflects on our experience taking Hydra Head from a research
          paper to a production-ready system, over the past year and half.



      - imageSrc: >-
          https://res.cloudinary.com/protocolai/image/upload/v1651780333/consensus-factory/Dankrad_Feist_no_background_pbleub.png
        name: Dankrad Feist
        title: Ethereum Foundation
        label: >-
          Dankrad Feist is an Ethereum researcher with a background in
          Theoretical Physics and Technology. Since joining the Ethereum
          Foundation in 2019, he has worked on topics that involve applied
          cryptography, such as sharding, statelessness, the proof of custody
          and other topics.
        headline: >-
          Data availability commitments with distributed reconstruction thanks
          to 2d KZG commitments
        text: >+
          Thanks to KZG commitments and their homomorphic properties, we were
          able to construct a unique data sharding solution that supports high
          data bandwidth while preserving security properties without requiring
          powerful actors (beyond normal validating nodes) in the network.

      - imageSrc: >-
          https://res.cloudinary.com/protocolai/image/upload/v1653726196/consensus-factory/Victor_Luchangco_jcqv4p.png
        name: Victor Luchangco
        title: Algorand | Principal Algorithms Researcher
        label: "Victor Luchangco is a Principal Algorithms Researcher at Algorand, where he works on protocols and languages for blockchains.\_ He is a co-author of The Art of Multiprocessor Programming, and is a recipient of the 2022 Dijkstra Prize in Distributed Computing.\_ Before joining Algorand, he worked at Oracle Labs and Sun Labs, where he worked on concurrent algorithms and data structures for shared-memory multiprocessors and the Fortress programming language.\_ He has authored over 50 papers and holds more than 40 patents.\_ He received an Sc.D. in Computer Science from the Massachusetts Institute of Technology, with a dissertation on models for weakly consistent memories."
        headline: Speculative Smart Contracts in the Algorand Blockchain
        text: "The Algorand blockchain is a fast pure proof-of-stake blockchain with native (\"layer 1\") support for atomic transactions, user-defined assets, and smart contracts.\_ Layer-1 smart contracts are tightly constrained in both storage and execution to ensure that they do not unduly impact the overall performance of the blockchain.\_ To accommodate applications with greater storage and computation requirements, we propose\_*speculative smart contracts*, which maintain storage and execute contract calls off-chain and issue \"effects transactions\" that summarize the effects of the calls on the blockchain itself.\_ In this talk, we describe how to implement speculative smart contracts, and the features of the Algorand blockchain that we exploit, and some extensions that are required, to do so.\n\n"
      - imageSrc: >-
          https://res.cloudinary.com/protocolai/image/upload/v1651780872/consensus-factory/Sergio_Mena_no_background_c08yra.png
        name: Sergio Mena
        title: Informal Systems
        label: >-
          Sergio Mena obtained a PhD in Distributed Systems from EPFL
          (Switzerland) in 2006. Before, he followed EPFL's Graduate School in
          Computer Science programme in 2001, and finished MSc (1999) and BSc
          (1996) in Computer Engineering at the Technical University of Valencia
          (UPV, Spain). He worked as a teaching fellow at the University of York
          (UK), and as a software engineer at Cisco (~12 years), where he
          contributed to the research of congestion control algorithms.
          Currently, he works as a research engineer at Informal Systems. His
          research interests include fault-tolerant distributed systems, and
          congestion control for real time media.
        headline: "ABCI++:\_Evolving Tendermint’s Modularity"
        text: >+
          Application BlockChain Interface (ABCI) is the boundary between
          consensus and state machine replication (SMR) for Tendermint-based
          blockchains in Cosmos. ABCI was designed with the main goal of hiding
          the complexities of consensus to the SMR application developers. This
          led to a fool-proof interface where all the application is required to
          do is ensure deterministic execution in order to run on top of
          consensus.


          Over the years, the tradeoffs of such a simple, highly modular
          interface became evident. If ABCI could expose more elements of
          consensus execution, this would allow for a finer grained control of
          SMR applications, such as transaction reordering or improved validity
          checks. To overcome these limitations, a major evolution of ABCI,
          called ABCI++, has been introduced.


          ABCI++ increases the control an application developer has over
          executions of SMR. This increased control comes at the cost of an
          increased risk for the applications to accidentally affect core
          properties of consensus. In ABCI, the only risk was non-determinism in
          the application that could halt the chain. In ABCI++, buggy
          applications can lead to additional problems for consensus.


          In this talk we walk through the main innovations in ABCI++; we
          discuss the new use cases they enable, as well as the risks they
          introduce and how these risks are captured in the specification.

      - imageSrc: >-
          https://res.cloudinary.com/protocolai/image/upload/v1651787887/Nagel_osaria.png
        name: Sebastian Nagel
        title: Input Output (IOHK) Software Engineering Lead | Engineering
        label: >-
          Sebastian Nagel is an Austrian software engineer and functional
          programming enthusiast. He studied computer science and graduated from
          the Technical University of Munich with a master's degree in robotics,
          cognition and intelligence. Within the robotics industry, he got to
          know and love Haskell, formal methods, domain-specific languages, and
          interpreters. After several years creating robot programming
          languages, development platforms, and internet of things projects at
          Franka Emika, Sebastian joined IOHK in 2021. In his time off he
          usually roams the Alps climbing rock and ice.
        headline: 'Hydra: Next Generation State Channels'
        text: >
          Accommodating a growing number of participants and transactions is a
          problem in any distributed consensus system, and blockchains make no
          exception, especially as they are gaining attention from a wider
          audience.

          Hydra Head Protocol is a Layer 2 solution for (e)UTxO based
          distributed ledgers that is part of Cardano's strategy to accommodate
          this growth, allowing the creation of Isomorphic Multi-party State
          Channels between a limited set of participants.


          This talk reflects on our experience taking Hydra Head from a research
          paper to a production-ready system, over the past year and half.
      - imageSrc: >-
          https://res.cloudinary.com/protocolai/image/upload/v1652729448/consensus-factory/Alfonso_de_la_Rocha_IOHK_prxwmd.png
        name: Alfonso de la Rocha
        title: Protocol Labs | ConsensusLab
        label: >-
          Before joining Protocol Labs, Alfonso de la Rocha worked as a
          blockchain expert at Telefónica R&D, where he was responsible for the
          design and development of core technology based on blockchains,
          distributed systems, and advanced cryptography. Alfonso’s involvement
          in research and development began at Universidad Politécnica de
          Madrid, where he worked on topics related to energy efficiency in data
          centers. His broad R&D experience also includes research into the
          compression efficiency of video coding standards at Ericsson Research
          and projects related to securing interdomain routing protocols at KTH
          Royal Institute of Technology in Stockholm. Alfonso is also an avid
          reader and basketball lover.
        headline: 'Hierarchical consensus: A horizontal scaling framework for blockchains'
        text: >+
          We present the Filecoin Hierarchical Consensus framework, which aims
          to overcome the throughput challenges of blockchain consensus by
          horizontally scaling the network. Unlike traditional sharding designs,
          based on partitioning the state of the network, our solution centers
          on the concept of subnets –which are organized hierarchically– and can
          be spawned on-demand to manage new state. Child subnets are firewalled
          from parent subnets, have their own specific policies, and run a
          different consensus algorithm, increasing the network capacity and
          enabling new applications. Moreover, they benefit from the security of
          parent subnets by periodically checkpointing state. In this paper, we
          introduce the overall system architecture, our detailed designs for
          cross-net transaction handling, and the open questions that we are
          still exploring.

    _template: speakerCards
  - background:
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1651519685/consensus-factory/hero_bg_gocqtx.png
      position: object-center
      ornaments:
        - src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1651605746/consensus-factory/event-ornament-bottom_m9sjeg.svg
          alignment: bottom
          xOffset: '-600'
        - src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1651605750/consensus-factory/event-ornament-top_s0gkrv.svg
          alignment: top
          xOffset: '500'
    headline: Virtual Event Schedule
    subhead: ''
    items:
      - headline: Welcome to ConsensusFactory
        time: '13:00-13:20 '
        name: Marko Vukolić
      - headline: "ABCI++:\_Evolving Tendermint’s Modularity"
        time: '13:20-14:00'
        name: Sergio Mena
      - headline: >-
          Data availability commitments with distributed reconstruction thanks
          to 2d KZG commitments
        time: '14:00-14:40'
        name: Dankrad Feist
      - headline: 'Hydra: Next Generation State Channels'
        time: '14:50-15:30'
        name: Arnaud Bailly & Sebastian Nagel
      - headline: 'Hierarchical consensus: A horizontal scaling framework for blockchains'
        time: '15:30-16:10'
        name: Alfonso de la Rocha
      - headline: Speculative Smart Contracts in the Algorand Blockchain
        time: '16:20-17:00'
        name: Victor Luchangco
      - headline: Decentralised Reflections on Consensus
        time: '17:00-18:00'
        name: Q&A
    navigationLabel: ''
    _template: schedule
  - style:
      textAlignment: text-center
      minHeight: min-h-0
      padding: pt-20 pb-20 pr-10 pl-10
      width: normal
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-2 text-2xl mb-4 font-bold
      subheadStyles: 'text-black font-1 text-lg mb-3.5 '
      textStyles: 'text-black font-1 text-lg mb-8 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: ''
    subhead: ''
    body: |
      ConsensusFactory: Decentralized Reflections on Consensus

      ***
    buttons:
      - label: Register Here
        link: 'https://solarisevents.typeform.com/consensus'
        type: solid
        buttonFillStyles: bg-accent1
        textColor: white
        backgroundColor: primary
    _template: banner
meta:
  pageTitle: Consensus Factory
  pageDescription: Consensus Factory
---

