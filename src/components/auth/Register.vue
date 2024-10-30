<template>
    <MainLayout>
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="registration-form shadow-lg p-4 rounded">
                <h2 class="mb-4 text-center">Registrar</h2>
                <form @submit.prevent="handleRegister">
                    <div class="mb-2">
                        <label for="email" class="form-label">Correo Electrónico</label>
                        <input type="email" class="form-control" id="email" v-model="email"
                            placeholder="Ingresa tu correo" required>
                    </div>

                    <div class="mb-2">
                        <label for="username" class="form-label">Nombre de Usuario</label>
                        <input type="text" class="form-control" id="username" v-model="username"
                            placeholder="Ingresa tu nombre de usuario" required>
                    </div>

                    <div class="mb-2">
                        <label for="password" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="password" v-model="password"
                            placeholder="Ingresa tu contraseña" required>
                    </div>

                    <button type="submit" class="btn-primary">Registrarse</button>
                  <div>
                    <router-link to="/login" type="submit" class="btn btn-primary">Volver</router-link>
                  </div>
                </form>
            </div>
        </div>
    </MainLayout>

</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
import { mapActions } from 'vuex';

export default {
    name: "RegisterAuth",
    components: { MainLayout },

    data() {
        return {
            email: '',
            username: '',
            password: ''
        };
    },

    methods: {
        ...mapActions('auth', ['register']),

        async handleRegister() {
            try {
                await this.register({
                    email: this.email,
                    username: this.username,
                    password: this.password
                });
                this.$route.push('/dashboard');

            } catch (error) {
                console.log('Register error', error);
            }
        }
    }


}

</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.registration-form {
    max-width: 500px;
    width: 100%;
    background: #f8f9fa;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.registration-form .form-control {
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid #ced4da;
    transition: border-color 0.3s;
}

.registration-form .form-control:focus {
    border-color: #4CAF50;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
}

.registration-form h2 {
    text-align: center;
    color: #333333;
    margin-bottom: 1em;
}

button {
    margin-top: 1em;
    align-self: center;
    width: 100%;
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 0.8em;
    border-radius: 8px;
    font-size: 1em;
    cursor: pointer;
    transition: background-color 0.3s;
}
.btn {
  margin-top: 1em;
  display: inline-block;
  align-self: center;
  width: 100%;
  background-color: #1033a6;
  color: white;
  border: none;
  padding: 0.8em;
  border-radius: 8px;
  font-size: 1em;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;
  text-decoration: none;
}

button:hover {
    background-color: #37803b;
}
</style>
