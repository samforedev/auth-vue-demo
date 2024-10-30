<template>
  <dash-board>
    <div class="profile-card shadow-lg p-4 rounded bg-white">
      <div class="banner-image-container">
        <img :src="require('@/assets/styles/Paisaje.jpg')" alt="Mural de fondo" class="banner-image">
      </div>
      <div class="profile-picture">
        <img :src="require('@/assets/styles/perro.png')" alt="Foto de perfil" class="rounded-circle profile-img">
      </div>
      <h2 class="mt-4">Nombre de Usuario</h2>
      <p class="text-muted">Breve descripción o cargo</p>
    </div>
    <div class="shadow-lg p-4 rounded bg-white wider-card mt-4">
      <h2 class="mb-4 text-center">Edición de perfil</h2>
      <div class="container">
        <div class="row mb-2">
          <div class="col-md-6">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre" v-model="nombre"
                   placeholder="Escribe tu nombre" required>
          </div>
          <div class="col-md-6">
            <label for="apellido" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="apellido" v-model="apellido"
                   placeholder="Escribe tu apellido" required>
          </div>
        </div>

        <div class="row mb-2">
          <div class="col-md-6">
            <label for="direccion" class="form-label">Dirección</label>
            <input type="text" class="form-control" id="direccion" v-model="direccion"
                   placeholder="Ingresa tu dirección" required>
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label">Correo Electrónico</label>
            <input type="email" class="form-control" id="email" v-model="email"
                   placeholder="Ingresa tu correo" required>
          </div>
        </div>
      </div>
      <div class="text-center mt-3">
        <button type="submit" class="btn btn-primary"><i class="fas fa-sync-alt"></i> Actualizar perfil</button>
        <router-link to="/dashboard" class="btn btn-secondary ms-2"><i class="fas fa-times"></i> Cancelar</router-link>
      </div>
    </div>
  </dash-board>
</template>

<script>

import DashBoard from "@/components/dashboard/DashBoard.vue";

export default {
  name: "ProfileView",
  components:{ DashBoard },
  data() {
    return {
      nombre: '',
      apellido: '',
      direccion: '',
      email: ''
    };
  }
};
</script>

<style>
.custom-div {
  display: flex;
}
.bg-white {
  background-color: #59b1a1;
}
.wider-card {
  width: 100%;
  max-width: 1500px;
  background-color: #edc0c0;
}
.profile-card {
  position: relative;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding-top: 150px;
  border-radius: 8px;
  overflow: hidden;
}

.banner-image-container {
  position: relative;
  width: 100%;
  height: 200px;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-picture {
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-5%);
  width: 120px;
  height: 120px;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #fff;
}

h2, p {
  margin-top: 1rem;
}
</style>
