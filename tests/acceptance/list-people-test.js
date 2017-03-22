import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list people');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('should show scientists as the home page', function(assert) {

});

test('should link to information about the company', function(assert) {

});

test('should link to contact information', function(assert) {

});

test('should list available scientists', function(assert) {

});

test('should filter the list of scientists by city', function(assert) {

});

test('should show details for a selected scientist', function(assert) {

});
