function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSaving = true;
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

Thermostat.prototype.swapPowerSaving = function() {
  if (this.powerSaving) {
    this.powerSaving = false;
  } else {
    this.powerSaving = true;
  }
};

// Thermostat.prototype.switchPowerSaving = function() {
//   if this.powerSaving {
//     this.powerSaving = false;
//   } else {
//     this.powerSaving = true;
//   }
// };
