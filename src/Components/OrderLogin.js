import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import styles from '../assets/css/OrderLogin.module.css';
import Wrapper from "./Wrapper";
import Header from "./Header";
import Cart from "./Cart";

const OrderLogin = () => {
  return (
      <Wrapper>
        <Header/>
        <div className={styles.container}>
          <section className={styles.orderLogin}>
            <h1 className={styles.srOnly}>회원 비회원 결제</h1>
            <div className={styles.container}>
              <Login />
              <div>
                {/* Link */}
                <button
                    type="button"
                    className={styles.button}
                >
                  비회원 주문하기
                </button>
                <div className={styles.links}>
                  <Link to="/find-id" className={styles.link}>아이디 찾기</Link>
                  <span>|</span>
                  <Link to="/find-id" className={styles.link}>비밀번호 찾기</Link>
                </div>
              </div>
            </div>
          </section>
          <Cart/>
        </div>
      </Wrapper>
  );
}

export default OrderLogin