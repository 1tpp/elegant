# Monorepo for Elegant Projects

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

#### `/apps`

- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `api`: a api server using [express](https://expressjs.com/) and [TypeScript](https://www.typescriptlang.org/)

#### `/packages`

- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `eslint-config-custom-server`: `eslint` configurations for server-side code (includes `eslint-config` and `jest`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `jest-presets`: `jest` presets used throughout the monorepo
- `tailwind-config`: `tailwind.config.js` used throughout the monorepo
- `logger`: a logger package used throughout the monorepo
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `web` and `docs` applications

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

# Getting Started

## Prerequisites

- [yarn](https://yarnpkg.com/) (>= 1.22.0)
- [Node.js](https://nodejs.org/en/) (>= 18.0.0)

## Installation

```bash
pnpm install
```

## Running the development server

```bash
pnpm dev
```

## Build for production

```bash
pnpm build
```

## Running with docker compose

```bash
# create network
docker network create -d bridge elegant_network
docker-compose up
```
