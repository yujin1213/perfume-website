import {Link} from "react-router-dom";
import { useState } from "react";

import styles from '../assets/css/Main.module.css'
import main_logo from "../assets/images/main_logo.png";

const Main = () => {
    const [searchWord, setSearchWord] = useState("");

    return(
        <div className="Main">
            <div className={styles.head_container}>
                <div className={styles.login_box}>
                    <Link to={"/login"} className={styles.text}>로그인</Link>
                    <p className={styles.text}>/</p>
                    <Link to={"/join"} className={styles.text}>회원가입</Link>
                </div>
                <div className="logo_box">
                    <Link to={"/"}>
                        <img src={main_logo} alt="logo" />
                    </Link>
                </div>
            </div>
            <div className={styles.search_bar}>
                <input className={styles.search_input} value={searchWord}
                       onChange={(e)=>{setSearchWord(e.target.value);}}/>
            </div>
        </div>
    );
}
export default Main;