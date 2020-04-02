import styled from 'styled-components';

export const Container = styled.div`
    max-width: 500px;
    background: #eee;
    border-radius: 4px;
    margin: 80px auto;
    padding: 30px;

    h1 {
        font-size: 22px;
        color: #000;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }
`;

export const SubmitButton = styled.button`
    background: #E02041;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;

    svg {
        color: #fff;
    }
`;