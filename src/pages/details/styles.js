import styled from 'styled-components';

export const Container = styled.div`
    max-width: 500px;
    padding: 0 10px 10px;
    background: #eee;
    margin: 100px auto;
    border-radius: 4px;
    display: flex;
    align-items: center;
`;

export const Info = styled.header`
    img {
        min-width: 200px;
        max-width: 200px;
        width: 90%;
        margin-top: 15px;
        margin-right: 30px;
    }
`;

export const InfoList = styled.div`
    strong {
        margin-top: 50px;
        flex: 1;
    }

    p {
        max-width: 250px;
        margin-bottom: 30px;
        flex: 1;
    }

    a {
        color: #E02041;
        text-decoration: none;
        margin-left: 55px;
    }
`;