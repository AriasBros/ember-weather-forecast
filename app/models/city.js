import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr("string"),
  lat: DS.attr("number"),
  lon: DS.attr("number"),
  country: DS.attr("string"),
  population: DS.attr("number"),

  forecastings: DS.hasMany("forecasting"),

  days: computed("forecastings", function () {
    const forecastings = this.get("forecastings");
    const days = [];
    const ignoreIndex = forecastings.firstObject.get("dayIndex");

    forecastings.forEach((forecasting) => {
      const index = forecasting.get("dayIndex");
      const day = forecasting.get("dayName");

      if (index !== ignoreIndex) {
        if (!days[index]) {
          days[index] = {
            name: day,
            min: Math.round(forecasting.get("temperatureMin")),
            max: Math.round(forecasting.get("temperatureMax")),
          };
        } else {
          days[index]["min"] = Math.min(Math.round(forecasting.get("temperatureMin")), days[index]["min"]);
          days[index]["max"] = Math.max(Math.round(forecasting.get("temperatureMax")), days[index]["max"]);
        }

        if (forecasting.get("hour") === 12) {
          days[index]["icon"] = forecasting.get("icon");
        }
      }
    });

    return days;
  }),
});
