

class Visible extends React.Component {
    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
                change : false
        }
    }
    toggle() {

        this.setState((prevState) => {
            return {
                change : !prevState.change
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}> {this.state.change ? 'Hide Details' : 'Show Details'} </button>
                {this.state.change ? <p>These are the details</p> : <p></p>}
            </div>
        )
    }
}

ReactDOM.render(<Visible/>, document.getElementById('id1'))