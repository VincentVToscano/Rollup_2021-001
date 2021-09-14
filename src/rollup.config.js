// rollup.config.js (building more than one bundle)
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser'; // https://github.com/terser/terser#minify-options
import scss from 'rollup-plugin-scss';
import commonjs from '@rollup/plugin-commonjs'; // convert CommonJS modules to ES6 => solve for Error: "[name] is not exported by [module]"
import babel from '@rollup/plugin-babel';

const production = process.env.BUILD === 'prod';
// console.log(process.env.TRANSFORM, production, process.env.INCLUDE_DEPS, process.env.BUILD)

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
			output: production === true ? `css/pages/min-${page}.css` : `css/pages/${page}.css`,
			sourceMap: true,
			...(production === true) && {outputStyle: 'compressed'},
		})
	]
}
