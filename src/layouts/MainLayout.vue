<template>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    <div class="overlay">
            <slot></slot>
        </div>
</template>

<script>
export default {
    name: "BackgroundLayout",
};
</script>

<style scoped>
.bg {
    animation: slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #6c3 50%, rgb(0, 255, 174) 50%);
    bottom: 0;
    left: -50%;
    opacity: .5;
    position: fixed;
    right: -50%;
    top: 0;
    z-index: -1;
}

.bg2 {
    animation-direction: alternate-reverse;
    animation-duration: 8s;
}

.bg3 {
    animation-duration: 8s;
}

@keyframes slide {
    0% {
        transform: translateX(-25%);
    }

    100% {
        transform: translateX(25%);
    }
}
</style>