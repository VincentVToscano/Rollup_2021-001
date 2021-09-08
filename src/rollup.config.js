// rollup.config.js (building more than one bundle)
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';
import commonjs from '@rollup/plugin-commonjs'; // convert CommonJS modules to ES6 => solve for Error: "[name] is not exported by [module]"

const production = process.env.BUILD === 'production';
// console.log(production, process.env.INCLUDE_DEPS, process.env.BUILD)
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
		plugins: [
			resolve(),  // Resolve dependencies installed via NPM (stored in the node_modules directory)
			commonjs(), // https://github.com/rollup/plugins/tree/master/packages/commonjs#custom-named-exports
			production && terser({  // Minify JS
				ecma: 2020,
				module: true,
				warnings: true,
			}),
			scss({
				output: production === true ? 'css/pages/min-home.css' : 'css/pages/home.css',
				sourceMap: true,
				...(production === true) && {outputStyle: 'compressed'},
			})
		]
	}
];
