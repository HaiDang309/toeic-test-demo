<template lang="">
    <div @click.self="handleCloseDrawer" class="dropback">
        <div class="drawer">
            <button @click="handleOpenModal1">Choose part of Toeic</button>
            <button @click="handleOpenModal2">Set Timer</button>
        </div>
    </div>
    <Modal1 @close="handleCloseModal1" v-if="openModal1"/>
    <Modal2 @close="handleCloseModal2" v-if="openModal2"/>
</template>
<script>
import Modal1 from './Modal1.vue';
import Modal2 from './Modal2.vue';

export default {
    methods: {
        handleCloseDrawer() {
            this.$emit('close')
        },
        handleOpenModal1() {
            this.openModal1 = true;
        },
        handleOpenModal2() {
            this.openModal2 = true;
        },
        handleCloseModal1() {
            this.openModal1 = false
        },
        handleCloseModal2() {
            this.openModal2 = false
        }
    },
    components: {
        Modal1,
        Modal2
    },
    data() {
        return {
            openModal1: false,
            openModal2: false
        }
    }
}
</script>
<style lang="scss">
    .dropback {
        height: 100%;
        width: 100%;

        position: fixed;
        top: 0;

        background: rgba(0, 0, 0, .5);

        z-index: 10;
        .drawer {
            position: fixed;
            top: 0;
            left: 0;

            width: 256px;
            height: 100vh;

            background: #fff;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            overflow-x: hidden;

            button {
                width: 100vh;

                cursor: pointer;

                padding: 8px;

                background: inherit;

                border: none;
                outline: none;
                border-bottom: 1px solid rgba(0, 0, 0, .2);

                font-size: 20px;

                transition: transform .5s ease-in-out;

                &:hover {
                    transform: translateX(16px);

                    color: #387c6d;
                }
            }
        }
    }
</style>