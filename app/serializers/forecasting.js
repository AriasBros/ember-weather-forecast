import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  /**
   * @protected
   * @since 1.0.0
   *
   * @param {DS.Model} modelClass
   * @param {Object} resourceHash
   *
   * @return {Object}
   */
  extractAttributes(modelClass, resourceHash) {
    const weather = resourceHash.weather[0];

    return {
      date: resourceHash.dt_txt,
      name: weather.main,
      description: weather.description.capitalize(),
      icon: weather.icon,

      temperature: resourceHash.main.temp,
      temperatureMin: resourceHash.main.temp_min,
      temperatureMax: resourceHash.main.temp_max,

      pressure: resourceHash.main.pressure,
      pressureOnSeaLevel: resourceHash.main.sea_level,
      pressureOnGroundLevel: resourceHash.main.grnd_level,

      humidity: resourceHash.main.humidity,
      cloudiness: resourceHash.clouds.all,

      windSpeed: resourceHash.wind.speed,
      windDirection: resourceHash.wind.deg,

      rainVolume: resourceHash.rain ? resourceHash.rain["3h"] : null,
      snowVolume: resourceHash.snow ? resourceHash.snow["3h"] : null,
    };
  },
});
