import { ref } from "vue"

import {useStorage} from '@vueuse/core'

const user = ref({
    name: "Bouhari",
    email: "saidou@gmail"
})

const userInfos = useStorage('user', user)

export {userInfos}