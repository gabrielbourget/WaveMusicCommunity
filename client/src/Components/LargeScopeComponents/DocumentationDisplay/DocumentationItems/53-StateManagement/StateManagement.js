import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../../ThemeContext';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';

class StateManagement extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
				</article>
			</FromTheTopCradle>
		);
	}
}

StateManagement.contextType = ThemeContext;

export default StateManagement;
