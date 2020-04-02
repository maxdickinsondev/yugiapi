import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, Form, SubmitButton, List } from './styles';

export default class Main extends Component {
    state = {
        cardName:'',
        cards: []
    }

    componentDidMount() {
        const cards = localStorage.getItem('cards');

        if (cards) {
            this.setState({ 
                cards: JSON.parse(cards)
            });
        }
    }

    componentDidUpdate(_, prevState) {
        const { cards } = this.state;

        if (prevState.cards != cards) {
            localStorage.setItem('cards', JSON.stringify(cards));
        }
    }

    handleInput = e => {
        this.setState({ cardName: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { cardName, cards } = this.state;

        const response = await api.get(`/cardinfo.php?name=${cardName}`);

        const data = response.data[0][0];

        this.setState({
            cards: [...cards, data],
            cardName: ''
        });

        console.log(cards);
    }

    render() {
        const { cardName, cards } = this.state;

        return (
            <Container>
                <h1>Yu-Gi-Oh API</h1>
    
                <Form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={cardName}
                        placeholder="Insira o nome da carta"
                        onChange={this.handleInput}
                    />
    
                    <SubmitButton>
                        <FaSearch />
                    </SubmitButton>
                </Form>
    
                <List>
                   {cards.map(card => (
                        <li key={card.id}>
                            <span>{card.name}</span>
                            <Link to={`/details/${encodeURIComponent(card.name)}`}>Detalhes</Link>
                        </li>
                   ))}
                </List>
            </Container>
        );
    }
} 