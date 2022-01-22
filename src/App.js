import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import Question1 from './components/pages/Question1';
import Question2 from './components/pages/Question2';
import Question3 from './components/pages/Question3';
import './App.css';

const App = () => {
	return (
		<Router>
			<Fragment>
				<Header />
				<div className='container'>
					<Switch>
						<Route exact path='/question1' component={Question1} />
						<Route exact path='/question2' component={Question2} />
						<Route exact path='/question3' component={Question3} />
					</Switch>
				</div>
			</Fragment>
		</Router>
	);
};

export default App;
