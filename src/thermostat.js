function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10
}

Thermostat.prototype.getTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  this.temperature++;
};

Thermostat.prototype.down = function() {
  if (this.temperature <= this.MINIMUM_TEMPERATURE) {
    throw new Error("At minimum");
  } else {
    this.temperature--;
  }
};
