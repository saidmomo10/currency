<template>
    <div>
        <NavBar/>

        <div class="convert_form">
      <form @submit.prevent="submitForm" action="">
        <div class="from">
            <p>Devise de départ</p>
            <div class="select-box">
              <select v-model="currencies">
                <option :value="currencyCodes" v-for="currencies in currencyCodes" :key="currencies">{{ currencies }}</option>
              </select>
            </div>
        </div>  
        <button style="border: #444854 solid 1px;" type="submit">Convertir</button>
      </form>
    </div>
    </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';
import { ref } from 'vue';

// const clientHttp = axios.create(
//     {
//         baseURL: "http://api.currencylayer.com/",
//         headers: {
//             Accept: "application/json",
//         }
//     }
// )

// const currencyCodes = ref([]);
// const currencies = ref('')


// async function submitForm(){

// getvalConvert()

// }

// async function getCountryList(){
    
//     let url = `http://api.currencylayer.com/list?access_key=0d22cd5d805982af3de3305302905bab`;
    
//     fetch(url).then(response => response.json()).then(result =>{
//         currencyCodes.value = Object.keys(result.currencies)
//         console.log(result.currencies);
        
    
    
//     }).catch (()=> {
        
//       });
      
//     }
// getCountryList()


// // async function getCountryList(){

// //     try {
// //       const response = await clientHttp.get('/list?access_key=72d785b8d2e58c5cce90a94c53936939');
// //       console.log(response);
// //       if(response.status === 200){
// //                currency.value  = Object.keys(response.data.currencies)
// //             }
// //   }catch(error){
// //       console.log(error);
// //   }
      
// //     }
// // getCountryList()


// async function getvalConvert(){
//       const amountVal = ref('')
//     //   amountVal.value = historyData.value.departValue;
//       // if(amountVal.value == "" || amountVal.value == "0"){
//       //     historyData.value.depart_value = "1";
//       //     amountVal.value = 1;
//       // }
      
//       let url = new URLSearchParams();
//   url.append('access_key', '0d22cd5d805982af3de3305302905bab');
//   url.append('source', currencies.value);
//   url.append('currencies', 'USD');

//   let request = new Request(new URL('https://api.currencylayer.com/live', location.origin), {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   fetch(request).then(response => response.json()).then(result =>{
//     // TODO: Handle the result
//   }).catch(() =>{
//       });
//     }

// // getvalConvert()





// // async function getvalConvert(){

// //     try {
// //       const results = await clientHttps.get(`/v6/b1de636b25d126b07af975c3/latest/${currencies.value}`);
// //       console.log(results);
// //       if(results.status === 200){
// //                currencyCodes.value  = results.data
// //             }
// //   }catch(error){
// //       console.log(error);
// //   }
// //     }

// // getvalConvert()
</script>