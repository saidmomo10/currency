<template>
    <NavBar/>
    <main>
        <div class="container">
            <div class="head">
                <h1>CONVERSION</h1>
                <h5>Convertissez vos monnaies selon la/les devises voulue(s)</h5>
                <!-- <button @click="openModal">Historique des Conversions</button> -->
                <button><router-link :to="{path: `/users/${userdata.email}/history`}">Voir l'historique</router-link></button>
            </div>
            <div class="form">
                <CurrencyForm @submit ="createHistory"/>
            </div>
            
            

            <div class="history">
                

                <div v-if="isModalOpen" class="history__modal" id="active">
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>Heure</th>
                            <th>Montant saisi</th>
                            <th>Devise de départ</th>
                            <th>Devise d'arrivée</th>
                        </thead>
                        <tbody v-for="element in historydata">
                            <tr>
                    
                                <td>{{element._id}}</td>
                                <td>{{element.createdAt}}</td>
                                <td>{{element.departValue}}</td>
                                <td>{{element.firstCurrency }}</td>
                                <td>{{element.secondCurrency}}</td>
                            </tr>
                        </tbody>
                    </table>
                <a @click="closeModal"></a>
                </div>
            </div>
            <h1>{{ historydata.firstCurrency }}</h1>
            
        </div>
    </main>
    <Footer/>
</template>

<script setup lang = "ts">
     import NavBar from '@/components/NavBar.vue';
    import Footer from '@/components/Footer.vue'; 
    import CurrencyForm from '@/components/CurrencyForm.vue';
    import axios from 'axios';
    // import router from '@/router';
    import { useRouter } from  'vue-router'
    import { useRoute } from 'vue-router'
    import { ref } from 'vue';

    const userId = ref('')

    const clientHttp = axios.create(
    {
        baseURL: "http://localhost:3000/api/",
        headers: {
            Accept: "application/json",
        }
    }
)

const userdata = ref({
    email: '',
    password: '',
})

const historydata = ref([])

const accessToken = localStorage.getItem('accessToken');
console.log(accessToken);

const user = async ()=>{
    if (accessToken){
        try{
            const response = await clientHttp.get('/UserPage', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
      })
      console.log(response);
      
            if(response.status === 200){
                userdata.value.email = response.data.email
            }
        } catch(error){
            console.log(error);
            
        }
    }
}
user()

    const emits = defineEmits(['submit'])

    const historyData = ref({
    departValue: "",
    firstCurrency: "",
    secondCurrency: "",
    })

    const submitForm = () =>{
        emits ('submit', historyData.value)
    }


    const isModalOpen = ref(false);

    const openModal = () => {
    isModalOpen.value = true;
    };

    const closeModal = () => {
    isModalOpen.value = false;
    };

    // const isTable = ref(false);

    // const openModal = () => {
    // isModalOpen.value = true;
    // };

    // const closeModal = () => {
    // isModalOpen.value = false;
    // };
</script>

<style scoped>

main{
    background-image: url(../assets/img/Pathimg.png);
    background-repeat: no-repeat;
    background-position: right;
    padding: 50px;
    min-height: 100vh;
}


.head{
    text-align: center;
    padding-top: 50px;
}

.head h5{
    margin-top: 30px;
}

button{
        border: solid 1px rgb(141, 141, 141);
        background: #f8ab40;
        padding: 10px 10px 10px 10px;
        border-radius: 10px;
        color: #444854;
        font-weight: 900;
        cursor: pointer;
    }
    
.form{
    padding-top: 50px;
   text-align: center;
}
    .liste{
        display: flex;
        justify-content: space-around;
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
    border: solid #f8ab40 3px;
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
    background-color: #444854;
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

table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
}
table tr th,
td {
    --color-gray : #d7d7d886;
    border: solid 1px var(--color-gray);
    padding: 10px;
    align-items: center;
}
table tr:nth-child(even) td,
thead th {
    background-color:  var(--color-dark);
    color : var(--color-white);
}
</style>