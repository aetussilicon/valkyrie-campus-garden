import '../styles/Auth.css';

const Signin = () => {
  return (
    <div className='container-fluid auth-container'>
      <div className='auth-form-container'>
        <form className='auth-form'>
          <h1>Entrar</h1>
          <div className='auth-input'>
            <label
              htmlFor='email'
              className='form-label'>
              Email
            </label>
            <input
              className='form-control'
              type='email'
              id='email'
              name='email'
              placeholder='email@estudante.unisa.br'
            />
          </div>
          <div className='auth-input'>
            <label
              htmlFor='password'
              className='form-label'>
              Senha
            </label>
            <input
              className='form-control'
              type='password'
              id='password'
              name='password'
              placeholder='********'
            />
          </div>
          <button
            className='btn btn-primary auth-button'
            type='submit'>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
