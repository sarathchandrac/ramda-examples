import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
// import _ from 'lodash';
// import R from 'ramda';

moduleForComponent('cus-comp-one', 'Integration | Component | cus comp one', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{cus-comp-one}}`);

  assert.equal(this.$().text().trim(), '');



  // Template block usage:" + EOL +
  this.render(hbs`
    {{#cus-comp-one}}
      template block text
    {{/cus-comp-one}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
  // Ramda examples
  // assert.equal('a', 'b');
});
