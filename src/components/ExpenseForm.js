import React from 'react'
import moment from 'moment'
import {SingleDatePicker} from 'react-dates'



export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            description : props.expense ? props.expense.description : '',
            note : props.expense ? props.expense.note : '',
            amount : props.expense ? (props.expense.amount/100).toString() : '',
            createdAt : props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocussed : false,
            error : ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }
    onNoteChange = (e) => {
        const noted = e.target.value
        this.setState(() => ({note : noted }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}))
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}))
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calenderFocussed : focused}))
    }
    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error : 'please provide description and values'}))
        } else {
            this.setState(() => ({error : ''}))
            this.props.onSubmit({
                description : this.state.description,
                note : this.state.note,
                amount : parseFloat(this.state.amount,10)*100,
                createdAt : this.state.createdAt.valueOf()
                })
        }

    }
    render(){
        return (
            <div>
                {this.state.error ? <p>Please enter valid values</p> : <p>Welcome</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="description" autoFocus 
                    value={this.state.description}
                    onChange={this.onDescriptionChange} 
                    />
                    <input type="number" placeholder="amount"
                     value={this.state.amount} 
                     onChange = {this.onAmountChange}    
                     /> 
                     <SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calenderFocussed}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths = {1}
                        isOutsideRange={() => false } 
                     />
                    <textarea placeholder="Add a note for your expense" value={this.state.note} onChange={this.onNoteChange} >
                    </textarea>
                    <button>Add expense</button>
                </form>
            </div>
        )
    }
}