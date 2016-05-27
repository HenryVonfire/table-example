import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    let stuff = [];

    for(let i = 0; i < 200; i++) {
      stuff.pushObject({
        a:`a-${i}`,
        b:`b-${i}`,
        c:`c-${i}`,
        d:`d-${i}`,
        e:`e-${i}`,
        f:`f-${i}`,
        g:`g-${i}`,
        h:`h-${i}`,
        i:`i-${i}`,
      });
    }
    return stuff;
  }
});
