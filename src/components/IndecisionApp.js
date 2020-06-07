import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from './OptionModal'
export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  //used when the component is first loaded.
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }
  //used when the componnet is updated
  componentDidUpdate(prevprops, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  //used to delete all options
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };
  //used to delete single option
  deleteSingleoption = (optiontoremove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((optionitem) => {
        return optiontoremove != optionitem;
      }),
    }));
  };
  //used to pick one random option.
  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    this.setState(() => ({
      selectedOption : option
    }))
  };
  //used to add a option
  addOption = (option) => {
    if (!option) {
      return "enter valid value to add.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    } else {
      this.setState((prevState) => ({
        options: prevState.options.concat(option),
      }));
    }
  };

  deleteselectedoption = () => {
    this.setState(() => ({
      selectedOption : undefined
    }))
  }
  // render the parent component
  render = () => {
    const subtitle = "Put your life in the hands of a computer";

    return (
      // passing the other child components.
      <div>
        <Header subtitle={subtitle} />
        {/* passing functions as props to components. */}
        <div className="container">
        <Action
          hasOptions={this.state.options.length > 0}
          pick={this.handlePick}
        />
        <div className="widget">
        <Options
          options={this.state.options}
          delete={this.handleDeleteOptions}
          singledeleteoption={this.deleteSingleoption}
        />
        <AddOption add={this.addOption} />
        </div>
       
        </div>
        
        <OptionModal selectedOptionprop = {this.state.selectedOption} delete = {this.deleteselectedoption} />
      </div>
    );
  };
}
