import { Link } from 'react-router-dom';
import Login from './Login';
import styles from '../assets/css/UserLogin.module.css';
import Header from "./Header";
import Wrapper from "./Wrapper";

const UserLogin = () => {
  return (
      <Wrapper>
          <Header/>
          <section className={styles.userLogin}>
              <h1 className={styles.srOnly}>로그인</h1>
              <div className={styles.container}>
                  <Login />
                  <div>
                      <div className={styles.links}>
                          <Link to="/find-id" className={styles.link}>아이디 찾기</Link>
                          <span>|</span>
                          <Link to="/find-id" className={styles.link}>비밀번호 찾기</Link>
                      </div>
                      {/* Link to Sign-up */}
                      <button
                          type="button"
                          className={styles.button}
                      >
                          회원가입
                      </button>
                  </div>
              </div>
          </section>
      </Wrapper>
  );
}

export default UserLogin