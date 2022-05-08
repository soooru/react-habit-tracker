import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Coding', count: 0 },
      { id: 3, name: 'Running', count: 0 },
    ],
  };
  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count > 0 ? count : 0 };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    const newHabits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits: newHabits });
  };
  handleAdd = (name) => {
    const newHabits = [
      ...this.state.habits,
      { id: Date.now(), name, count: 0 },
    ];
    this.setState({ habits: newHabits });
  };
  handleReset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count > 0) {
        return { ...item, count: 0 };
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
