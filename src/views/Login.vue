<script setup lang="ts">
import FormSelect from '@/components/FormSelect.vue';
import LoginForm from '@/components/LoginForm.vue'
import SignupForm from '@/components/SignupForm.vue'
import { ref } from 'vue'
import { Form } from '@/types/form'

const form = ref<Form>()
function selectForm(value: Form) {
    form.value = value
}
</script>

<template>
    <main>
        <h1>Connexion/Inscription</h1>
        <div class="container">
            <FormSelect @update="selectForm"/>
        <div class="form__content">
            <div v-if="form == 'login'">
                <LoginForm/>
            </div>
            <div v-else>
                <SignupForm/>
            </div>
        </div>
        </div>
    </main>
  <RouterView />
</template>

<style scoped>
    /* main{
        background: url(../assets/img/pexels-tima-miroshnichenko-6694543.jpg);
        background-size: cover;
        overflow: hidden;
    } */

    h1{
        font-size: 4rem;
        text-align: center;
        margin-top: 40px;
    }

    .form__content{
    background-color: #444854;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    height: 60vh;

}
</style>
