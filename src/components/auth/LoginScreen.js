import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import LoginForm from '../form/LoginForm';

const LoginScreen = () => {
  return (
    <>
      <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-7 loginImageBackground"></div>
        <div className="col-md-5" >
          <div className="container h-100">
            <div className="row p-5">
            <div className="col-md-2">
                <small><Link to="/"><i className="fas fa-angle-left"></i> Atrás</Link></small>
              </div>
              <div className="col-md-10 text-lg-end">
                <small>¿Eres nuevo en Ineed? <Link to="/auth/register">Regístrate</Link></small>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-auto">
              <div className="text-center"><img src={logo} alt="logo" className="w-150"/></div>
              <h4>Iniciar sesión en tu cuenta</h4>
              <LoginForm /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginScreen

