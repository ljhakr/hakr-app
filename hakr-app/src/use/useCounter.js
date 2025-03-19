import {ref} from "vue";

export function useCounter(){
    const counter = ref(0)

    const increaseCount = () => { counter.value++ }

    return {
        increaseCount,
        counter
    }
}
