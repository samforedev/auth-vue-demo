<template>
    <div class="dashboard">
        <header class="dashboard-header">
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#" @click="handleLogout">Logout</a></li>
                </ul>
            </nav>
        </header>
        
        <div class="dashboard-content">
            <aside class="dashboard-sidebar">
                <ul>
                    <li><router-link to="/overview">Overview</router-link></li>
                    <li><router-link to="/reports">Reports</router-link></li>
                    <li><router-link to="/analytics">Analytics</router-link></li>
                    <li><router-link to="/users">Perfil</router-link></li>
                </ul>
            </aside>
            
            <main class="dashboard-main">
                <h2>Welcome to the Dashboard</h2>
                <p>This is your dashboard area where you can view statistics, manage settings, and more.</p>
            </main>
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
    background-color: #4c7eaf;
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
    background-color: #898686;
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
    flex: 1;
    padding: 2em;
    background-color: #fff;
}
</style>
