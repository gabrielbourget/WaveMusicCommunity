import React from 'react';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../../ThemeContext';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';

class SideMenu extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<div className={ initObject.documentationItemClasses }>
					
				</div>
			</FromTheTopCradle>
		);
	}
}

SideMenu.contextType = ThemeContext;

export default SideMenu;