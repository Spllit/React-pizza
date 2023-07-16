import styles from './BurgerCategories.module.scss'
import { useSelector } from 'react-redux'

export default function BurgerCategories({setOpen}){
    const category = useSelector(state => state.filter.category)
    return(
        <button 
        type='button'
        className={styles.burger}
        onClick = {() => setOpen()}
        >
            <svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 11a1 1 0 1 0 0 2zm14 2a1 1 0 1 0 0-2zM5 6a1 1 0 0 0 0 2zm14 2a1 1 0 1 0 0-2zM5 16a1 1 0 1 0 0 2zm14 2a1 1 0 1 0 0-2zM5 13h14v-2H5zm0-5h14V6H5zm0 10h14v-2H5z" fill="currentColor"/></svg>
            <span>{category}</span>
        </button>
    )
}