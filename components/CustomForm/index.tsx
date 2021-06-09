import { useState, useEffect, useRef, ChangeEvent } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import Image from 'next/image';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const CustomForm = () => {
  const [values, setValues] = useState(initialValues);
  const [onSubmitting, setOnSubmitting] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);

  const formRendered = useRef(true);

  useEffect(() => {
    if (formRendered.current) {
      setValues(initialValues);
      setOnSubmitting(false);
    }
    formRendered.current = false;
  }, [initialValues]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setValues({ ...values, [name]: value });
  };

  const postMail = async (url = '', data = {}) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch {
      return false;
    }
  };

  const handleSuccess = () => {
    setShowSuccess(true);
    setValues({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setOnSubmitting(false);
  };

  const handleFailed = () => {
    setShowFailed(true);
    setOnSubmitting(false);
    setTimeout(() => setShowFailed(false), 5000);
  };

  const handleSubmit = async (event: any) => {
    if (event) event.preventDefault();
    setOnSubmitting(true);
    const response = await postMail('/api/contact', { values });

    console.log(response);

    if (response) {
      response.success ? handleSuccess() : handleFailed();
    } else {
      handleFailed();
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Group controlId="name">
              <Form.Control
                name="name"
                value={values.name}
                type="text"
                placeholder="Nombre"
                onChange={handleChange}
                required
                disabled={onSubmitting}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="email">
              <Form.Control
                name="email"
                value={values.email}
                type="email"
                placeholder="Email"
                onChange={handleChange}
                required
                disabled={onSubmitting}
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group controlId="subject">
          <Form.Control
            name="subject"
            value={values.subject}
            type="text"
            placeholder="Asunto"
            onChange={handleChange}
            required
            disabled={onSubmitting}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Control
            name="message"
            value={values.message}
            placeholder="Mensaje"
            as="textarea"
            rows={8}
            onChange={handleChange}
            required
            disabled={onSubmitting}
          />
        </Form.Group>
        <div className="text-right">
          <Button variant="primary" type="submit" disabled={onSubmitting}>
            {onSubmitting && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
                className="mr-2"
              />
            )}
            {onSubmitting ? 'Enviando...' : 'Enviar'}
          </Button>
        </div>
        <Modal show={showSuccess} onHide={() => setShowSuccess(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Mensaje enviado</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Muchas gracias por contactarse con nosotros. Le responderemos a la brevedad.</p>
            <div className="text-center">
              <Image
                src="/logo.png"
                alt="Novel Técnica logo"
                width={85}
                height={64}
                layout="intrinsic"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-primary" onClick={() => setShowSuccess(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <Collapse in={showFailed}>
          <div className="mt-2">
            <Alert variant="danger">
              No se pudo enviar el mail. Intenta de nuevo en unos minutos.
            </Alert>
          </div>
        </Collapse>
      </Form>
    </>
  );
};

export default CustomForm;
