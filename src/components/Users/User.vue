<template>
    <DashBoard>
        <p class="h1">Usuarios</p>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Número Teléfono</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.age }}</td>
                    <td>{{ user.address }}</td>
                    <td>{{ user.cellPhone }}</td>
                </tr>
            </tbody>
        </table>
    </DashBoard>
</template>

<script>
import userService from '@/services/userService';
import DashBoard from '../dashboard/DashBoard.vue';

export default {
    name: "UserView",
    components: { DashBoard },
    data() {
        return {
            users: []
        };
    },
    async created() {
        await this.handleUsers();
    },
    methods: {
        async handleUsers() {
            try {
                const data = await userService.getUsers();
                this.users = data.users;
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        }
    }
}
</script>

<style scoped>
.table {
    
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
}

.table thead th {
    padding: 12px;
    text-align: left;
    border-bottom: 2px solid #dee2e6;
}

.table tbody tr:hover {
    background-color: #f1f1f1;
}

.table td,
.table th {
    padding: 12px;
    border: 1px solid #dee2e6;
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: #f9f9f9;
}

.table-hover tbody tr:hover {
    background-color: #e2e6ea;
    cursor: pointer;
}
</style>
