function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
  this.MINIMUM_TEMPERATURE = 10;
  this.POWER_SAVING_MAX_TEMP = 25;
  this.MAX_TEMP = 32;
}

Thermostat.prototype.getTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.powerSaving && this.temperature >= this.POWER_SAVING_MAX_TEMP) {
    throw new Error("At maximum for this mode");
  } else if (!this.powerSaving && this.temperature >= this.MAX_TEMP) {
    throw new Error("At maximum");
  } else {
    this.temperature++;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature <= this.MINIMUM_TEMPERATURE) {
    throw new Error("At minimum");
  } else {
    this.temperature--;
  }
};

Thermostat.prototype.swapPowerSaving = function() {
  if (this.powerSaving) {
    this.powerSaving = false;
  } else {
    this.powerSaving = true;
  }
};
