import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import { Container, Info, InfoList } from './styles';

export default class Details extends Component {
    state = {
        cardsDetails: {}
    }

    async componentDidMount(){
        const { cardsDetails } = this.state;
        const { match } = this.props;

        const cardName = decodeURIComponent(match.params.detail);

        const response = await api.get(`/cardinfo.php?name=${cardName}`);

        console.log(response.data[0][0]);

        const data = response.data[0][0];

        this.setState({ cardsDetails: data });
    }

    render() {
        const { cardsDetails } = this.state;

        return (
            <Container>
                <Info>
                    <img src={cardsDetails.image_url}/>
                </Info>

                <InfoList>
                    <strong> Type </strong>
                    <p> {cardsDetails.type} </p>

                    <strong> Description </strong>
                    <p> {cardsDetails.desc} </p>

                    <Link to="/">Voltar ao deck</Link>
                </InfoList>
            </Container>
        );
    }
}