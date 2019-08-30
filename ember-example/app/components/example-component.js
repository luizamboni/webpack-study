import ApiClient from 'api-client'
import Component from '@ember/component';
import { set } from '@ember/object';


export default Component.extend({
  content: null,

  click(event) {
    console.log(event);
  },

  didInsertElement(event) {
    this.apiClient = new ApiClient();
    this.apiClient.getObjects().then(resp => {
      const content = JSON.stringify(resp.data, 2, null)
      set(this,'content', content)
    })
  },

  
  actions: {
    refresh(name) {
      new ApiClient().getObjects().then(resp => {
        console.log(resp)
      })
    }
  }
});