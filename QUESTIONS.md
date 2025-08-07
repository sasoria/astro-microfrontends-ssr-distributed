# Questions and answers

## Can the microfrontends run on different React versions?

Yes, this is possible for client-side components that use React by bundling in React to each microfrontend. This can be done 
by removing the importmap from the Shell and the externals in the microfrontneds Astro config. Keep in mind that this 
will increase your total bundle size.

## How do I manage version updates on React?

Set the React version in the Shell's importmap and let it be valid for all microfrontends. I recommend doing this 
for minor and patch versions.

In order to update major versions, the Shell can run on, say, React 19 and also run microfrontends that are transpiled
with React 18. 

At some point, the team that owns the Shell has to tell the owners of the microfrontends to update major React versions. 
This way a major update can happen smoothly.

## Can I use scope to isolate React versions?

Although I have not tried this, it should be possible to use importmaps [scope](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap#scoped_module_specifier_maps)
to manage different React versions.