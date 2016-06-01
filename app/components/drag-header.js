import Ember from 'ember';
import ltColumn from 'ember-light-table/components/lt-column';

export default ltColumn.extend({
  className:['droptarget'],
  attributeBindings:['draggable'],
  classNameBindings: ['dragClass'],
  dragClass: '',
  draggable:true,
  drop(event) {
    event.preventDefault();
    this.set('dragClass','');
    let draggedName = event.dataTransfer.getData('text/plain');
    let staticName = this.get('column.valuePath');
    if(draggedName !== staticName){
      const table = this.get('table');
      let draggedIndex, staticIndex, draggedColumn, staticColumn;
      table.columns.forEach((column,index) => {
        if(column.valuePath === draggedName){
          draggedIndex = index;
          draggedColumn = column;
        } else {
          if(column.valuePath === staticName) {
            staticIndex = index;
            staticColumn = column;
          }
        }
      });

      let columns = table.columns;
      let temp = columns.objectAt(draggedIndex);
      columns.replace(draggedIndex, 1, [columns.objectAt(staticIndex)]);
      columns.replace(staticIndex, 1, temp);
    }
  },
  dragLeave(event) {
    event.preventDefault();
    this.set('dragClass', '');
  },
  dragOver(event){
    event.preventDefault();
    this.set('dragClass','dragged-over');
  },
  dragStart(event) {
    event.dataTransfer.setData('text/plain', this.get('column.valuePath'));
  }
});
