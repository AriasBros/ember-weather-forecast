import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  date: DS.attr("date"),
  name: DS.attr("string"),
  description: DS.attr("string"),
  icon: DS.attr("string"),

  temperature: DS.attr("number"),
  temperatureMin: DS.attr("number"),
  temperatureMax: DS.attr("number"),

  pressure: DS.attr("number"),
  pressureOnSeaLevel: DS.attr("number"),
  pressureOnGroundLevel: DS.attr("number"),

  humidity: DS.attr("number"),
  cloudiness: DS.attr("number"),

  windSpeed: DS.attr("number"),
  windDirection: DS.attr("number"),

  rainVolume: DS.attr("number"),
  snowVolume: DS.attr("number"),

  temperatureRounded: computed("temperature", function () {
    return Math.round(this.get("temperature"));
  }),

  dayIndex: computed("date", function() {
    const date = this.get("date");
    return moment(date).format("E");
  }),

  dayName: computed("date", function() {
    const date = this.get("date");
    return moment(date).format("dddd").capitalize();
  }),

  hour: computed("date", function () {
    return parseInt(moment(this.get("date")).format("h"));
  }),

  dateFormatted: computed("date", function () {
    const date = this.get("date");
    return moment(date).format("ddd, h:mm A").capitalize();
  }),

  windSpeedInKmH: computed("windSpeed", function () {
    return Math.round(this.get("windSpeed") * 3.6);
  }),

  windDirectionInCompass: computed("windDirection", function () {
    const degrees = this.get("windDirection");

    if (degrees >= 348.75 && degrees <= 11.25) {
      return "N";
    } else if (degrees >= 11.25 && degrees <= 33.75) {
      return "NNE";
    } else if (degrees >= 33.75 && degrees <= 56.25) {
      return "NE";
    } else if (degrees >= 56.25 && degrees <= 78.75) {
      return "ENE";
    } else if (degrees >= 78.75 && degrees <= 101.25) {
      return "E";
    } else if (degrees >= 101.25 && degrees <= 123.75) {
      return "ESE";
    } else if (degrees >= 123.75 && degrees <= 146.25) {
      return "SE";
    } else if (degrees >= 146.25 && degrees <= 168.75) {
      return "SSE";
    } else if (degrees >= 168.75 && degrees <= 191.25) {
      return "S";
    } else if (degrees >= 191.25 && degrees <= 213.75) {
      return "SSW";
    } else if (degrees >= 213.75 && degrees <= 236.25) {
      return "SW";
    } else if (degrees >= 236.25 && degrees <= 258.75) {
      return "WSW";
    } else if (degrees >= 258.75 && degrees <= 281.25) {
      return "W";
    } else if (degrees >= 281.25 && degrees <= 303.75) {
      return "WNW";
    } else if (degrees >= 303.75 && degrees <= 326.25) {
      return "NW";
    } else if (degrees >= 326.25 && degrees <= 348.75) {
      return "NNW";
    }
  })
});
