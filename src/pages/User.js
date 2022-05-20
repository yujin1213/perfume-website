import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Wrapper from '../Components/Wrapper';
import Header from '../Components/Header';
import UserLogin from '../Components/UserLogin';
import FindId from '../Components/FindId';
import FindPw from '../Components/FindPw';

const User = () => {
  return (
      <Wrapper>
        <Header />
        <Routes>
          <Route exact path="/user" element={<UserLogin />} />
          <Route exact path="/user/find-id" element={<FindId />} />
          <Route exact path="/user/find-pw" element={<FindPw />} />
        </Routes>
      </Wrapper>
  );
}

export default User