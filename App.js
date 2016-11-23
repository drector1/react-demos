import React from 'react';
//import ReactDOM from 'react-dom';

//		class component can have state

//		rendering two elements must be done using a wrapper.
class App extends React.Component {
	constructor(){
		super();
		this.state = { txt: ''}
		this.update = this.update.bind(this)
	}
	update(e){
		this.setState({txt: e.target.value})
	}
	render(){
		return (
		<div>
		<Widget txt={this.state.txt} update={this.update} />
		<Widget txt={this.state.txt} update={this.update} />
		<Widget txt={this.state.txt} update={this.update} />
		<Widget txt={this.state.txt} update={this.update} />
		</div>
		);
	}
}

class Slider extends React.Component {
	render(){
		<input type="range"
		min="0"
		max="255" 
			onChange={this.props.update} />
	}
}


export default App

//		can create props with expected types
//		can also require a prop to be specified in app

// App.propTypes = {
// 	txt: React.PropTypes.string,
// 	cat: React.PropTypes.number.isRequired
// }

//		can define the default value of a prop

// App.defaultProps ={
// 	txt: 'this is the default txt'
// }

// ReactDOM.render(
// 	<App cat={5} />,
// 	document.getElementById('app')
// );

//		constant variable (stateless function component) does not have state
// const App = () => <h1>Hello All</h1>

//export default App