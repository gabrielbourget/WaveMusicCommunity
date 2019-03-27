import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';

import FromTheTopCradle from '../Cradles/FromTheTopCradle/FromTheTopCradle';
import FilledButton from '../Buttons/FilledButton/FilledButton';

import styles from './NotFoundPageComponent.module.scss';

class NotFoundPageComponent extends React.Component {
	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const messageClasses = ClassNames(styles.message, themeClass);

		return (
			<FromTheTopCradle>
				<div className={ messageClasses }>
					<p>
						Doesn't seem like that URL points to anywhere in the application. 
						Click the button below to return to the home page. 
					</p>
					<Link to='/'>
						<FilledButton 
							text='HOME'
							onClick={ () => {} }
						/>						
					</Link>
				</div>
			</FromTheTopCradle>
		);
	}
}

NotFoundPageComponent.contextType = ThemeContext;

export default NotFoundPageComponent;
