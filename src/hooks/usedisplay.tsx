import { useState } from "react"
import { useBetween } from 'use-between';
const useDisplay = ()=>{
    const [display, setDisplay] = useState<boolean>(false)
    return {display,setDisplay}
}
const useDisplayFormState = () => useBetween(useDisplay);
export {useDisplayFormState}