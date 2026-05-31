import { buildSelector } from "@/shared/lib/store";


export const [userCounterValue, getCounterValue] = buildSelector((state)=> state.counter.value)

