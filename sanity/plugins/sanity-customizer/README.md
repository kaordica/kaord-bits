# Sanity customizer plugin

This plugin changes the Sanity studio logo, overrides CSS variables on color and creates a "guide" tool that can be used to host PDFs, videos and written guides for clients.

How to use it:

1. Change `Logo.jsx` to include the svg for the client's logo;
2. update the variables in `variableOverrides.css` (as of now, I've only found it useful to change `--brand-primary`, but you can take a look at all the variables you can change [here](https://github.com/sanity-io/sanity/tree/master/packages/%40sanity/base/src/styles/variables))
3. If you'll use the GuideTool, change its content, as of now it contains an example that uses an embed PDF.