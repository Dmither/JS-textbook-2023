function Auto(brand, price, gas) {
	this.brand = brand;
	this.price = price;
	this.gas = gas;
}

Auto.prototype.drive = function () {
	if (this.gas > 0) {
		this.gas -= 20;
		return this.gas;
	} else {
		return "can't drive";
	}
};

const bmw = new Auto("BMW", "100,000", 100);
const nissan = new Auto("Nissan", "100,000", 100);

// ===================================================================