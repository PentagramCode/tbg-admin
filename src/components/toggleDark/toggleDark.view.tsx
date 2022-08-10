import { useEffect, useState } from 'react';

// Styles
import './toggleDark.style.scss';

// Interfaces
import { IToggleDark } from '../../interfaces/layout';

export const ToggleDark : React.FC<IToggleDark> = ({ className }) => {

	const [theme, setTheme] = useState<string>('light_mode');

	const themeChange = () => {
		document.body.classList.toggle('dark-theme-variables');

		if (theme === 'light_mode') {
			setTheme('dark_mode');
			localStorage.setItem('theme', 'dark_mode');
		}

		if (theme === 'dark_mode') {
			setTheme('light_mode');
			localStorage.setItem('theme', 'light_mode');
		}
	};

	useEffect(() => {
		const theme = localStorage.theme;
		if (theme) {
			if (theme === 'dark_mode') {
				document.body.classList.add('dark-theme-variables');
				setTheme(theme);
			} else {
				document.body.classList.remove('dark-theme-variables');
				setTheme(theme);
			}
		}
	}, [theme]);

	return (
		<div className={`${ className } theme-toggler`} onClick={themeChange}>
			<span
				className={`material-icons-sharp ${
					theme === 'light_mode' && 'active'
				}`}
			>
                light_mode
			</span>
			<span
				className={`material-icons-sharp ${
					theme === 'dark_mode' && 'active'
				}`}
			>
               	 dark_mode
			</span>
		</div>
	);
};
