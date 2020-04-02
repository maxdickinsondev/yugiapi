import styled from 'styled-components';

export const Container = styled.div`
    max-width: 500px;
    background: #eee;
    border-radius: 4px;
    margin: 80px auto;
    padding: 30px;

    h1 {
        font-size: 22px;
        color: #E02041;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
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

export const List = styled.ul`
    margin-top: 30px;
    list-style: none;
    
    li {
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & + li {
            border-top: 1px solid #ddd;
        }
    }

    a {
        text-decoration: none;
        color: #E02041;
    }
`;