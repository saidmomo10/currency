import {defineStore} from "pinia"
import {supabase} from '@/clients/supabase'
import { ref, onMounted } from 'vue'
import axios from 'axios';


   
        


type History = {
    id? : number;
    created_at:Date;
    depart_value: number;
    first_currency : string;
    second_currency : string;
    user_id: number;
};



export const useHistoryStore = defineStore('CurrencyHistory',()=> {
    const historique =ref<History[]>([]);

    async function initialise(){
        const result = supabase.from ("historique").select('id,created_at,depart_value,first_currency,second_currency,user_id');
        console.log(result);

        const {data, error} = await supabase
        .from("historique")
        .select();
        if(data) {
            historique.value = data;
            console.log(data)
        }
        
    }

    async function hiddenHistory(){
        const user = await supabase.auth.getUser();
      
    const user_id = user.data.user?.id;
     
     console.log(user_id);

    const { data, error } = await supabase
  .from('historique')
  .select('*')
  .eq('user_id', user_id);
    }
    
    

    async function addHistory(historical:History){
        const {data, error} = await supabase.from("historique").insert(historical).select();
        if(data){
            historique.value.push(data[0]);
        }
    }

    return {historique, initialise, hiddenHistory, addHistory};
})



