describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('#temperature', function() {
    it("Should have an initial temperature of 20 degrees", function () {
      expect(thermostat.getTemperature()).toEqual(20);
    });
  });

  describe('#up', function() {
    it("Should increase the temperature by 1", function () {
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(21);
    });
    it("Should not increase past 25 when in power saving", function () {
      thermostat.temperature = thermostat.POWER_SAVING_MAX_TEMP;
      expect(function(){thermostat.up()}).toThrowError("At maximum for this mode");
    });
  });

  describe('#down', function() {
    it("Should decrease the temperature by 1", function () {
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(19);
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


});
