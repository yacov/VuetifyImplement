import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import './streaming-client-api.js';
// import any other custom components or scripts

const app = createApp({});
app.use(createVuetify());
app.mount('#app');
// include any other global options

