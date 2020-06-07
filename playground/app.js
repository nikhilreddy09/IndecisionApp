// defining the parent component
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    // binding this for all the functions
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.deleteSingleoption = this.deleteSingleoption.bind(this);
    // declaring options state
    this.state = {
      options: []
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch(e) {

    }
  }
  componentDidUpdate(prevprops, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  deleteSingleoption(optiontoremove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((optionitem) => {
        return optiontoremove != optionitem;
      }),
    }));
  }

  handlePick() {
    console.log("click");
    const random = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[random]);
  }

  addOption(option) {
    if (!option) {
      return "enter valid value to add.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    } else {
      this.setState((prevState) => ({
        options: prevState.options.concat(option),
      }));
    }
  }
  // render the parent component
  render() {
    const subtitle = "Put your life in the hands of a computer";

    return (
      // passing the other child components.
      <div>
        <Header subtitle={subtitle} />
        {/* passing functions as props to components. */}
        <Action
          hasOptions={this.state.options.length > 0}
          pick={this.handlePick}
        />
        <Options
          options={this.state.options}
          delete={this.handleDeleteOptions}
          singledeleteoption={this.deleteSingleoption}
        />
        <AddOption add={this.addOption} />
      </div>
    );
  }
}



const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision APP",
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.pick} disabled={!props.hasOptions}>
        What should i do ?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.delete}>Remove All</button>
      {props.options.map((option) => (
        <Option
          key={option}
          option={option}
          single={props.singledeleteoption}
        />
      ))}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      Option : {props.option}
      <button
        onClick={(e) => {
          props.single(props.option);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.formsubmit = this.formsubmit.bind(this);
    this.state = {
      error: undefined,
    };
  }
  formsubmit(e) {
    e.preventDefault();
    const opt = e.target.elements.option.value.trim();
    const error = this.props.add(opt);
    this.setState(() => ({ error }));
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.formsubmit}>
          <input type="text" name="option" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("id1"));
