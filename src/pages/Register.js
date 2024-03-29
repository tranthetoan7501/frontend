import styled from 'styled-components';
import { useRef } from 'react';
import Button from '../components/loginform/Button';
import Icon from '../components/loginform/Icon';
import Input from '../components/loginform/Input';
import { useContext } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { AuthContext } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api';

const Register = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();
  const navigate = useNavigate();
  const { notify } = useContext(AuthContext);

  const backgroundUrl = 'Br8.png';
  const FacebookBackground =
    'linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)';
  const InstagramBackground =
    'linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)';
  const TwitterBackground =
    'linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)';

  const loginOnclick = () => {
    navigate('/login');
  };

  const submitHandler = async () => {
    try {
      await signup({
        username: nameInputRef.current.value,
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      });
      notify('Check your verify mail !!!');
      navigate('/login');
    } catch (err) {
      console.log(err.response.data.error);
      notify(err.response.data.error);
    }
  };
  return (
    <Background url={backgroundUrl}>
      <MainContainer>
        <WelcomeText>Welcome</WelcomeText>
        <InputContainer>
          <Input id='username' placeholder='Username' val={nameInputRef} />
          <Input
            type='email'
            id='email'
            placeholder='Email'
            val={emailInputRef}
          />
          <Input
            type='password'
            id='password'
            placeholder='Password'
            val={passwordInputRef}
          />
        </InputContainer>
        <ButtonContainer>
          <Button onClick={submitHandler} content='REGISTER' />
        </ButtonContainer>
        <LoginWith onClick={loginOnclick}>OR LOGIN</LoginWith>
        {/* //<HorizontalRule /> */}
        <IconsContainer>
          <Icon color={FacebookBackground}>
            <FaFacebookF />
          </Icon>
          <Icon color={InstagramBackground}>
            <FaInstagram />
          </Icon>
          <Icon color={TwitterBackground}>
            <FaTwitter />
          </Icon>
        </IconsContainer>
        <ForgotPassword>Forgot Password ?</ForgotPassword>
      </MainContainer>
    </Background>
  );
};

const Background = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: 'Raleway', sans-serif;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 180vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 30%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.a`
  cursor: pointer;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;
export default Register;
