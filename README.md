# About

### Project description
- Biblios website. See it live at https://bibliosadventure.com
- Runs on Shopify

### Notable files/folders + file structure
- `/debut` -> the theme file. Similar to wordpress. This is the code that makes up the live website

# Set up

### Prerequisite software
1. Shopify theme-kit. For deployment and local development. https://shopify.dev/themes/tools/theme-kit
2. Node
3. NPM

### Configuration

1. `debut/config.yml` is essential for local development and deployment. See 1Password for the contents of the file.

### How to run locally
1. Open three terminal windows
    1. Run `dev/dev.sh` to compile the sass
    2. Run `dev/monitor.js` to watch the css file for changes
    3. From debut/ run `theme watch`
2. Start devving. Work from the scss files inside dev/style/sass. The content of the pages within dev/pages must be copied and pasted to the shopify admin for changes to take effect

### How to deploy
1. From debut/ run `theme watch` – WARNING: this will automatically deploy changes to the Biblios site.
2. The content of the pages within dev/pages must be copied and pasted to the shopify admin for changes to take effect.
