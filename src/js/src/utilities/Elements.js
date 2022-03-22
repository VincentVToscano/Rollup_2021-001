/**
 * Evts --- A static class designed to make working with elements more convenient
 * @author Vincent V. Toscano
 */
class Elements {
		static NAME = 'ELEMENTS';
		static console__style000 = [
				'background: linear-gradient(#0013a8, orange)'
				, 'color: white'
				, 'display: block'
				, 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
				, 'text-align: left'
				, 'font-weight: bold'
				, 'padding:3px 5px'
				, 'font: bold normal normal 14px\/normal \"Helvetica Black\", \"Helvetica Neue\", Roboto, Arial, Helvetica, sans-serif'
		].join(';');

		/**
		 * id --- Grab element by ID.
		 * @param id The ID of the element
		 * @example
		 * 	Elements.id('mobile-muti_txt')
		 * @returns {HTMLElement}
		 */
		static id(id) {
				return document.getElementById(id);
		}

		/**
		 * createElementPro --- This creates an element of your choosing, sets supplied attributes, and returns the element
		 * @param element
		 * @param attrs
		 * @example
		 * element.appendChild(createElementPro('span', {
		 * 				style: 'background-image: url("' + window.app.uri_assets_imgs + 'global/cta_arrow_42x15-green-and-ffffff-on-trans.svg")',
		 * 				alt: '',
		 * 				class: 'story-article__link-img'
		 * 			}));
		 * @returns {*}
		 */
		static createElementPro(element, attrs) {
				const el = document.createElement(element);
				for (let i in attrs) {
						const aria_match = i.search(/aria/i);
						if (aria_match > -1) {
								// console.log(NAME + ' > createElementPro > found aria substring at:',aria_match);
								el.setAttribute(i.replace(/_/g, '-'), attrs[i]);
						} else {
								el.setAttribute(i, attrs[i]);
						}

				}
				return el;
		}

		/**
		 * setTranslate3D --- Translate3D utility
		 * @param el - Element to apply transform on.
		 * @param xPos X-axis
		 * @param yPos Y- axis
		 * @param zPos Z-axis
		 * @example
		 * setTranslate3D(feat_articles_carousel, `${h2_distanceToLeft}px`, 0);
		 */
		static setTranslate3D(el, xPos, yPos, zPos = 0) {
				let trans = `translate3d(${xPos}, ${yPos}, ${zPos})`;
				let styles;
				if (yPos === 0) {
						styles = `
			    opacity:1;
			    transform:` + trans;
				} else {
						styles = `
			    opacity:.5;
			    transform:` + trans;
				}
				el.style = styles;
		}

		/**
		 * Class static initialization block
		 */
		static {
				console.log(`%cELEMENTS > Initialization block called`, this.console__style000);
		}
}

export default Elements;
