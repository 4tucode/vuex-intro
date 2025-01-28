import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [], // Almacén para los usuarios
  },
  getters: {
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users; // Actualiza el estado con los usuarios obtenidos
    },
  },
  actions: {
    async obtener_usuarios({ commit }) {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Error al obtener los usuarios"); // Manejo de errores
        }
        const data = await response.json(); // Convierte la respuesta a JSON
        commit("SET_USERS", data); // Llama a la mutación con los datos
      } catch (error) {
        console.error("Error en fetchUsers:", error);
      }
    },
  },
  modules: {
  }
})
