import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';

const schema = yup.object().shape({
    mail: yup.string().required("El correo es obligatorio"),
    password: yup.string().required("La contraseña es obligatorio"),
});

const LoginForm = () => {
  
    return (
        <Formik
          validationSchema={schema}
          onSubmit={(values, {resetForm}) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            console.log('Formulario enviado');
          }}
          initialValues={{
            mail: '',
            password: '',
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationFormik03">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="ejemplo@gmail.com"
                    name="mail"
                    value={values.mail}
                    onChange={handleChange}
                    isInvalid={!!errors.mail}
                  />
    
                  <Form.Control.Feedback type="invalid">
                    {errors.mail}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="validationFormik04">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="**********"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <div className="d-grid gap-2"><Button type="submit" variant="danger">Iniciar sesión</Button></div>
              <div className="gtdivider-o" >
                <hr /><span>o</span><hr />
              </div>
              <div className="d-grid gap-2">
                <Button variant="light"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.62z" fill="#4285F4"></path><path d="M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.4 5.4 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z" fill="#34A853"></path><path d="M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z" fill="#FBBC05"></path><path d="M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A9 9 0 0 0 3.96 7.95l3 2.34A5.36 5.36 0 0 1 12 6.58z" fill="#EA4335"></path></svg>Iniciar sesión con Google</Button>
              </div>
            </Form>
          )}
        </Formik>
      );
}

export default LoginForm
