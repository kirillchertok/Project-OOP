import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './Home.module.css'
import './Home.module.css'
import SelectServicesHome from "./SelectServicesHome/SelectServicesHome"
import Exchange from "./Exchange/Exchange"

export default function Home(){
    return (
        <>
        <header className={styles.header} >

            {/* <div className={styles.div}> */}
                <button className={styles.button} id="leftHeaderIcon">
                    <FontAwesomeIcon icon="fa-solid fa-building-columns" size="3x"/>
                </button>

                <h1 className={styles.h1}>Bank</h1>

                <button className={styles.button} id="rightHeaderIcon">
                    <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" size="3x" />
                </button>
            {/* </div> */}
            
        </header>
        <SelectServicesHome />
        <Exchange />
        <footer>
            <div className={styles.footer}></div>
        </footer>
        </>
    )
}