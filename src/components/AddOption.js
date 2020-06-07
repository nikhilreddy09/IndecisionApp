import React from "react";
export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  formsubmit = (e) => {
    e.preventDefault();
    const opt = e.target.elements.option.value.trim();
    const error = this.props.add(opt);
    this.setState(() => ({ error }));
  };
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form onSubmit={this.formsubmit} className="add-option">
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}
