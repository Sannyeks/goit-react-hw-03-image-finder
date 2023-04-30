import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';

import { AppContainer } from 'App.styled';

export class App extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { query } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={query} />
        <ToastContainer autoClose={3000} theme="colored" />
      </AppContainer>
    );
  }
}
