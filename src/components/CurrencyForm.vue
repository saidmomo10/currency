<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import ChangeIcon from './icons/ChangeIcon.vue';


import { ref } from 'vue'


const emits = defineEmits(['submit'])

    const historyData = ref({
    depart_value: "",
    first_currency: "",
    second_currency: "",
    })

    const historyValue = ref({
    depart_value: "",
    first_currency: "",
    second_currency: "",
    })

    const total = ref("");

    const submitForm = () =>{
      emits ('submit', historyData.value)
      getvalConvert()
      historyValue.value.depart_value = historyData.value.depart_value;
      historyValue.value.first_currency = historyData.value.first_currency;
      historyValue.value.second_currency = historyData.value.second_currency;

    }

    const currencyCodes = ref([]);

    async function getvalConvert(){
      const amountVal = ref('')
      amountVal.value = historyData.value.depart_value;
    if(amountVal.value == "" || amountVal.value == "0"){
        historyData.value.depart_value = "1";
        amountVal.value = 1;
    }
    
    let url = `https://v6.exchangerate-api.com/v6/b1de636b25d126b07af975c3/latest/${historyData.value.first_currency}`;
    
    fetch(url).then(response => response.json()).then(result =>{
    let valConvert = result.conversion_rates[historyData.value.second_currency];
        console.log(result);
        
    total.value = (amountVal.value * valConvert).toFixed(2);
    console.log(total.value);
    
    }).catch(() =>{
    });
}

getvalConvert()

async function getCountryList(){
    
    let url = `http://api.currencylayer.com/list?access_key=0d22cd5d805982af3de3305302905bab`;
    
    fetch(url).then(response => response.json()).then(result =>{
        currencyCodes.value = Object.keys(result.currencies)
        console.log(result.currencies);
        
    
    
    }).catch (()=> {
        
      });
    }
getCountryList()


</script>

<template>
  <main>
    <div class="convert_form">
      <form @submit.prevent="submitForm" action="">
        <input type="number" v-model="historyData.depart_value">
        <div class="from">
            <p>Devise de départ</p>
            <div class="select-box">
              <select v-model="historyData.first_currency">
                <option :value="currencyCode" v-for="currencyCode in currencyCodes" :key="currencyCode">{{ currencyCode }}</option>
              </select>
            </div>
        </div>  


        <div class="to">
            <p>Devise d'arrivée</p>
            <div class="select-box">
              <select v-model="historyData.second_currency">
                <option :value="currencyCode" v-for="currencyCode in currencyCodes" :key="currencyCode">{{ currencyCode }}</option>
              </select>
            </div>
        </div>
        <button style="border: #444854 solid 1px;" type="submit">Convertir</button>
      </form>
      <div class="result">
        <p>{{ total }} {{ historyValue.second_currency }}</p>
      </div>
    </div>
  </main>
  
  <RouterView />
</template>

<style scoped>
  .convert_form{
    display: flex;
    align-items: center;
    gap: 80px;
    flex-wrap: wrap;
  }
  form{
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    animation: haut 2s ease-out;
    background: #f8ab40;
    padding: 50px;
  }

  @keyframes haut{
    from{
        transform: translateX(-50%);
        opacity: 0;
    }
    to{
        transform: translate(0%);
        opacity: 1;
    }
}
  form input{
      height: 40px;
      width: 250px;
  }

  form input::placeholder{
      font-weight: 900;
  }

  select{
    width: 150px;
    height: 50px;
    background: none;
    border: none;
    border: solid 1px;
  }

  .result{
    
  }

  .result p{
    font-size: 50px;
    font-weight: 900;
  }
</style>