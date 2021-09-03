// rollup.config.js (building more than one bundle)
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';

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
			resolve(),                      // Resolve bare module specifiers to relative paths
			production && terser({  // Minify JS
				ecma: 2020,
				module: true,
				warnings: true,
			}),
			scss({
				output: production === true ? 'css/pages/min-home.css' : 'css/pages/home.css',
				sourceMap: true
			})
		]
	}
];
