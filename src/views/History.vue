<template>
    <NavBar/>
    <div class="container">
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
    </div>
</template>

<script setup lang="ts">
    import NavBar from '@/components/NavBar.vue';
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
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
const historydata = ref([])
const accessToken = localStorage.getItem('accessToken');
console.log(accessToken);

async function history(){
    if (accessToken){
        try{
            // const email = router.currentRoute.params.email;
            const historyResponse = await clientHttp.get(`history/${route.params.user_id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
      })
      console.log(historyResponse);
      
            if(historyResponse.status === 200){
                historydata.value = historyResponse.data
            }
        } catch(error){
            console.log(error);
            
        }
    }
}
onMounted(() => {
  history();
});
</script>

<style scoped>
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