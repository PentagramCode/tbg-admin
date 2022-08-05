import { Link, Route, Routes } from 'react-router-dom';

// Components
import { Layout } from '@/components/layout';
import Dashboard from '@/pages/dashboard';

import './App.scss';

const App = () => {
	return (
		<div className='container-app'>
			<Routes>
				<Route path="/" element={<Layout />}> 
					<Route index element={<Dashboard />} />
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</div>
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
