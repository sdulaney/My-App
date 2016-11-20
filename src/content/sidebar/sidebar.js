'use strict';

class SidebarCtrl {
  constructor() {
    this.app = {"menu":"item"}
    this.items = [{name:"one"},{name:"two"},{name:"three"}]
  }
}

//this becomes a directive
export default () => {
  require('./sidebar.scss');
  return {
    controller: SidebarCtrl,
    controllerAs: 'sidebar',
    template: require('./sidebar.html') //template is required as a string
  };
};