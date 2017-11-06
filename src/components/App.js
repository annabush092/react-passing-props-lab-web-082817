import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    };
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  componentDidMount = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  render() {
    return (
      <FruitBasket updateFilterCallback={this.handleFilterChange} currentFilter={this.state.currentFilter} fruit={this.state.fruit} filters={this.state.filters}/>
    )
  }
}

export default App;
