import { Fragment } from 'react';

// Components
import { ToggleDark } from '@/components/toggleDark';

// Style
import './login.style.scss';

const Login = () => {
	return (
		<Fragment>
			<ToggleDark className='toggle-login' />
			<div className="login-container">
				<div className="container-form">
					<form>
						<h2>Sign In</h2>
						<p>
							Welcome to TBG Dashboard, please, provide login credential to proceed and have access to all our services
						</p>
						<div className="form-group">
							<span className="material-icons-sharp left">
								alternate_email
							</span>
							<input type="email" placeholder='Email'/>
						</div>
						<div className="form-group">
							<span className="material-icons-sharp left">
								lock
							</span>
							<input type="password" placeholder='Password' />
							{/* <span className="material-icons-sharp right">
								visibility
							</span> */}
						</div>
						<button>Login</button>
					</form>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7380ec" fillOpacity="1" d="M0,32L48,58.7C96,85,192,139,288,170.7C384,203,480,213,576,192C672,171,768,117,864,112C960,107,1056,149,1152,160C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
			</div>
		</Fragment>
	);
};

export default Login;
