// import React, { Component }  from 'react';

import React from 'react'
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     filters: [],
  //     selectedFilter: null
  //   };
  // }

  // handleFilterChange = event => {
  //   console.log('new filter: ', event.target.value);
  //   this.setState({ selectedFilter: event.target.value });
  // }

  // render() {
    return (
      <div className="fruit-basket">
        <Filter handleChange={props.updateFilterCallback} filters={props.filters}/>
        <FilteredFruitList
          filter={props.currentFilter} fruit={props.fruit}/>
      </div>
    );
  // }
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: "",
  updateFilterCallback: {}
}

export default FruitBasket;
