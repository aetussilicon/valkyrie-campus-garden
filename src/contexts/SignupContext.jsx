import { createContext, useEffect, useState } from 'react';
import api from '../Api';

const SignupContext = createContext();

const SignupProvider = ({ children }) => {
  const [signupForm, setSignupForm] = useState({
    fullName: '',
    usertag: '',
    email: '',
    password: '',
    repassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  const signupUser = async () => {
    try {
      const response = await api.post('/auth/signup', signupForm);
      const data = response.data;
      if (response.status === 201) {
        console.log(data);
        alert('Cadastro com sucesso!');
      }
    } catch (error) {
      alert('Erro ao cadastrar usuário!');
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(signupForm);
  });

  return (
    <SignupContext.Provider
      value={{ signupForm, handleInputChange, signupUser }}>
      {children}
    </SignupContext.Provider>
  );
};

export { SignupContext, SignupProvider };
