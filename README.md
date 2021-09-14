[![Vincent V. Toscano](http://vflux.biz/assets/imgs/global/VincentVToscanoTM2015_300x300.png)](http://vflux.biz)

# Rollup_2021-001
Explore Rollup.js

## Primary Objectives
1. ✓ Uses native JavaScript ES Modules (ES2015) over UMD, [CommonJS](https://en.wikipedia.org/wiki/CommonJS) and [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) based module systems like [RequireJS](https://requirejs.org/) 
2. ✓ Minifies of JavaScript
3. ✓ Minifies of CSS
4. ✓ Bundles JavaScript
5. ✓ Bundles CSS
6. ✓ Creates JavaScript Source Maps
7. ✓ Creates CSS Source Maps
8. ✓ Applies Tree-Shaking methodology to JavaScript
9. ✓ Can employ [Babel](https://babeljs.io/docs/en/babel-preset-env) to transform all ES2015-ES2020 code to be ES5 compatible
10. HTML templating (partials into whole pages) fueled by Markdown files (i.e.: static site generation)
11. Can be deployed and built (primarily or entirely) by GitHub or GitLab
12. ✓ Has a built-in web server or can be adapted to use a dev dependency
13. ✓ Can compile dev and production builds (or be asked to target something specific)
14. ✓ Can be run by CLI with an option to be scripted using Node.js for something complex
15. Has most of what is desired out-of-the-box 📦 and thus reduces the dependencies needed to compile the project
16. Can incorporate old style or top-level JavaScript libraries that cannot be rewritten to use ES modules (e.g.: jQuery)
17. ✓ Has [native file caching](https://github.com/rollup/rollup-watch/blob/80c921eb8e4854622b31c6ba81c88281897f92d1/src/index.js#L89) (no extra dependencies) to speed up build process
18. Can be extended per project requirements
19. Can transpile JSX, TypeScript, React, and Vue natively or with plug-in maintained by code runner
20. ✓ Can run processes in parallel
21. Has logging with level support
22. ✓ Config file accessible

## Bonus Capabilities, Configurations, and Goals
1. Can minify SVG and Bimap images
2. Can run preferred linters
3. Scope hoisting
4. Can be configured to ignore files as well as can be fed glob patterns
5. Can be configured to not perform tasking on a library
6. Can be setup to honor preferred directory structure or be altered easily on a per project basis
7. Can inject the contents of JavaScript and/or SVG files into HTML files. This will allow for the original file to be altered and the destination file to receive the update without copying and pasting upon when an edit is made (and developer won't have to remember to do so).
8. Can minify HTML files (often overlooked but not to be forgotten as an easy way to reduce markup language file size).  Thinking progressively, imagine a world where entire pages can be delivered to the client from a key/value store such as Redis (worked a solution a long time ago using this route which used a Redis cluster that was accessed via the backend using a reverse proxy)

---

## Install
#### Requirements:
- GNU/Linux, Unix, or macOS
- Rollup.js
- Node.js

##### Install:
```npm install```

---

## Build
### Build only:
```
npm run build  
npm run build-dev
```  

### Build & serve the website locally on the preview server with environment:
```
TBD
```

---

## Deploy & Test
Continuous integration and continuous delivery (CI/CD) pipeline has been established using GitLab.

The URLs are ready.
### On ***development*** branch
[Development](http://127.0.0.1:4000)

### On ***staging*** branch
TBD

### On ***master*** branch
TBD

---

## Troubleshooting
1. [Rollup.js](https://rollupjs.org/)
2. [Node.js](https://nodejs.org/)

