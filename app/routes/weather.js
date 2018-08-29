import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').queryRecord('city', {
      q: params.query
    });
  },

  actions: {
    willTransition() {
      this.controller.set("daysCollapsed", true);
      return true;
    },

    didTransition() {
      this.controller.set("currentForecasting", this.modelFor(this.routeName).get("forecastings.firstObject"));
      return true;
    },

    error(error) {
      this.replaceWith('searcher', { queryParams: { error: error.errors[0].status } });
    },
  }
});
