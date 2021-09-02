export default class TestEmitter {

	constructor(name, frequency) {
		this._name              = name;
		this._frequency         = frequency;
		this._console__style001 = [
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
		console.log(`%c${this._name} > Instantiated at a frequency of: ${this._frequency}`, this._console__style001);
		this._dom_obj = document.createElement("i");
		this._emit    = null;
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		if (newName) this._name = newName;
	}

	get frequency() {
		return this._frequency;
	}

	set frequency(newFreq) {
		if (newFreq) this._frequency = newFreq;
	}

	startBroadcast() {
		// return `%c${this._name} is working`;

		if (this._emit) {
			clearInterval(this._emit);
		}

		window.setInterval(() =>
			// v.evt.fire(this, 'vincent', {msg: `${this._name} > Broadcasting…`})
			console.log(`${this._name} > Broadcasting…`)
			, this._frequency);

	}

	addEventListener(listenerName, cb) {
		this._dom_obj.addEventListener(listenerName, cb);
	}

	dispatchEvent(event) {
		this._dom_obj.dispatchEvent(event);
	}
}