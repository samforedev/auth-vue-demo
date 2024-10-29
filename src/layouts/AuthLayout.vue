<template>
    <div class="auth-layout">
        <header><h1>Demo Vue app</h1></header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<style scoped>
.auth-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>