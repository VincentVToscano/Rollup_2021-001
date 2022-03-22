/**
 * Evts --- A static class designed to make working with events more convenient
 * @author Vincent V. Toscano
 */
class Evts {
		static NAME = 'EVTS';
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
		 * add --- Add event handler to an element
		 * @param el DOM element event to attach event to
		 * @param type A case-sensitive string representing the event type to listen for.
		 * @param listener The object that receives a notification (an object that implements the Event interface) when an event of the specified type occurs. This must be an object implementing the EventListener interface, or a JavaScript function. See The event listener callback for details on the callback itself.
		 * @param options Pass true if you'd like it to bubble, useCapture (passiveSupported ? { passive: true } : false), or other options as detailed here: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
		 * @example
		 * Evts.add(history_section.spin_button, 'mousedown', onSpin);
		 */
		static add(el, type, listener, options = false) {
				el.addEventListener(type, listener, options);
		}

		/**
		 * addMultiple --- Add multiple event handlers to an element
		 * @param el DOM element event to attach event to
		 * @param evts An Array of events to attach to DOM element
		 * @param listener The object that receives a notification (an object that implements the Event interface) when an event of the specified type occurs. This must be an object implementing the EventListener interface, or a JavaScript function. See The event listener callback for details on the callback itself.
		 * @param options Pass true if you'd like it to bubble, useCapture (passiveSupported ? { passive: true } : false), or other options as detailed here: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
		 * @example
		 * Evts.addMultiple(history_section.timelineOnBottom, ['mouseover', 'mousedown', 'mouseout', 'mouseleave'], onTimelineDot, true);
		 */
		static addMultiple(el, evts, listener, options = false) {
				evts.forEach(e => el.addEventListener(e, listener, options));
		}

		/**
		 * rm --- Remove an event handler from an element
		 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
		 * @param type A string which specifies the type of event for which to remove an event listener.
		 * @param listener The EventListener function of the event handler to remove from the event target.
		 * @param options An options object that specifies characteristics about the event listener.
		 * @example
		 * Evts.rm(history_section.spin_button, 'mousedown', onSpin);
		 */
		static rm(el, type, listener, options = false) {
				el.removeEventListener(type, listener, options);
		}

		/**
		 * fire --- Fire a custom event
		 * @param el DOM element event to fire event from
		 * @param typeArg A string representing the name of the event.
		 * @param obj Send a custom object or pass "detail", optional and defaulting to null, of any type, containing an event-dependent value associated with the event. This is available to the handler using the CustomEvent.detail property.
		 * @returns {boolean|*}
		 * @example
		 * Evts.fire(mapbox_map, ProjectEvts.ON_MAP_BLADE_NAVIGATE, {
		 *  direction: "Down",
		 *  autoplay: true
		 * })
		 */
		static fire(el, type, obj) {
				return el.dispatchEvent(new CustomEvent(type,
						...(obj) && obj
				));
		}

		/**
		 * Class static initialization block
		 */
		static {
				console.log(`%cEVTS > Initialization block called`, this.console__style000);
		}
}

export default Evts;
