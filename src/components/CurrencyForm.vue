<script setup lang="ts">
import axios from 'axios';
import router from '@/router';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();


const clientHttp = axios.create(
    {
        baseURL: "http://localhost:3000/api/",
        headers: {
            Accept: "application/json",
        }
    }
)

const historyData = ref({
  departValue: "",
  firstCurrency: "",
  secondCurrency: "",
  user_id: "",
})

const equal = ref('')

const emits = defineEmits(['submit']);
const total = ref("");
const resultat = ref([]);
let error = ref('');

const accessToken = localStorage.getItem('accessToken');


async function user(){
    if (accessToken){
        try{
            const response = await clientHttp.get('/UserPage', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
      })
      console.log(response);
      
            if(response.status === 200){
                historyData.value.user_id = response.data._id
                const id = historyData.value.user_id

            }
        } catch(error){
            console.log(error);
            
        }
    }
}
user()
// const user_id = route.params.id

async function submitForm(){
  await user();
  if (!historyData.value.departValue && !historyData.value.firstCurrency && !historyData.value.secondCurrency) {
    error.value = 'Veuillez remplir tous les champs';
    return;
  }

  emits ('submit', historyData.value)
  getvalConvert()

  try {
      const history = await clientHttp.post(`/history/${historyData.value.user_id}`, historyData.value)
      console.log(history);
      equal.value = '='
      // localStorage.setItem('accessToken', history.data.accessToken);
  }catch(error){
      console.log(error);
  }
}





// const equal = ref('')

// const emits = defineEmits(['submit'])
  
//     // const historyData = ref({
//     // depart_value: "",
//     // first_currency: "",
//     // second_currency: "",
//     // })

//     const historyValue = ref({
//     depart_value: "",
//     first_currency: "",
//     second_currency: "",
//     })

//     const total = ref("");

//     const submitForm = () =>{
      
//       emits ('submit', historyData.value)
//       getvalConvert()
//       historyValue.value.depart_value = historyData.value.depart_value;
//       historyValue.value.first_currency = historyData.value.first_currency;
//       historyValue.value.second_currency = historyData.value.second_currency;
//       equal.value = '='

//     }

    const currencyCodes = ref([]);
    const currencyCode = ref([]);
    const resultats = ref([]);
    const rates = ref([]);

    async function getvalConvert(){

      const amountVal = ref('')
      amountVal.value = historyData.value.departValue;
      // if(amountVal.value == "" || amountVal.value == "0"){
      //     historyData.value.depart_value = "1";
      //     amountVal.value = 1;
      // }
      
      let url = `https://v6.exchangerate-api.com/v6/b1de636b25d126b07af975c3/latest/${historyData.value.firstCurrency}`;
      
      fetch(url).then(response => response.json()).then(result =>{
      let valConvert = result.conversion_rates[historyData.value.secondCurrency];
          console.log(result);
      resultats.value = result
      rates.value =  Object.entries(result.conversion_rates)
      total.value = (amountVal.value * valConvert).toFixed(2);
      console.log(total.value);
      
      }).catch(() =>{
      });
    }


async function getCountryList(){
    
  let url = `http://api.currencylayer.com/list?access_key=0d22cd5d805982af3de3305302905bab`;
    
    fetch(url).then(response => response.json()).then(result =>{
        currencyCodes.value = Object.keys(result.currencies);
        currencyCode.value = Object.entries(result.currencies)
        console.log(result.currencies);
    }).catch (()=> {
        
    });
}
getCountryList()

const isModalOpen = ref(false);
  const openModal = () => {
  isModalOpen.value = true;
  };

  const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <main>
    <div class="convert_form">
      <form @submit.prevent="submitForm" action="">
        <input type="number" v-model="historyData.departValue">
        <div class="from">
            <p>Devise de départ</p>
            <div class="select-box">
              <select v-model="historyData.firstCurrency">
                <option :value="currencyCode" v-for="currencyCode in currencyCodes" :key="currencyCode">{{ currencyCode }}</option>
              </select>
            </div>
        </div>  


        <div class="to">
            <p>Devise d'arrivée</p>
            <div class="select-box">
              <select v-model="historyData.secondCurrency">
                <option :value="currencyCode" v-for="currencyCode in currencyCodes" :key="currencyCode">{{ currencyCode }}</option>
              </select>
            </div>
        </div>
        <p class="login_error">{{ error }}</p>
        <button @click="openModal" style="border: #505F98 solid 1px;" type="submit">Convertir</button>
      </form>
    </div>
    
    <div class="history">
      <div v-if="isModalOpen" class="history__modal" id="active">
        <div class="result">
          <p class="login_error">{{ error }}</p>
          <h4>Résultat :</h4>
          <p> {{ total }} {{ historyData.secondCurrency }}</p>
        </div>
        <div class="infos">
          <p>Informations sur la devise de base <span style="color: #505F98;">{{ resultats.base_code }}</span></p>
          <p>Heure UTC de la dernière mise à jour : {{ resultats.time_last_update_utc }}</p>
          <p>Heure UTC de la dernière mise à jour : {{ resultats.time_next_update_utc }}</p>
          <p>Taux de change en temps réel</p>
          <p>
            <ul>
              <li style="margin-top: 10px;" v-for="rate in rates">{{ rate }}</li>
            </ul>
          </p>
        </div>
        <a @click="closeModal"></a>
      </div>
    </div>
    <!-- <div v-for="element in currencyCode">
      {{ element }}
    </div> -->
  </main>
  
  <RouterView />
</template>

<style scoped>

.infos{
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
}

.infos h3{
  font-size: 50px;
}

  .convert_form{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  form{
    border-radius: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    animation: haut 2s ease-out;
    border: solid #E7E8F0 2px;
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
      border-radius: 10px;
      border: #444854 solid 1px;

  }

  form input::placeholder{
      font-weight: 900;
  }

  select{
    width: 150px;
    height: 50px;
    background: none;
    border: none;
    border-radius: 10px;
    border: #444854 solid 1px;
  }

  button{
        border: solid 1px rgb(141, 141, 141);
        background: #505F98;
        padding: 10px 10px 10px 10px;
        border-radius: 10px;
        color: white;
        font-weight: 900;
        cursor: pointer;
    }

    button:hover{
      background: #5C699E;
    }

  .result{
    display: flex;
    flex-direction: column;
    gap: 100px;
  }

  .result p{
    font-size: 50px;
    font-weight: 900;
    color: #505F98;
  }

  .result h4{
    font-size: 30px;
    color: #D47C00;
  }

  .history__modal{
    padding: 30px 90px;
    justify-content: center; 
    align-items: center;
    position:fixed;
    top:50%;
    left:50%;
    width: 85%;
    height: 85%;
    transform: translate(-50%, -50%) scale(0);
    visibility: hidden;
    opacity: 0;
    background-color: white;
    z-index: 100;
    border-right:none;
    transition: 3s;
    border: solid #505F98 3px;
    overflow: scroll;
}
#active{
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
}

.history__modal a{
    position: absolute; 
    display: block;
    width: 30px;
    height: 30px;
    background-color: #f8ab40;
    top: 30px;
    right: 30px;
    border: none;
    padding: 20px;
    border-radius: 50px;
    cursor: pointer;
}

.history__modal a::after, .history__modal a::before{
    content: '';
    width: 30px;
    height: 4px;
    background-color: #505F98;
    border-radius: 30px;
    position: absolute;
    top: 50%;
    left: 50%; 

}
.history__modal a::after{
    transform: translate(-50%, -50%) rotate(-45deg);
}

.history__modal a::before{
    transform: translate(-50%, -50%) rotate(45deg);
}
</style>