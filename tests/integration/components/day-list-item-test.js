import 'should';
import { describe, it } from 'mocha';
import { setupRenderingTest } from 'ember-mocha';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

describe('DayListItemComponent', function() {
  setupRenderingTest();

  it('should renders empty', async function() {
    await render(hbs`{{day-list-item}}`);
    this.element.textContent.trim().should.be.empty();
  });

  it('should renders the name day with icon and temperatures', async function() {
    this.set('day', {
      name: "Monday",
      icon: "/images/01d.svg",
      max: 30,
      min: 15
    });

    await render(hbs`{{day-list-item day}}`);

    this.element.querySelector('img').should.not.be.null();
    this.element.textContent.trim().should.startWith("Monday");
    this.element.textContent.trim().should.endWith("30º/15º");
  });
});
