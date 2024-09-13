// plugins/fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

// Disable automatic CSS injection
config.autoAddCss = false

// Add icons to the library
library.add(faFacebook, faLinkedin, faInstagram, faTwitter)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
