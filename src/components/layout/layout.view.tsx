import { Fragment, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

// Components
import { ToggleDark } from '../toggleDark';

// Assets
import Logo from '@/assets/images/logo.png';
import Profile from '@/assets/images/profile-1.jpg';

// Styles
import './layout.style.scss';

// Index
import { menuItems } from '.';

export const Layout = () => {

	const [showMenu, setShowMenu] = useState<boolean>(false);
	const handleMenu = () => setShowMenu(!showMenu);

	return (
		<Fragment>
			<div className='container-layout'>
				<aside className={`${showMenu ? 'md:left-0' : 'md:-left-full'}`}>
					<div className="top">
						<div className="logo">
							<img src={Logo} alt="logo" />
							<h2>
                				TBG <span className="danger">Admin</span>
							</h2>
						</div>
						<div className="close" onClick={handleMenu}>
							<span className="material-icons-sharp">close</span>
						</div>
					</div>
					<div className="sidebar">
						{menuItems.map((item) => (
							<NavLink
								to={item.path}
								className={({ isActive }) => `${isActive && 'active'}`}
								key={item.id}
							>
								<span className="material-icons-sharp">{item.icon}</span>
								<h3>{item.title}</h3>
							</NavLink>
						))}
						<Link to="#">
							<span className="material-icons-sharp">logout</span>
							<h3>Logout</h3>
						</Link>
					</div>
				</aside>

				<main>
					<Outlet />
				</main>

				<div className="right">
					<div className="top">
						<button onClick={handleMenu}>
							<span className="material-icons-sharp">menu</span>
						</button>
						<ToggleDark className="toggle-layout" />
						<div className="profile">
							<div className="info">
								<p>
                  					Hey, <b>Jeronimo</b>
								</p>
								<small className="text-muted">Admin</small>
							</div>
							<div className="profile-photo">
								<img src={Profile} alt="profile-photo" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
