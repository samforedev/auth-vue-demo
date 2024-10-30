<template>
    <MainLayout>
        <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="login-form shadow-lg p-4 rounded">
            <h2 class="mb-4 text-center">Ingresar</h2>
            <form @submit.prevent="handleLogin">
                <div class="mb-2">
                    <label for="email" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="email" v-model="email" placeholder="Ingresa tu correo"
                        required>
                </div>

                <div class="mb-2">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="password" v-model="password"
                        placeholder="Ingresa tu contraseña" required>
                </div>

                <button type="submit" class="btn-primary">Ingresar</button>
                <router-link to="/register"  type="submit" class="btn btn-primary">Registrar</router-link>
            </form>
        </div>
    </div>
    </MainLayout>
    
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
import { mapActions } from 'vuex';

export default {
    name: 'LoginAuth',
    components: { MainLayout },
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        ...mapActions('auth', ['login']),
        async handleLogin() {
            try {
                const data = await this.login({ username: this.username, password: this.password });
                console.log('Login data:', data);
                this.$router.push('/dashboard');
            } catch (error) {
                console.log('Login error', error);
            }
        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.login-form {
    max-width: 600px;
    width: 100%;
    background: #f8f9fa;
    border-radius: 10px;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.login-form .form-control {
    border-radius: 8px;
    border: 1px solid #ced4da;
    transition: border-color 0.3s;
}

.login-form .form-control:focus {
    border-color: #4CAF50;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2);
}

.login-form h2 {
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
