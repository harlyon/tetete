import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<nav className='navbar bg-primary'>
		<h1>
			<i className='fab fa-react' /> My React App
		</h1>
		<ul>
			<li>
				<Link to='/question1'>Question One</Link>
				<Link to='/question2'>Question Two</Link>
				<Link to='/question3'>Question Three</Link>
			</li>
		</ul>
	</nav>
);

export default Header;
