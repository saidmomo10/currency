<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import { Form } from '@/types/form'

import { ref, watch } from "vue"
type Form = "signup" | "login";
const form = ref<Form>('signup')

const emits = defineEmits(['update'])

watch(form, (value) => {
    emits('update', value)
})

// function choisirCarte(){
//     form.value = 'login'
// }

// function choisirMobile(){
//     form.value = 'signup'
// }

</script>

<template>
    <main>
    <div class="container">
        <div class="login__content">
            <div :class="{ 'active': form == 'login' }" class="form-style" @click="form = 'login'">
                <p>Se connecter</p>
            </div>

            <div :class="{ 'active': form == 'signup' }" class="form-style" @click="form = 'signup'">
                <p>S'inscrire</p>
            </div>
        </div>
        
    </div>
    </main>
    <!-- <div class="container">
        <FormContent/>
    </div> -->
</template>

<style scoped>

    main{
        display: flex;
        justify-content: center;
        align-items: start;
    }
    .login__content{
        display: flex;
        flex-wrap: nowrap;
        margin-top: 50px;
    }

    .form-style{
        cursor: pointer;
        padding: 15px;
        background-color: #444854;

    }

    .form-style p{
        font-size: 20px;
        font-weight: 900;
        color: white;
    }

    .active {
    color: #444854;
    background-color: #f8ab40;
    cursor: pointer;
}

.active p{
    color: #444854;
}

</style>
