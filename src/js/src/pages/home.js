import TestEmitter from '../emitters/TestEmitter.mjs';

window.app = {
	NAME: 'VVT',
	PAGE_NAME: 'home',
	console__style001: [
		'background: linear-gradient(orange, white)'
		, 'color: black'
		, 'display: block'
		, 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
		, 'text-align: left'
		, 'font-weight: bold'
		, 'padding:3px 5px'
		, 'letter-spacing: 0.4em'
		, 'font: bold normal normal 14px\/normal \"Helvetica Black\", \"Helvetica Neue\", Roboto, Arial, Helvetica, sans-serif'
	].join(';'),
	test_emit: null,
	/**
	 * Global Utilities
	 * These utilities will be available application-wide
	 */
	utilities: {
		el: null,
		evt: null,
		log: null,
		str: null
	},
	/**
	 *  boot --- Boot the product or webpage
	 */
	boot: () => {
		console.log(`%c ${app.NAME} > ${app.PAGE_NAME} > boot`, app.console__style001);
		window.v = window.app.utilities;
		app.init();

	},
	/**
	 *  init --- Initialize the product or webpage
	 */
	init: () => {
		console.log(`%c ${app.NAME} > ${app.PAGE_NAME} > init`, app.console__style001);
		app.test_emit = new TestEmitter('BROADCASTER_001', 400);
	}
};

window.onload = window.app.boot;
