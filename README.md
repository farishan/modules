# Modules

A collection of JavaScript modules.

## About

I always start developing a game from scratch and rewrite everything for new projects, which I never finish. The goal of this repository is to contain all my unfinished project modules, so I can track which modules are rewritten frequently.

## How to test a module

Every module should contains:

1. `index.html` file with a script tag pointed to `out.js`
2. `main.js` file importing the module `index.js` file
3. some testing scripts

Then you can:
- Run `npx esbuild MODULE_DIR/main.js --outfile=MODULE_DIR/out.js --bundle --sourcemap`
- Open `MODULE_DIR/index.html`
