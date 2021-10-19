# Microgen Tina

This Next.js site is powered by [TinaCMS](https://app.tina.io).

## Requirements

- Git, [Node.js Active LTS](https://nodejs.org/en/about/releases/), Yarn installed for local development.
- A [TinaCMS](https://app.tina.io) account for live editing.
- A [Cloudinary](https://cloudinary.com) account for media support. (This will go away)

## Local development

Install the project's dependencies:

```
yarn install
```

Run the project locally:

```
yarn dev
```

### Local URLs

- http://localhost:3000 : browse the website 
- http://localhost:3000/admin : connect to Tina Cloud and go in edit mode
- http://localhost:3000/exit-admin : log out of Tina Cloud
- http://localhost:4001/altair/ : GraphQL playground to test queries and browse the API documentation

## Getting Help

TinaCMS backend is in public beta, you might face issues, to provide feedback or get help with any challenges you may have:

-   Visit the [documentation](https://tina.io/docs/) to learn about Tina.
-   [Join our Discord](https://discord.gg/zumN63Ybpf) to share feedback.
-   Visit the [community forum](https://community.tinacms.org/) to ask questions.
-   Get support through the chat widget on the TinaCMS Dashboard
-   [Email us](mailto:support@tina.io) to schedule a call with our team and share more about your context and what you're trying to achieve.
-   [Search or open an issue](https://github.com/tinacms/tinacms/issues) if something is not working.
-   Reach out on Twitter at [@tina_cms](https://twitter.com/tina_cms).

## Development tips

### Visual Studio Code GraphQL extension

[Install the GraphQL extension](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql) to benefit from type auto-completion.

### Typescript

A good way to ensure your components match the shape of your data is to leverage the auto-generated TypeScript types.
These are rebuilt when your `.tina` config changes.
