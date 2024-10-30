<template>
    <div class="dashboard">
        <header class="dashboard-header">
            <h1>Apliacion Vue - Demo</h1>
            <nav>
                <ul>
                    <li><a href="#" @click="handleLogout">Salir</a></li>
                </ul>
            </nav>
        </header>

        <div class="dashboard-content">
            <aside class="dashboard-sidebar">
                <ul>
                    <li><router-link to="/dashboard">Inicio</router-link></li>
                    <li><router-link to="/users">Usuarios</router-link></li>
                </ul>
            </aside>
            <div class="">
                <main class="dashboard-main">
                    <slot></slot>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DashboardView',
    methods: {
        handleLogout() {
            this.$router.push('/login');
        }
    }
};
</script>

<style scoped>
.dashboard {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.dashboard-header {
    background-color: #4CAF50;
    color: white;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dashboard-header nav ul {
    list-style: none;
    padding: 0;
}

.dashboard-header nav ul li {
    display: inline;
    margin-left: 1em;
}

.dashboard-header nav ul li a {
    color: white;
    text-decoration: none;
}

.dashboard-content {
    display: flex;
    flex: 1;
}

.dashboard-sidebar {
    width: 200px;
    background-color: #e0dcdc;
    padding: 1em;
}

.dashboard-sidebar ul {
    list-style: none;
    padding: 0;
}

.dashboard-sidebar ul li {
    margin-bottom: 1em;
}

.dashboard-sidebar ul li a {
    text-decoration: none;
    color: #333;
}

.dashboard-main {
    padding: 2em;
    background-color: #fff;
}
</style>
