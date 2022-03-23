// rollup.config.js (building more than one bundle)
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser'; // https://github.com/terser/terser#minify-options
import scss from 'rollup-plugin-scss';
import commonjs from '@rollup/plugin-commonjs'; // convert CommonJS modules to ES6 => solve for Error: "[name] is not exported by [module]"
import babel from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'; // https://www.npmjs.com/package/rollup-plugin-serve
import livereload from 'rollup-plugin-livereload'; // https://github.com/thgh/rollup-plugin-livereload & https://www.npmjs.com/package/livereload - JS Object with options towards bottom

const production    = process.env.BUILD === 'production'; // console.log(process.env.TRANSFORM, production, process.env.INCLUDE_DEPS, process.env.BUILD)
const pages         = new Set(['home', 'home', 'about']);
const pages_cleaned = Array.from(pages);
const max           = pages_cleaned.length;
for (let i = 0; i < max; i++) {
	pages_cleaned[i] = {
		input: `js/src/pages/${pages_cleaned[i]}.js`,
		output: {
			file: production === true ? `js/pages/min-${pages_cleaned[i]}.js` : `js/pages/${pages_cleaned[i]}.js`,
			format: 'es',
			sourcemap: true
		},
		plugins: getPlugins(pages_cleaned[i])
	};
}
// console.log(pages, pages_cleaned);

/**
 * @type {import('rollup').RollupOptions}
 */
export default [
	{
		input: 'js/src/pages/home.js',
		output: {
			file: production === true ? 'js/pages/min-home.js' : 'js/pages/home.js',
			format: 'es',
			sourcemap: true
		},
		plugins: getPlugins('home')
	}
];

/**
 * getPlugins --- Return global plugins Array and customize for each bundle
 * @param page  Page name
 * @returns {(Plugin|false|"")[]}
 */
function getPlugins(page) {
	return [
		resolve(),  // Resolve dependencies installed via NPM (stored in the node_modules directory)
		commonjs(), // https://github.com/rollup/plugins/tree/master/packages/commonjs#custom-named-exports
		production && terser({  // Minify JS
			compress: {
				keep_fargs: false
			},
			ecma: 2020,
			module: true,
			warnings: true,
		}),
		process.env.TRANSFORM && babel({ // https://github.com/rollup/plugins/tree/master/packages/babel
			babelHelpers: 'bundled',
			exclude: 'node_modules/**',
			babelrc: true
		}),
		scss({
			sourceMap: true,
			watch: ['css/src'],
			...(production === true) && {outputStyle: 'compressed'},
			output: production === true ? `css/pages/min-${page}.css` : `css/pages/${page}.css`,
			// Callback that will be called ongenerate with two arguments:
			// - styles: the contents of all style tags combined: 'body { color: green }'
			// - styleNodes: an array of style objects: { filename: 'body { ... }' }
			/*output: function (styles, styleNodes) {
				console.log(styles, styleNodes);
				// writeFileSync('bundle.css', styles);
			},*/
		}),
		process.env.SERVE && serve({
				port: 1000
			}
		),
		process.env.SERVE && livereload({
			port: 1001
			// exts:['png']
		})
	]
}
