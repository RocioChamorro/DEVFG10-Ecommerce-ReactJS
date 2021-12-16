import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import RegisterForm from '../form/RegisterForm';

const RegisterScreen = () => {
  return (
    <>
      <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-7 registerImageBackground"></div>
        <div className="col-md-5" >
          <div className="container h-100">
            <div className="row p-5">
              <div className="col-md-2">
                <small><Link to="/auth/login"><i className="fas fa-angle-left"></i> Atrás</Link></small>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-auto">
              <div className="text-center"><img src={logo} alt="logo" className="w-150"/></div>
              <h4>Registra tu cuenta personal</h4>
              <RegisterForm /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default RegisterScreen

