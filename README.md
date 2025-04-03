# astro-microfrontends-server-islands

This demo takes advantage of Server Islands to do server-side composition of microfrontends. Each microfrontend is server-side rendered
and fetches data from an external API. Client-side React components are supported in both the shell and in app-a.

## Features

- ✨ Server-side rendering of microfrontends
- 📦 Multiframeworks with Astro Server Islands
- 🚀 SSG/SSR supported by Astro

## Usage

### Microfrontends

- Install dependencies with `npm install`
- Build each microfrontend with `npm run build`
- Start each micro frontend with `npm run preview`

### Shell

- Install dependencies with `npm run install`
- Build the shell with `npm run build`
- Start the shell with `npm run preview`

## Disclaimer

In order to run the apps locally with `npm run preview`, the CDN that hosts the assets for app-a is mocked. Make sure to run
`npm run cdn` when you start that app. For production, I'd recommend to host the assets on a real CDN.
