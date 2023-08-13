<template>
    <NavBar/>
    <main>
        <div class="container">
            <div class="head">
                <h1>CONVERSION</h1>
                <h5>Convertissez vos monnaies selon la/les devises voulue(s)</h5>
                <button @click="openModal">Historique des Conversions</button>

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
                            <th>ID Utilisateurs</th>
                        </thead>
                        <tbody>
                            <tr v-for="element in historique">
                                <td>{{element.id}}</td>
                                <td>{{element.created_at}}</td>
                                <td>{{element.depart_value}}</td>
                                <td>{{element.first_currency }}</td>
                                <td>{{element.second_currency}}</td>
                                <td>{{ element.user_id }}</td>
                            </tr>
                        </tbody>
                    </table>
                <a @click="closeModal"></a>
                </div>
            </div>
            
            
        </div>
    </main>
</template>

<script setup lang = "ts">
    import NavBar from '@/components/NavBar.vue';
    import { useHistoryStore } from '@/stores/CurrencyHistory';
    import { storeToRefs } from 'pinia';
    import { onMounted } from 'vue';
    import CurrencyForm from '@/components/CurrencyForm.vue';
    import { ref } from 'vue';


    const {initialise, hiddenHistory, addHistory} = useHistoryStore()
    const {historique} = storeToRefs(useHistoryStore())

    const createHistory = async (historical) =>{
        await addHistory(historical)
    }

    const hiddeHistory = async () =>{
        await hiddenHistory()
    }
    hiddeHistory()
    
    onMounted(async() =>{
        await initialise()
    })

    const emits = defineEmits(['submit'])

    const historyData = ref({
    depart_value: "",
    first_currency: "",
    second_currency: "",
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

button{
  padding: 6px;
  border: #f8ab40 solid 1px;
  background: none;
  cursor: pointer;
}

.head{
    text-align: center;
    padding-top: 50px;
}

.head h5{
    margin-top: 30px;
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