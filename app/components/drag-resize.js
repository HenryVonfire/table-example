import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName:'tr',
  screenX:0,

  res(e){
    let value;
    if(this.get('screenX') === 0){
      value = e.screenX - e.screenX;
    } else {
      value = e.screenX - this.get('screenX');
    }

    let column = this.get('column');
    if(column){
      let width = parseInt(column.get('width').substring(0, column.get('width').length - 2));

      if(width+value > 100){
        column.set('width',`${width+value}px`);
      }
    }
    this.set('screenX',e.screenX);
  },

  didRender(){
    const table =  Ember.$(`#${this.get('tableId')}`);
    table.on('mousemove', event => {
      this.res(event);
    });
    table.on('mouseup', event => {
      this.set('column',null);
    });

  },
  willDestroy(){
    const table =  Ember.$(`#${this.get('tableId')}`);
    table.off('mousemove');
    table.off('mouseup');
  },

  actions: {
    selectColumn(column){
      this.set('column',column);
    }
  }

});
