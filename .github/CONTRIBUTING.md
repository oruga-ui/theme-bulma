> Thanks for contributing!

# Raising an Issue

- Make sure the issue hasn't been raised yet
- Include **screenshots** or animated GIFs in your issue whenever needed (if visual issue)

# Submitting a Pull Request

- The current developed version is in the `main` branch. The theme does not have a dedicated `develop` branch
- Include **screenshots** or animated GIFs in your pull request whenever needed (if visual changes)
- It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging
- **DO NOT** commit the `dist` folder, use it only for testing on your end
- If adding new feature:
    - Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it

## Oruga Sass styleguide

- **Always on a separated file** in `/src/scss/components`
- **Use .scss extension**
- **Use kebab-case**

# Development Setup

You need at least [Node.js](http://nodejs.org/) **version 22**.
The local setup contains every example of the main Oruga documentation page.

After cloning the repository, install the dependencies:

```bash
$ npm install
```

## Link the main repo locally

To link the main Oruga packages locally, build both the `oruga` and the `examples` package in the Oruga repo.  
Then run `npm run link ../oruga/packages/oruga ../oruga/packages/examples` in the theme repo to link the build output of the main Oruga packages.

## Common NPM scripts

To compile the code in watch mode and run the live server on [http://localhost:5173](http://localhost:5173):

```bash
# start a local vite dev server
$ npm run dev
```

To build the code output run:

```bash
# build the package using vite
$ npm run build
```

To lint the code run:

```bash
# lint the js/ts/vue code
$ npm run lint

# lint the css/scss code
$ npm run lint:style
```
