import Controller from '@ember/controller';
import { translationMacro as translate } from "ember-i18n";
import { observer } from '@ember/object';

export default Controller.extend({
  queryParams: ['error'],

  /**
   * @protected
   * @type {String}
   */
  search: null,

  /**
   * @private
   * @type {String}
   */
  error: null,

  /**
   * @private
   */
  onError: observer("error", function () {
    const error = this.get("error");

    if (error) {
      this.set("errors", [{
        message: this.get("notFoundMessage")
      }]);
    } else {
      this.set("errors", null);
    }
  }),

  /**
   * @protected
   * @type {Array}
   */
  errors: null,

  /**
   * @protected
   * @type {String}
   */
  errorMessage: translate("searcher.error"),

  /**
   * @protected
   * @type {String}
   */
  notFoundMessage: translate("searcher.not-found"),

  /**
   * @protected
   * @param {String} search
   */
  validate(search) {
    let valid = false;

    if (search && search.length > 0) {
      const regexp = /\w+,(?: ?)\w{2,3}/g;
      const matches = search.match(regexp);

      valid = matches && matches.length === 1;
    }

    return valid;
  },

  /**
   * @private
   * @since 1.0.0
   */
  actions: {
    /**
     * @protected
     * @since 1.0.0
     */
    search() {
      if (!this.validate(this.search)) {
        this.set("errors", [{
          message: this.get("errorMessage")
        }]);
      } else {
        this.transitionToRoute("weather", this.search);
      }
    },
  }
});
