import { useState } from 'react'

export default function useSwitch(initialValue = false){

    const [ isOn, setIsOn ] = useState(initialValue)

    //MIO METODO
    // function toggle(){
    //     if(isOn){
    //         setIsOn(false)
    //     } else {
    //         setIsOn(true)
    //     }
    // }
    
    //METODO EFFICACE
    const toggle = () => {
        setIsOn(curr => !curr)
    }

    return [ isOn, toggle ] 

}