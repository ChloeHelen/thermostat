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
  });

  describe('#down', function() {
    it("Should decrease the temperature by 1", function () {
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(19);
    });
  });

});
