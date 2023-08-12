<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';

import CurrencyForm from '@/components/CurrencyForm.vue';

import { ref } from 'vue'

const currency = ref('')
const currencyVal = ref('')
const currencyCodes = ref('')

const submitForm = () =>{
  getvalConvert()
    }


const emits = defineEmits(['submit'])

// async function getvalConvert(){
    
//   var myHeaders = new Headers();
// myHeaders.append("apikey", "pgCBAZpfAoZPFCSMlZa68xolV7CVtYup");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };
// getvalConvert()

// fetch("https://api.apilayer.com/currency_data/live?source=${currencyCodes}", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log())
//   .catch(error => console.log('error', error));
// }
// getvalConvert()

// async function getCountryList(){
    
//     let url = `http://api.currencylayer.com/list?access_key=0d22cd5d805982af3de3305302905bab`;
    
//     fetch(url).then(response => response.json()).then(result =>{
//         currencyCodes.value = Object.keys(result.currencies)
//         // console.log(result.currencies);
        
    
    
//     }).catch (()=> {
        
//       });
//     }
//     getCountryList()
    


</script>

<template>
    <NavBar/>
    <main>
      <!-- <form @submit.prevent="submitForm" action="">
        <div class="select-box">
          <select>
            <option :value="currencyCode" v-for="currencyCode in currencyCodes" :key="currencyCode">{{ currencyCode }}</option>
          </select>
        </div>
        <button type="submit">Convertir</button>
      </form>

      <table>
        <th>Monnaies</th>
        <th>Derniers Taux Actualisés</th>
        <tbody>
          <tr>
            <td v-for="element in currency" :key="element">
              {{ element }}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table> -->
      
    </main>
    <h4>Désolé mais le plan gratuit de l'API ne prend pas en copmpte cette fonctionalité </h4>

  
  <RouterView />
</template>

<style scoped>
    
</style>
