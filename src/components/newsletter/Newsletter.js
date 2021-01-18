import React from 'react'

/** Bootstrap */
import { Form, Button } from 'react-bootstrap'

import useForm from '../../utils/useForm'

const Newsletter = () => {
    const [data, setData] = useForm({ email: '', first_name: '' });
    const handleSuscribe = (e) => {
        e.preventDefault();
        console.log(data);
        return 1;
        fetch('https://api.mailerlite.com/api/v2/subscribers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-MailerLite-ApiKey': process.env.MAILER_API_KEY,
            },
            body:
                '{"email":"demo@mailerlite.com","name":"John","fields":{"company":"MailerLite"}}',
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Acepto la politica de privacidad" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Newsletter
