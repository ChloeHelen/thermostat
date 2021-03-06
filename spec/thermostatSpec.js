describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('#temperature', function() {
    it("Should have an initial temperature of 20 degrees", function () {
      expect(thermostat.getTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });
  });

  describe('#up', function() {
    it("Should increase the temperature by 1", function () {
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE + 1);
    });
    it("Should not increase past 25 when in power saving", function () {
      thermostat.temperature = thermostat.POWER_SAVING_MAX_TEMP;
      expect(function(){thermostat.up()}).toThrowError("At maximum for this mode");
    });
    it("Should not increase past 35 when not power saving", function () {
      thermostat.temperature = thermostat.MAX_TEMP;
      thermostat.powerSaving = false;
      expect(function(){thermostat.up()}).toThrowError("At maximum");
    });
  });

  describe('#down', function() {
    it("Should decrease the temperature by 1", function () {
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE - 1);
    });
    it("Will not decrease past minimum temperature", function () {
      thermostat.temperature = thermostat.MINIMUM_TEMPERATURE;
      expect(function(){thermostat.down()}).toThrowError("At minimum");
    });
  });

  describe('#powerSaving', function() {
    it("Should be on by default", function () {
      expect(thermostat.powerSaving).toEqual(true);
    });
    it("Can change between on and off", function () {
      thermostat.swapPowerSaving();
      expect(thermostat.powerSaving).toEqual(false);
    });
    it("Can change between on and off", function () {
      thermostat.swapPowerSaving();
      thermostat.swapPowerSaving();
      expect(thermostat.powerSaving).toEqual(true);
    });
  });

  describe('#reset', function() {
    it("Should restore the temperature to default", function () {
      thermostat.temperature = 25
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });
  });

  describe('#usage', function() {
    it("Should return low when temperature is less than 18", function() {
      thermostat.temperature = 17
      expect(thermostat.usage()).toEqual("low");
    });
    it("Should return medium when temperature is between 18 and 25", function() {
      thermostat.temperature = 19
      expect(thermostat.usage()).toEqual("medium");
    });
    it("Should return high when temperature is greater than 25", function() {
      thermostat.temperature = 26
      expect(thermostat.usage()).toEqual("high");
    });
  });

// < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.

});
