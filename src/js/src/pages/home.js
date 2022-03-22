'use strict';
import '../../../css/src/pages/home.scss';
import Logger from "../utilities/Logger";
import Elements from "../utilities/Elements";
import Evts from "../utilities/Evts";
import TestEmitter from '../emitters/TestEmitter.mjs';
import Lottie from "lottie-web"; // https://github.com/airbnb/lottie-web
import '../libs/SwipeSensor001';

window.app = function () {
	const NAME      = 'VVT';
	const PAGE_NAME = 'home';
	const swipe     = new SwipeSensor001();
	const bdy       = document.body;
	let test_emit   = null;
	const cp_cta_mail       = new Lottie.loadAnimation({
			wrapper: Elements.id('hero_email_cta_ani'),
			animType: 'svg',
			loop: false,
			autoplay: false,
			animationData: {"v":"5.7.4","fr":60,"ip":0,"op":40,"w":100,"h":94,"nm":"GD_envelope-001","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"paper line","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":8,"s":[0]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.05],"y":[0]},"t":10,"s":[100]},{"i":{"x":[0],"y":[1]},"o":{"x":[0.05],"y":[0]},"t":15,"s":[100]},{"t":20,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.05,"y":0},"t":10,"s":[50,48,0],"to":[0,-0.667,0],"ti":[0,0.667,0]},{"t":20,"s":[50,44,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-40,-15],[43,-15]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":40,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"paper up","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.67],"y":[1]},"o":{"x":[0.75],"y":[0]},"t":15,"s":[0]},{"t":20,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50,47.75,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[105.457,105.457,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-8.75,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0],[8.75,0],[0,0],[0,0]],"v":[[43.75,-30.5],[-43.25,-30.5],[-43.25,-14],[-13.75,12.562],[0.5,5.25],[15,12.75],[43.75,-12.75]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":9,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0.258823529412,0.286274509804,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[87.454,82.448],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":40,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"envelope closed2 Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.67],"y":[1]},"o":{"x":[0.75],"y":[0]},"t":0,"s":[100]},{"t":10,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50,59,0],"ix":2,"l":2},"a":{"a":0,"k":[50,50,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.823,0.199],[0,0],[0,0],[-3.389,0],[-3.294,2.803],[0,0],[0,0]],"o":[[0,0],[0,0],[3.26,2.803],[3.387,0],[0,0],[0,0],[-0.835,0.201]],"v":[[-34.779,26.018],[-11.707,5.027],[-9.757,6.609],[0.033,10.585],[9.786,6.609],[11.679,5.033],[34.945,26.143]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[18.38,0.466],[42.155,-20.437],[42.155,22.7]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-42.16,-20.437],[-18.386,0.466],[-41.937,22.493]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[1.993,1.6],[0,0],[-0.518,0.013],[-0.428,-0.01],[0,0],[1.77,0]],"o":[[0,0],[0.384,-0.102],[0,0],[0,0],[-1.946,1.65],[-1.77,0]],"v":[[-5.454,1.501],[-37.079,-26.359],[-35.747,-26.529],[37.258,-26.529],[5.413,1.501],[0.033,3.885]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[-9.73,0],[0,0],[0,8.161],[0,0],[9.672,0],[0,0],[0,-8.161],[0,0]],"o":[[0,0],[8.124,0],[0,0],[0,-8.161],[0,0],[-8.183,0],[0,0],[0,8.161]],"v":[[-35.407,33.148],[37.008,33.148],[49.997,20.962],[49.997,-20.963],[35.402,-33.148],[-37.013,-33.148],[-50.003,-20.963],[-50.003,20.962]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[49.997,52.216],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":9,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":40,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"envelope open2 Outlines","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.67],"y":[1]},"o":{"x":[0.75],"y":[0]},"t":0,"s":[0]},{"t":10,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50,48,0],"ix":2,"l":2},"a":{"a":0,"k":[50,50,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-1.84,0],[-1.946,-1.786],[0,0],[0,0]],"o":[[1.993,-1.818],[1.841,0],[0,0],[0,0],[0,0]],"v":[[-5.451,13.505],[0.035,10.933],[5.416,13.505],[34.947,40.301],[-34.947,40.301]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[0.296,-0.831],[0,0],[0,0]],"o":[[0.033,0.872],[0,0],[0,0],[0,0]],"v":[[42.157,34.285],[41.759,36.858],[17.773,15.184],[42.157,-7.145]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[-0.03,0.88],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[-0.272,-0.844]],"v":[[-42.157,34.285],[-42.157,-7.145],[-17.772,15.184],[-41.793,36.889]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ind":3,"ty":"sh","ix":4,"ks":{"a":0,"k":{"i":[[0,0],[-1.782,0],[-2.228,-1.69],[0,0],[0,0],[0,0],[3.318,0],[3.259,-2.991],[0,0],[0,0]],"o":[[2.298,-1.69],[1.782,0],[0,0],[0,0],[0,0],[-3.271,-2.991],[-3.318,0],[0,0],[0,0],[0,0]],"v":[[-5.24,-37.406],[-0.023,-39.967],[5.182,-37.438],[38.382,-13.398],[12.45,10.352],[9.789,7.931],[0.059,3.68],[-9.73,7.931],[-12.485,10.352],[-38.382,-13.398]],"c":true},"ix":2},"nm":"Path 4","mn":"ADBE Vector Shape - Group","hd":false},{"ind":4,"ty":"sh","ix":5,"ks":{"a":0,"k":{"i":[[-9.731,0],[0,0],[0,8.824],[0,0],[3.997,2.938],[0,0],[3.434,0],[3.552,-2.733],[0,0],[0,-5.833],[0,0]],"o":[[0,0],[9.672,0],[0,0],[0,-5.833],[0,0],[-3.516,-2.69],[-3.435,0],[0,0],[-4.068,2.938],[0,0],[0,8.81]],"v":[[-35.404,47.5],[35.404,47.5],[50,34.264],[50,-6.037],[44.514,-17.703],[9.707,-43.196],[-0.023,-47.5],[-9.707,-43.196],[-44.502,-17.703],[-50,-6.037],[-50,34.285]],"c":true},"ix":2},"nm":"Path 5","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[50,48.797],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":9,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":40,"st":0,"bm":0}],"markers":[]}
		});


	/**
	 *  boot --- Boot the product or webpage
	 */
	function boot() {
		Logger.log(`${NAME} > ${PAGE_NAME} > boot12`);
		init();
	}

	/**
	 *  init --- Initialize the product or webpage
	 */
	function init() {
		Logger.log(`${NAME} > ${PAGE_NAME} > init`);
		app.test_emit                             = new TestEmitter('BROADCASTER_001', 400);
		Elements.id('content_aside').style.backgroundColor = 'pink';
		swipe.powerUp(Elements.id('hero'));
		addHandlers();
	}

	function addHandlers() {
		Evts.addMultiple(Elements.id('hero'), ['mouseover', 'mouseout'], onContact, true);
		Evts.add(bdy, swipe.EVT_ON_SWIPE_LEFT, onSwipe);
		Evts.add(bdy, swipe.EVT_ON_SWIPE_RIGHT, onSwipe);

	}

	function onContact(evt) {
		let target = evt.target;

		if (target && target.nodeName === "A") {
			let classes = target.className.split(" ");
			if (classes) {
				for (let x = 0; x < classes.length; x++) {
					switch (classes[x]) {
						case "global-cta--dark-3":
							switch (evt.type) {
								case 'mouseover':
									// first frame: cp_cta_mail.goToAndStop(0, true);
									// last frame: cp_cta_mail.goToAndStop(cp_cta_mail.totalFrames-1,true);
									cp_cta_mail.setDirection(1);
									cp_cta_mail.play();
									break;
								case 'mouseout':
									cp_cta_mail.setDirection(-1);
									cp_cta_mail.play();
									break;
							}
							break;
					}
				}
			}
		}
	}

	function onSwipe(evt) {
		Logger.log(`${NAME} > ${PAGE_NAME} > onSwipe`);

		switch (evt.type) {
			case swipe.EVT_ON_SWIPE_LEFT:
				Logger.log(`${NAME} > ${PAGE_NAME} > onSwipe > ${evt.type}`);
				break;
			case swipe.EVT_ON_SWIPE_RIGHT:
				Logger.log(`${NAME} > ${PAGE_NAME} > onSwipe > ${evt.type}`);
				break;
		}
	}
	boot();
}


window.onload = window.app;
