# Questions and answers

## How to manage different React versions?

For client-side components that use React, there are several ways of handling different React versions.

1. Bundle in React to each microfrontend. This can be done by removing the importmap from the Shell and the externals 
in the microfrontneds Astro config. Keep in mind that this will increase your total bundle size.

2. Set the React version in the Shell's importmap and let it be valid for all microfrontends. I recommend doing this 
for minor and patch versions. In order to update major versions, the Shell can run on React 19 and also run microfrontends
that are transpiled with React 18. At some time, the team that owns the Shell has to tell the owners of the microfrontends 
to update major React versions. This way a major update can happen smoothly.

3. Though I have not tried this, it should be possible to use importmaps `scope` to manage different React versions.