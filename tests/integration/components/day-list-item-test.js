import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | day-list-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it should renders empty', async function(assert) {
    await render(hbs`{{day-list-item}}`);
    assert.equal(this.element.textContent.trim(), '');
  });

  test('it should renders the day', async function(assert) {
    this.set('day', {

    });

    await render(hbs`{{day-list-item day}}`);

    assert.equal(this.element.textContent.trim(), '');
  });
});
