import React, {useState} from "react";
export default function useScrollEffect(currentScrollPosition){
    const [prevPostition, setPrevPosition] = useState(0)
    const [scrollDirection, setScrollDirection] = useState('up')
    if(currentScrollPosition > prevPostition) setScrollDirection(() => 'down')
    else if(currentScrollPosition <= prevPostition) setScrollDirection(() => 'up')
    setPrevPosition(() => currentScrollPosition)
    return scrollDirection
}