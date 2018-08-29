import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  /**
   * @since 1.0.0
   * @type {string}
   */
  host: ENV.OPEN_WEATHER_MAP.API_HOST,

  /**
   * @protected
   * @since 1.0.0
   * @param {Object} query
   * @param {string} modelName
   * @return {string}
   */
  urlForQueryRecord(query) {
    query.appid = ENV.OPEN_WEATHER_MAP.API_KEY;
    query.lang = this.get("i18n.locale");
    query.units = "metric";

    return this.get("host");
  }
});
