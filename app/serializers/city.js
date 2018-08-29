import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    forecastings: {
      deserialize: 'records',
      serialize: false
    }
  },

  normalizeResponse(store, primaryModelClass, payload) {
    payload.forecastings = [];

    payload.list.forEach((item) => {
      item["id"] = item["dt"];
      payload.forecastings.push(item);
    });

    delete payload.list;

    return this._super(...arguments);
  },

  /**
   * @protected
   * @since 1.0.0
   *
   * @param {DS.Model} modelClass
   * @param {Object} resourceHash
   *
   * @return {Object}
   */
  extractId(modelClass, resourceHash) {
    return resourceHash.city.id;
  },

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
    return resourceHash.city;
  }
});
