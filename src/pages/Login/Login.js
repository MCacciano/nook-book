import { Redirect } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import SignUpform from '../../components/SignUpForm';

const Login = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user ? (
    <Redirect to='/' />
  ) : (
    <div className='w-full h-full flex flex-col md:flex-row justify-center items-center'>
      <div className='w-full max-w-screen-lg flex justify-around'>
        <LoginForm className='my-4 md:my-0' />
        <SignUpform className='my-4 md:my-0' />
      </div>
    </div>
  );
};

export default Login;
