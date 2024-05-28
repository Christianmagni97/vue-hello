const { createApp, ref } = Vue
createApp({
    setup() {
      const message = ref('Prova vue! :D')
      return {
        message
      }
    }
  }).mount('#app')

