/**
 * Evts --- A static class for centralized logging management
 * TODO: Create additional formatting and log level options.
 * @author Vincent V. Toscano
 */
class Logger {
		static NAME = 'LOGGER';
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
		static console__style001 = [
				'background: linear-gradient(#0013a8, #000c69)'
				, 'border: 1px solid #3E0E02'
				, 'color: white'
				, 'display: block'
				, 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
				, 'text-align: left'
				, 'font-weight: bold'
				, 'padding:3px 5px'
				, 'font: bold normal normal 16px\/normal \"Helvetica Black\", \"Helvetica Neue\", Roboto, Arial, Helvetica, sans-serif'
		].join(';');

		static log(message, ...args) {
				console.log("%c" + message, this.console__style001, ...args);
		}

		/**
		 * Class static initialization block
		 */
		static {
				console.log(`%cLOGGER > Initialization block called`, this.console__style000);
		}
}
export default Logger;
