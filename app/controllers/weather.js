import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { translationMacro as translate } from "ember-i18n";

export default Controller.extend({
  daysCollapsed: true,

  expandTitle: translate("expand"),
  collapseTitle: translate("collapse"),

  actionTitle: computed("daysCollapsed", function () {
    return this.get("daysCollapsed") ? this.get("expandTitle") : this.get("collapseTitle");
  }),

  listClass: computed("daysCollapsed", function () {
    return this.get("daysCollapsed") ? "collapse" : "";
  }),

  actions: {
    back() {
      this.transitionToRoute("searcher");
    },

    toggle() {
      this.toggleProperty("daysCollapsed");
    }
  }
});
