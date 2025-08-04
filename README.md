# Nuxt Minimal Starter

Nuxt 4 minimal starter optimized for developer experience and current best practices.

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

Project originally created using:

```bash
pnpm create nuxt@latest nuxt-4-starter
```

Only module selected during installation was `@nuxt/eslint`.

Recommended VSCode extensions:

- Vue (Official)
- Vue VSCode Snippets
- ESLint

Make sure that:

- VScode extension Vetur -> Disabled (Workspace)
- VScode extension Vue VSCode Snippets -> Enable (Workspace)

## Prerequisites

- Node.js 22.18.0 (the active LTS release at the time of project creation)
- pnpm@10.14.0

## Setup

Install the required node version.

`nvm` is recommended for managing Node versions.

Enable `corepack`:

```bash
corepack enable
```

## Run locally

1. You need to install Node.js, as well as enable corepack to install pnpm.
1. Clone this repo via `git clone`
1. Run `pnpm i` to install the dependencies
1. Run `pnpm dev` to start the local Nuxt dev server

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
