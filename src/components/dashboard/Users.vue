<script>

export default {
  name: "UserView",
  components:{

  },
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
<template>
  <div class="animated-background vh-100 d-flex justify-content-center align-items-center">
    <div class="shadow-lg p-4 rounded bg-white wider-card">
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

  </div>
</template>

<style>
.animated-background {
  background: linear-gradient(-45deg, #b09aff, #c4f2fa, #c4f0fa, #c4c2fb);
  background-size: 400% 400%;
  animation: gradient-animation 10s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-white {
  background-color: #59b1a1;
}
.wider-card {
  width: 75%;
  max-width: 1200px;
  background-color: white;
}
</style>
