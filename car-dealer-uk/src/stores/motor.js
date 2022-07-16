import { defineStore } from 'pinia'
import axios from "axios";

export const motorStore = defineStore({
    id: 'cars',
    state: () => ({
        cars: {}
    }),
    getters: {

    },
    actions: {
       async  getBrands(){
            await axios.get('http://localhost:8000/data').then((resp)=>{
                if(!resp){
                    console.log('Error getting Data')
                }else{
                    this.brands= resp.data
                    console.log(this.cars)
                }

            })
        }
    }
})
