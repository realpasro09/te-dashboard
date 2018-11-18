import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { COLLAPSED_DRAWER, FIXED_DRAWER, HORIZONTAL_NAVIGATION } from 'constants/ActionTypes';
import { toggleCollapsedNav, updateWindowWidth } from 'actions/Setting';
import AddContact from '../../components/contact/AddContact';

class SideNav extends React.PureComponent {
	onToggleCollapsedNav = (e) => {
		const val = !this.props.navCollapsed;
		this.props.toggleCollapsedNav(val);
	};

	constructor(props) {
		super(props);
		this.state = {
			editProfileState: false,
		}
	}

	componentDidMount() {
		window.addEventListener('resize', () => {
			this.props.updateWindowWidth(window.innerWidth)
		});
	}

	onProfileClose = () => {
		this.setState({ editProfileState: false });
	};

	onEditProfile = () => {
		this.setState({ editProfileState: true });
	};

	render() {
		const sideBarStyle = {
			width: '250px',
			color: 'white',
			backgroundColor: 'gray'
		};
		const { editProfileState } = this.state;
		const { navCollapsed, drawerType, width, isDirectionRTL, navigationStyle } = this.props;
		let drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'd-xl-flex' : drawerType.includes(COLLAPSED_DRAWER) ? '' : 'd-flex';
		let type = true;
		if (drawerType.includes(COLLAPSED_DRAWER) || (drawerType.includes(FIXED_DRAWER) && width < 1200)) {
			type = false;
		}
		if (navigationStyle === HORIZONTAL_NAVIGATION) {
			drawerStyle = "";
			type = false;
		}

		return (
			<div style={sideBarStyle}>
				<button onClick={this.onEditProfile}>Card</button>
				{editProfileState &&
					<AddContact open={editProfileState} onContactClose={this.onProfileClose} />}
			</div>
		);
	}
}

const mapStateToProps = ({ settings }) => {
	const { navCollapsed, drawerType, width, isDirectionRTL, navigationStyle } = settings;
	return { navCollapsed, drawerType, width, isDirectionRTL, navigationStyle }
};

export default withRouter(connect(mapStateToProps, { toggleCollapsedNav, updateWindowWidth })(SideNav));
