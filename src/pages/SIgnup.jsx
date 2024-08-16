import '../styles/Auth.css';

const Signup = () => {
  return (
    <div className='container-fluid auth-container'>
      <div className='auth-form-container'>
        <form className='auth-form'>
          <h1>Cadastro</h1>
          <div className='auth-input'>
            <label
              htmlFor='fullName'
              className='form-label'>
              Nome Completo
            </label>
            <input
              className='form-control'
              type='text'
              id='fullName'
              name='fullName'
              placeholder='Pedro da Silva'
            />
          </div>
          <div className='auth-input'>
            <label
              htmlFor='usertag'
              className='form-label'>
              Username
            </label>
            <input
              className='form-control'
              type='usertag'
              id='usertag'
              name='usertag'
              placeholder='pedro_silva'
            />
          </div>
          <div className='auth-input'>
            <label
              htmlFor='email'
              className='form-label'>
              Email Institucional
            </label>
            <input
              className='form-control'
              type='text'
              id='email'
              name='email'
              placeholder='exemplo@estudante.unisa.br'
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
          <div className='auth-input'>
            <label
              htmlFor='repassword'
              className='form-label'>
              Confirmar Senha
            </label>
            <input
              className='form-control'
              type='repassword'
              id='repassword'
              name='repassword'
              placeholder='********'
            />
          </div>
          <button
            className='btn btn-primary auth-button'
            type='submit'>
            Registrar
          </button>
        </form>
        <div className='auth-redirect'>
          <span>
            Já tem uma conta?
            <a href='/'> Entre</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
