// store/index.js
import { createStore } from 'vuex';
import auth from './modules/auth'; // Asegúrate de que la ruta sea correcta

const store = createStore({
    modules: {
        auth,
    },
});

export default store;
