import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:4567/graphql',
});

window.onload = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <List />
    </ApolloProvider>,
    document.getElementById('container')
  );
};