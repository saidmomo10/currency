import {defineStore} from 'pinia';

export const useUserStore = defineStore('user-store', {

    state: () =>{
        return{
            user:{
                email: "saidmomo@gmail.com",
                name: "bouhari",
                age: 27
            },
        };
    },

    actions:{
        modifyUserName(name: string){
            this.user.name = name
        },
    },

    getters:{
        userName: (state) => state.user.email.split("@")[0],
        userName2(state) {
            return state.user.email.split("@")[0];
        },

        Age:(state) => {
            const age = new Date().getFullYear();
            return age - state.user.age;
        }

    }
})