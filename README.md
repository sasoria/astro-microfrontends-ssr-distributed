# astro-microfrontends-ssr-distributed

This demo takes advantage of Server Islands to do server-side composition of microfrontends. Each microfrontend is 
server-side rendered and fetches data from an external API. Client-side React components are supported in both the shell 
and in app-a.

## Features

- ✨ Server-side rendering of microfrontends with Astro
- 📦 Server-side composition of microfrontends with Server Islands
- 🚀 Excellent performance and next to zero complexity

## Usage

### Microfrontends

- Build each microfrontend with `npm run build`
- Start each micro frontend with `npm run preview`

### Shell

- Build the shell with `npm run build`
- Start the shell with `npm run preview`

## Shared dependencies
Dependencies for client-side rendered components such as react and react-dom are shared across applications. They are 
fetched from esm.sh and cached in the browser, reducing the bundle size. Each app can share other dependencies as well.

## Disclaimer

In order to run the apps locally with `npm run preview`, the CDN that hosts the assets for app-a is mocked. Make sure to run
`npm run cdn` when you start that app. For production, I'd recommend to host the assets on a real CDN.

<!-- Tentative resources: https://newsletter.astroweekly.dev/p/astro-weekly-78 -->