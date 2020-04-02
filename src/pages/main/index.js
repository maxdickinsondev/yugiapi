import React from 'react';
import { FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
    return (
        <Container>
            <h1>Yu-Gi-Oh API</h1>

            <Form>
                <input 
                    type="text" 
                    placeholder="Insira o nome da carta"
                />

                <SubmitButton>
                    <FaPlus />
                </SubmitButton>
            </Form>
        </Container>
    );
} 