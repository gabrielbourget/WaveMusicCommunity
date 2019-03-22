import React from 'react';
import ClassNames from 'classnames';
import { ThemeContext } from '../../ThemeContext';

import styles from './Footer.module.scss';
import WaveIconDarkTheme from './SVG/WaveIcon/WaveIconDarkTheme';
//import { ReactComponent as WaveIconDarkTheme } from './SVG/WaveIcon/WaveIconDarkTheme.svg';
import { ReactComponent as  WaveIconLightTheme } from './SVG/WaveIcon/WaveIconLightTheme.svg';

import IconDisplay from '../Icons/IconDisplay/IconDisplay';
import Paragraph from '../TextLayout/Paragraph/Paragraph';
import OutlineButton from '../Buttons/OutlineButton/OutlineButton';

class Footer extends React.Component {
	render() {

		const themeClass = (this.context === 'dark') ? styles.darkTheme : styles.lightTheme;
		const footerClasses = ClassNames(styles.footer, themeClass); 

		return (
			<div className={ footerClasses }>
				<div className={ styles.logo }>
					<IconDisplay
						size='75px'
						darkTheme={ <WaveIconDarkTheme/> }
						lightTheme={ <WaveIconLightTheme/> }
					/>

					{/*<img src="./SVG/WaveIcon/WaveIconDarkTheme.svg" alt=""/>*/}
				</div>
				<div className={ styles.footerInfo }>
					<div className={ styles.description }>
						<Paragraph fontSize='1.5rem'>
							Wavecity is developed and maintained by Gabriel Bourget. 
							While this application serves primarily as a web development
							portfolio project at the moment, I'm hoping to add increasing
							functionality to it as time goes on.
						</Paragraph>
					</div>
					<div className={ styles.links }>
						<a
							href='https://www.github.com/gabrielbourget/WaveMusicCommunity'
							target='_blank'
							rel='noopener noreferrer'
						>
							<OutlineButton
								text='Github Repository'
								shape='rounded'
								onClick={ () => {} }
							/>
						</a>
						<OutlineButton
							text='Home'
							shape='rounded'
							onClick={ () => {} }
						/>	
						<OutlineButton
							text='About'
							shape='rounded'
							onClick={ () => {} }
						/>	
						<OutlineButton
							text='Documentation'
							shape='rounded'
							onClick={ () => {} }
						/>							
					</div>
				</div>
			</div>
		);
	}
}

Footer.contextType = ThemeContext;

export default Footer;
