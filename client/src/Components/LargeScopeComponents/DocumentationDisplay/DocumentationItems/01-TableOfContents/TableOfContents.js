import React from 'react';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../../ThemeContext';
import { Link } from 'react-router-dom';

import styles from './TableOfContents.module.scss';
import { prepareComponent } from './helpers';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';

class TableOfContents extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<div className={ initObject.tableOfContentsClasses }>
					<ul style={ {width: '100%'} }>
						<h1 style={ {marginBottom: '20px'} }>Documentation - Table of Contents</h1>
						{/* OVERVIEW */}
						<li>
							<Link to='/documentation/894b3efd-02a9-40d7-adee-aab4548c87f6'>
								<p>Overview</p>
							</Link>
							<ul style={ {paddingLeft: '20px'} }>
								<li>
									<Link to='/documentation/97df66de-33fb-48cd-9543-0c698821d5d8'>
										<p>Intro to the Wave Scene</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/71987a6a-61c1-4c2e-8ad6-af16714c583f'>
										<p>Application Overview</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/40edbc86-218c-47c9-b395-7a87c98a1fbe'>
										<p>Application Scope</p>
									</Link>										
									<ul style={ {paddingLeft: '20px'} }>
										<li>
											<Link to='/documentation/85aed067-0172-493f-8660-b1e1d825dbb1'>
												<p>Technical Scope</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/ec8c2776-abdf-4a58-b7ed-c1e62ef56e64'>
												<p>Feature Scope</p>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link to='/documentation/73627e59-49df-47a8-a0d7-22edd04a7c0c'>
										<p>Tech Stack</p>
									</Link>										
									<ul style={ {paddingLeft: '20px'} }>
										<li>
											<Link to='/documentation/540ce7b9-b00f-41ab-9042-507d781268f9'>
												<p>React</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/09e461f5-baec-4785-b509-ecbcb9980f16'>
												<p>Redux</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/0720c963-f0f3-4097-9011-78aebb9743de'>
												<p>Express</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/4c153909-f42a-4577-8de0-edd069441d97'>
												<p>Neo4J</p>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link to='/documentation/0d209cbd-5b73-4e52-901e-1d012299acfd'>
										<p>Project Structure</p>
									</Link>										
									<ul style={ {paddingLeft: '20px'} }>
										<li>
											<Link to='/documentation/18d1dc66-e33b-4823-bed3-ea4c8b60c553'>
												<p>Overall Directory Structure</p>
											</Link>												
											<ul style={ {paddingLeft: '20px'} }>
												<li>
													<Link to='/documentation/9b5de2da-c1c8-4651-82d2-0c66a410e405'>
														<p>Excluded Items</p>
													</Link>
												</li>
												<li>
													<Link to='/documentation/2c4c531e-e905-41f4-ac7c-bc6018bab0a6'>
														<p>client</p>
													</Link>														
													<ul style={ {paddingLeft: '20px'} }>
														<li>
															<Link to='/documentation/ca7dfe9c-7580-4398-8750-0d205775c5d7'>
																<p>build</p>
															</Link>
														</li>
														<li>
															<Link to='/documentation/3033ce2e-9598-4d6c-9819-9666b49176f4'>
																<p>public</p>
															</Link>
														</li>
														<li>
															<Link to='/documentation/7e34fce7-d704-4d24-9779-0ea55d5a6664'>
																<p>src</p>
															</Link>																
															<ul style={ {paddingLeft: '20px'} }>
																<li>
																	<Link to='/documentation/43b4e475-94f9-4674-840e-0e955238b2aa'>
																		<p>Components</p>
																	</Link>
																</li>
																<li>
																	<Link to='/documentation/1722e2d5-8cb7-48d9-bcf2-333ea54de0ce'>
																		<p>Datasets</p>
																	</Link>
																</li>
																<li>
																	<Link to='/documentation/00bf3d83-f8eb-4dab-ba2d-1e6ffc40dc2c'>
																		<p>Global Styles</p>
																	</Link>
																</li>
																<li>
																	<Link to='/documentation/0772ee70-a178-4be0-8db3-989ae5ca743f'>
																		<p>Helpers</p>
																	</Link>
																</li>
																<li>
																	<Link to='/documentation/bf059259-f7fa-4f97-8bb8-459eb3e2a805'>
																		<p>Redux</p>
																	</Link>
																</li>
																<li>
																	<Link to='/documentation/ca13322a-448f-427c-bdcf-cc16fd2c379f'>
																		<p>index.js</p>
																	</Link>
																</li>
															</ul>
														</li>
													</ul>
												</li>
												<li>
													<Link to='/documentation/28005464-9c1f-413e-952f-d422242ed0ff'>
														<p>Design</p>
													</Link>
												</li>
											</ul>
										</li>
										<li>
											<Link to='/documentation/45631f67-11da-4a24-986a-7ba6dfb4a157'>
												<p>Component Directory Structure</p>
											</Link>
											<ul style={ {paddingLeft: '20px'} }>
												<li>
													<Link to='/documentation/3b75a19f-9373-42d7-889a-47b30f0d2535'>
														<p>Main Component File</p>
													</Link>
												</li>
												<li>
													<Link to='/documentation/b535e44c-5ce5-4e18-9792-5067b7186c71'>
														<p>Stylesheets</p>
													</Link>
												</li>
												<li>
													<Link to='/documentation/070f43b1-72a0-4f64-9293-bd1bec17055c'>
														<p>Helpers</p>
													</Link>
												</li>
												<li>
													<Link to='/documentation/4a1afd52-4735-4f21-a24f-33c112c511aa'>
														<p>Tests</p>
													</Link>
												</li>
												<li>
													<Link to='/documentation/1fd3e88d-cf43-4616-b115-f0bd390585a4'>
														<p>Nested Components</p>
													</Link>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						{/* FRONT END */}
						<li>
							<Link to='/documentation/b7b2a049-cdcb-493f-aa24-29b2bed9ccf8'>
								<p>Front End</p>
							</Link>
							<ul style={ {paddingLeft: '20px'} }>
								<li>
									<Link to='/documentation/f472f77f-cc05-4e04-a779-53cdab8cf280'>
										<p>React</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/8f90509c-c5f9-471c-b068-e616a9679e86'>
										<p>CSS Modules</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/c49b19c1-16d1-4eff-9e92-f2ce76efb402'>
										<p>Global Styles</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/4d3daac5-29e2-4d96-b4bd-9e0ba7b8c133'>
										<p>Color Themes</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/5b0bb77c-efd2-491f-9ef7-9fab84fe4f42'>
										<p>Render-Time Component Preparation</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/b1020f53-578b-4d6b-a112-1ee402e94ead'>
										<p>Implemented Design Patterns</p>
									</Link>
									<ul style={ {paddingLeft: '20px'} }>
										<li>
											<Link to='/documentation/ac20c586-039e-4ea4-9b20-8a41cdab3a38'>
												<p>Buttons</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/80c14b29-aa22-40f8-9672-7314481f5d86'>
												<p>Selection Indicators</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/21a57b18-8be9-45ca-9e79-66b6511e995f'>
												<p>Dividers</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/0b78e43a-9b1f-4544-bb50-5f1772434f29'>
												<p>Search Bar</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/c212d863-a83b-451f-a7a3-93c979ec3d0a'>
												<p>Cradles</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/5998402b-1e69-4095-b7a9-7800e17d0b47'>
												<p>Profile Card</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/6061a33a-2168-4571-8aa7-cf516e0ef601'>
												<p>Card Gallery</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/8f036fd9-596b-40eb-9f79-311e0e9afa79'>
												<p>Graph Visualization</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/fc2898d7-3deb-4816-b30e-1334e7f96ae6'>
												<p>Map</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/cf74736d-037c-45ab-a517-be63fbb05987'>
												<p>Side Menu</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/167985c8-11a5-4b09-be7b-fa176dcef24e'>
												<p>Table</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/22e9e820-5b9c-4688-8f31-7b44a3afe6bd'>
												<p>Tree View</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/a6405a7a-5467-4e28-a388-c48a47284850'>
												<p>Future Components</p>
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						{/* STATE MANAGEMENT */}
						<li>
							<Link to='/documentation/9cb887d0-a6d6-4a68-985b-0d0fb4a6836b'>
								<p>State Management</p>
							</Link>
							<ul style={ {paddingLeft: '20px'} }>
								<li>
									<Link to='/documentation/c51a43be-2a4b-4fac-b40b-ec04e0d64a95'>
										<p>Redux</p>
									</Link>
									<ul style={ {paddingLeft: '20px'} }>
										<li>
											<Link to='/documentation/65220967-8409-48aa-9e1b-1d2e6336a89e'>
												<p>Action Strings</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/b09aa2f2-47cf-4f4d-a429-cc06fe05efff'>
												<p>Action Creators</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/ce206855-3aa3-4e36-8a4a-786e90f1c594'>
												<p>Reducer</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/e46c6933-0081-4811-98ac-c5be389c84b7'>
												<p>Store</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/9f85f9a2-8521-484a-99b6-da43dad32dd2'>
												<p>AppContainer</p>
											</Link>
										</li>
										<li>
											<Link to='/documentation/e0475963-b5b2-4dca-b47d-ac4ef640a65a'>
												<p>Provider</p>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link to='/documentation/b9f85483-d91c-44b7-9723-f9a96632ac65'>
										<p>Local State In Some Components</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/65fab7ed-3225-4ca4-8a08-723406e431eb'>
										<p>Thunk Middleware</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/469a3266-ff6b-4879-948d-616af79f8e39'>
										<p>Future Improvements</p>
									</Link>
								</li>
							</ul>
						</li>
						{/* BACK END */}
						<li>
							<Link to='/documentation/994199e8-5e34-4e9a-8ad7-ba84d1faa851'>
								<p>Back End</p>
							</Link>
							<ul style={ {paddingLeft: '20px'} }>
								<li>
									<Link to='/documentation/25687c4e-20d3-4694-8846-b4a9fdc9e79a'>
										<p>Server</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/27d03266-f7a4-453f-8c4a-9f4f08584f09'>
										<p>Neo4J Database</p>
									</Link>
									<ul style={ {paddingLeft: '20px'} }>
										<li>
											<Link to='/documentation/4d7135a5-91f6-4a70-945c-b4411891ca75'>
												<p>Introduction To Neo4J</p>
											</Link>
											<ul style={ {paddingLeft: '20px'} }>
												<li>
													<Link to='/documentation/70e2dbc6-f34f-4004-936d-f7a708ff76a4'>
														<p>Introduction To Graphs</p>
													</Link>
												</li>
												<li>
													<Link to='/documentation/399b8def-c5cc-4c6a-a9dd-309fe70c758b'>
														<p>Neo4J Implementation</p>
													</Link>
												</li>
												<li>
													<Link to='/documentation/86b92487-31ec-49e9-9818-7919430888ee'>
														<p>Differentiation With Other Database Technology</p>
													</Link>
												</li>
											</ul>
										</li>
										<li>
											<Link to='/documentation/485dc30c-1e72-412e-9fc0-cf065a808c09'>
												<p>Data Model</p>
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link to='/documentation/e24ccfb1-1db5-4543-b598-ade2e289bfd2'>
										<p>Future Improvements</p>
									</Link>
								</li>
							</ul>
						</li>
						{/* DESIGN */}
						<li>
							<Link to='/documentation/8e113667-df9d-44ff-aa7c-6e2f16a96b80'>
								<p>Design</p>
							</Link>
							<ul style={ {paddingLeft: '20px'} }>
								<li>
									<Link to='/documentation/29c796b7-4261-4ccc-b491-8036ac2e4b29'>
										<p>Icon Library</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/d722a88a-4631-435f-bd46-d6606074442a'>
										<p>Fonts</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/98448871-11a4-4c22-bb55-9d2d81ad880c'>
										<p>Color Scheme</p>
									</Link>
								</li>
							</ul>
						</li>
						{/* ROUTING */}
						<li>
							<Link to='/documentation/158df3a4-d696-458e-a710-93395dc90d9e'>
								<p>Routing</p>
							</Link>
							<ul style={ {paddingLeft: '20px'} }>
								<li>
									<Link to='/documentation/839458cc-bc5a-4c3d-b5e9-fecc3642ffd4'>
										<p>Top-Level Application Routing</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/1684177a-80e6-4e13-88a4-71e732e74196'>
										<p>Dynamic Routing</p>
									</Link>
								</li>
							</ul>
						</li>
						{/* TESTING */}
						<li>
							<Link to='/documentation/2ddc812b-2390-4664-a2f0-d214dfe7b8ea'>
								<p>Testing</p>
							</Link>
							<ul style={ {paddingLeft: '20px'} }>
								<li>
									<Link to='/documentation/bee814cf-7163-4252-b9f2-13630deadce1'>
										<p>Smoke Tests</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/257a77f5-2601-4888-9fe2-1e0744f0d3cf'>
										<p>Future Improvements</p>
									</Link>
								</li>
							</ul>
						</li>
						{/* ACCESSIBILITY */}
						<li>
							<Link to='/documentation/64b76bcd-455f-46e7-b2c1-9ced5dcda550'>
								<p>Accessibility</p>
							</Link>
							<ul style={ {paddingLeft: '20px'} }>
								<li>
									<Link to='/documentation/04bb3ca7-1c19-4756-be58-6be49fb4c7b5'>
										<p>Semantic Markup</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/e6e90217-a2d8-4a63-9d89-0a8323959690'>
										<p>Images</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/7d79247b-6e16-4a67-a220-b4c482ff137f'>
										<p>Color Contrast</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/c5e98afe-c86a-4406-afc1-6a62d24c7553'>
										<p>Future Improvements</p>
									</Link>
								</li>
							</ul>
						</li>
						{/* SECURITY */}
						<li>
							<Link to='/documentation/6a91f5a4-03e4-43e2-8fee-34e8a51fcdfc'>
								<p>Security</p>
							</Link>
							<ul style={ {paddingLeft: '20px'} }>
								<li>
									<Link to='/documentation/5567a38b-c60c-46cb-9106-ca0efd5fedc7'>
										<p>Feature Scope</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/ca34616f-e233-4cf6-a5cb-a50a2a00fa20'>
										<p>Anchor Links</p>
									</Link>
								</li>
							</ul>
						</li>
						{/* FUTURE IMPROVEMENTS */}
						<li>
							<Link to='/documentation/f111f51d-4c5b-4bee-ada4-211d36359ce9'>
								<p>Future Improvements</p>
							</Link>
						</li>
						{/* ACTIVE PROBLEM AREAS */}
						<li>
							<Link to='/documentation/0443e5d2-3289-4fda-9086-8bf4779cc00a'>
								<p>Active Problem Areas</p>
							</Link>
							<ul style={ {paddingLeft: '20px'} }>
								<li>
									<Link to='/documentation/e3f30382-9da2-4d08-a3b1-bb6899b34a86'>
										<p>React Refs</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/44e61326-d324-4563-9792-f481dc7ad1f4'>
										<p>SVG Rendering</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/9ed15eea-a75b-4c78-9da2-d1bf0c3ab741'>
										<p>Linting Issues</p>
									</Link>
								</li>
								<li>
									<Link to='/documentation/e555a550-4c90-4d84-942b-d5afde3bbdf1'>
										<p>Card Gallery</p>
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</FromTheTopCradle>
		);
	}
}

TableOfContents.contextType = ThemeContext;

export default TableOfContents;

