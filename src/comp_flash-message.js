Vue.component('search', {
  props: ['message', 'messageType', 'visibility'],
  template:
    `
      <div class={{ messageType }} v-show="visibility">
        <span>{{ message }}</span>
      </div>
    `
})
