import Ember from 'ember';
import Table from 'ember-light-table';

const { Component } = Ember;

export default Component.extend({

  columns: [{
    label: 'a',
    valuePath: 'a',
    width: '200px'
  }, {
    label: 'b',
    valuePath: 'b',
    width: '200px'
  }, {
    label: 'c',
    valuePath: 'c',
    width: '200px'
  }, {
    label: 'd',
    valuePath: 'd',
    width: '200px'
  }, {
    label: 'e',
    valuePath: 'e',
    width: '200px'
  }, {
    label: 'f',
    valuePath: 'f',
    width: '200px'
  }, {
    label: 'g',
    valuePath: 'g',
    width: '200px'
  }, {
    label: 'h',
    valuePath: 'h',
    width: '200px'
  }, {
    label: 'i',
    valuePath: 'i',
    width: '200px'
  }],

  init() {
    this._super(...arguments);
    this.set('table', new Table(this.columns,this.get('model')));
  }
});
