
class ComponentCounter extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count : 0
        }
    }
    componentDidMount(){
        const number = localStorage.getItem('number')
        const parsedNumber = parseInt(number,10)
        if(!isNaN(parsedNumber)){
            this.setState(() => ({ count : parsedNumber}))
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            const number = this.state.count
            localStorage.setItem('number',number)
    
        }
      
    }
    handleAddOne(){
        this.setState((prevState) => {
            return{
                count : prevState.count + 1
            }
        })
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            }
        })
    }
    handleReset(){
        this.setState(() => {
            return {
                count : 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Counter : {this.state.count} </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}


ReactDOM.render(<ComponentCounter/>,document.getElementById('id1'))
