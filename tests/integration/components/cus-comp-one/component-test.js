import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
// import _ from 'lodash';
// import R from 'ramda';

// var R = R;
moduleForComponent('cus-comp-one', 'Integration | Component | cus comp one', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{cus-comp-one}}`);
  console.log('debugginnng...', R);
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
test('ramda demo', function(assert) {
  // let addThree = a => b => c => a * b * c;
  let multiply = R.curry((a,b,c) => a * b * c);
  assert.equal(multiply(1,2,3) , 6);
});

// compose examples
test('compose examples', function(assert) {
  let f = (x) => x +1,
      g = (x) => x * 5;
  // let addThree = a => b => c => a * b * c;
  assert.equal( R.compose(f,g)(2), 11);
  assert.equal( R.pipe(f,g)(2), 15);
});

test('Test Multiplication with Even numbers', function (assert) {
  let isEven = (x) => x%2 === 0;
  let multiplyEvens = R.pipe(
    R.filter(isEven),
    R.reduce(R.multiply, 1)
  );
  assert.equal(multiplyEvens(R.range(1,5)),8);
  assert.equal(1,1);
});


test('Fetching first name of the active users with age > 30', function (assert) {
  // let isActive = R.propEq('isActive', true),
  //     overThirty = R.pipe(
  //       R.prop('age'),
  //       (age) => age >30
  //     );
  // var activeOverThirty = R.pipe(
  //   R.filter(R.both(isActive, overThirty)),
  //   R.map(R.path(['name', 'first']))
  // );
  let isActive = R.propEq('isActive', true);
    let overThirty = R.pipe(
      R.prop('age'),
      (age) => age > 30
    );
    let activeOverThirty = R.pipe(
      R.filter(R.both(isActive, overThirty)),
      R.map(R.path(['name', 'first']))
    );

  assert.equal(R.equals( activeOverThirty(data) , ["Patterson"]),true );
});


test('Evens multiply', function (assert) {
  let isEven = (x) => x%2 === 0;
  let multiplyEvens = R.pipe(
    R.filter(isEven),
    R.reduce(R.multiply, 1)
  );
  assert.equal(multiplyEvens(R.range(1,5)),8);
  assert.equal(1,1);
});

let data = [
  {
    "isActive": false,
    "balance": "$2,006.43",
    "age": 34,
    "name": {
      "first": "Marcie",
      "last": "Rollins"
    },
    "email": "marcie.rollins@isosure.me",
    "tags": [
      "ex",
      "proident",
      "ad",
      "aliqua",
      "custom_tag"
    ]
  },
  {
    "isActive": true,
    "balance": "$3,661.55",
    "age": 20,
    "name": {
      "first": "Janie",
      "last": "Donaldson"
    },
    "email": "janie.donaldson@interloo.biz",
    "tags": [
      "dolor",
      "proident",
      "custom_tag"
    ]
  },
  {
    "isActive": true,
    "balance": "$1,455.67",
    "age": 24,
    "name": {
      "first": "Rosanna",
      "last": "Gonzales"
    },
    "email": "rosanna.gonzales@turnabout.co.uk",
    "tags": [
      "ex",
      "dolor",
      "proident",
      "occaecat",
      "officia",
      "custom_tag"
    ]
  },
  {
    "isActive": true,
    "balance": "$2,208.45",
    "age": 31,
    "name": {
      "first": "Patterson",
      "last": "Compton"
    },
    "email": "patterson.compton@franscene.ca",
    "tags": [
      "ex",
      "ad",
      "occaecat",
      "custom_tag"
    ]
  },
  {
    "isActive": false,
    "balance": "$1,282.48",
    "age": 37,
    "name": {
      "first": "Deirdre",
      "last": "Parrish"
    },
    "email": "deirdre.parrish@mantrix.biz",
    "tags": [
      "dolor",
      "ad",
      "officia",
      "aliqua",
      "custom_tag"
    ]
  }
];
