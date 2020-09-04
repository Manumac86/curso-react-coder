import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Input from "./Input";
import Title from "./Title";
import List from "./List";

/**
 * The App Component.
 *
 * @class App
 * @extends {Component}
 */
export default class App extends Component {
  /**
   * Creates an instance of App.
   * @memberof App
   */
  constructor() {
    super();
    console.log('constructor()');
    /**
     * The App initial state.
     * @memberof App
     */
    this.state = {
      count: 0
    }
    /**
     * Minimum value for counter.
     */ 
    this.minCounter = 0;
    /**
     * Minimum value for counter.
     */ 
    this.maxCounter = 10;
    /**
     * The dictionary to handle change on the input Component.
     */ 
    this.handleChange = this.handleChange.bind(this);

    this.data = [
      {id: '1', name: 'producto1'},
      {id: '2', name: 'producto2'},
      {id: '3', name: 'producto3'}
    ];
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  componentWillUnmount() {
    console.log('componentWillunmount()');
    debugger;
  }

  /**
   * Handles the state change of the input element.
   *
   * @param {Event} event  The change event.
   * @memberof App
   */
  handleChange = (event) => {
    this.setState({
      count: event.target.value
    });
  }

  /**
   * Handles the add action in the Button.
   *
   * @memberof App
   */
  handleAdd = () => {
    if(this.state.count < this.maxCounter) {
      this.setState((state) => ({
        count: state.count + 1
      }));
    }
  }
  
  /**
   * Handles the Substract action in the Button.
   *
   * @memberof App
   */
  handleSubstract = () => {
    //if(this.state.count > this.minCounter) {
      this.setState((state) => ({
        count: state.count - 1
      }));
    //}
  }
 
  /**
   * Renders the App Component.
   *
   * @return {JSX}  The App component to render. 
   * @memberof App
   */
  render() {
    console.log('render()');
    return (
      <div className="App">
        <Title>
          <h1>Este es un Título</h1>
        </Title>
        <Button
          onClick={this.handleSubstract}
          sign={"-"}
        />
        <Input
          count={this.state.count}
          handleChange={this.handleChange}
        />
        <Button
          onClick={this.handleAdd}
          sign={"+"}
        />
        <List data={this.data} />
      </div>
    );
  }
}