import { Link, Route, Routes } from 'react-router-dom';

// Components
import { Layout } from '@/components/layout';
import Dashboard from '@/pages/dashboard';
import Login from '@/pages/login';

import './App.scss';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}> 
				<Route index element={<Dashboard />} />
				<Route path="*" element={<NoMatch />} />
			</Route>
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

function NoMatch() {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to="/">Go to the dashboard</Link>
			</p>
		</div>
	);
}

export default App;
