import React from 'react';

class FirstForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [],
      selectType: 'true-false',
      question: '',
    };
  }
  componentWillMount() {
    this.setState({
      forms: this.props.forms,
    })
  }

  changeType = (event, id) => {
    const forms = this.state.forms;
    forms[id].selectType = event.target.value;
    this.setState({
      forms,
      selectType: event.target.value,
    })
  }
  changeQuestion = (event, id) => {
    const forms = this.state.forms;
    forms[id].question = event.target.value;
    this.setState({
      forms,
      question: event.target.value,
    })
  }
  render() {
    const { selectType, forms } = this.state;
    const { addForm, delForm, idArray, idForms, parentNr } = this.props;
    return (
      <div className="frame" id={this.props.idArray}>
        <form className="first">
          <label htmlFor="question">Question</label>
          <input name="question"
            onChange={(p) => this.changeQuestion(p, idArray)}
            value={forms[idArray].question}
          />
          <label htmlFor="type">Type</label>
          <select
            className="select-type"
            onChange={(p) => this.changeType(p, idArray)}
            value={forms[idArray].selectType}
          >
            <option value="true-false">Yes/No</option>
            <option value="text">Text</option>
            <option value="number">Number</option>
          </select>
          <div className="buttons">
            <div className="button" onClick={() => addForm(idForms, 2, selectType, 1, '', parentNr)}>Add Sub-Input</div>
            <div className="button" onClick={() => delForm(idForms)}>Delete</div>
          </div>
        </form>
      </div>
    );
  }
}


export default FirstForm;
