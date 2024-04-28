import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

import NavBar from "./components/layOuts/NavBar.vue";
import FooterSec from './components/layOuts/FooterSec.vue';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faTwitter,
    faFacebook,
    faInstagramSquare,
    // faInstagram,
    faGooglePlus,
  } from "@fortawesome/free-brands-svg-icons";
  
  library.add(fas, faTwitter, faFacebook, faInstagramSquare, faGooglePlus);


const app = createApp(App);

app.component("nav-bar", NavBar);
app.component("footer-sec", FooterSec);
app.component("font-awesome-icon", FontAwesomeIcon);


app.use(router);

app.use(bootstrap);
app.mount("#app");
