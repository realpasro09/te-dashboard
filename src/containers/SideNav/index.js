import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Drawer from "rc-drawer";
import { Config } from "constants/ThemeColors";
import SidenavContent from "./SidenavContent";
import SidenavLogo from "components/SidenavLogo";
import { listProfiles } from "../../actions/General";
import {
	COLLAPSED_DRAWER,
	FIXED_DRAWER,
	HORIZONTAL_NAVIGATION
} from "constants/ActionTypes";
import { toggleCollapsedNav, updateWindowWidth } from "actions/Setting";
import CardLayout from "../../components/CardLayout"
import ListCard from "../../components/Cards/List"
import { Card } from "reactstrap";
import AddContact from '../../components/contact/AddContact'

class SideNav extends React.PureComponent {
	onToggleCollapsedNav = e => {
		const val = !this.props.navCollapsed;
		this.props.toggleCollapsedNav(val);
	};

	constructor(props) {
		super(props);
		this.state = {
			editProfileState: false,
			id: null
		}
	}

	componentDidMount() {
		window.addEventListener("resize", () => {
			this.props.updateWindowWidth(window.innerWidth);
		});
		this.props.listProfiles();
	}

	onProfileClose = () => {
		this.setState({ editProfileState: false });
	};

	onEditProfile = (id) => {
		this.setState({ editProfileState: true, id });
	};

	render() {
		const sideBarStyle = {
			width: "250px",
			color: "white",
			backgroundColor: "gray",
			overflowY: "scroll"
		};
		const {
			navCollapsed,
			drawerType,
			width,
			isDirectionRTL,
			navigationStyle
		} = this.props;
		const { editProfileState } = this.state;
		let drawerStyle = drawerType.includes(FIXED_DRAWER)
			? "d-xl-flex"
			: drawerType.includes(COLLAPSED_DRAWER)
				? ""
				: "d-flex";
		let type = true;
		if (
			drawerType.includes(COLLAPSED_DRAWER) ||
			(drawerType.includes(FIXED_DRAWER) && width < 1200)
		) {
			type = false;
		}
		if (navigationStyle === HORIZONTAL_NAVIGATION) {
			drawerStyle = "";
			type = false;
		}

		return (
			<div style={sideBarStyle}>
				<div className="app-logo">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6 col-sm-12 horizontal-align-center">
							<center>
								<img
									alt="..."
									src="http://via.placeholder.com/200x80"
								/>
							</center>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12">
							<span>
								<center>TE Dashboard</center>
							</span>
						</div>
					</div>
				</div>
				<br />
				{
					this.props.profiles &&
					<ListCard profiles={this.props.profiles} onEditProfile={this.onEditProfile} />}
				{
					editProfileState &&
					<AddContact open={editProfileState} onContactClose={this.onProfileClose} id={this.state.id} />
				}
				<button className="jt-btn jr-btn-primary text-uppercase btn-block btn btn-primary" onClick={() => { this.onEditProfile() }}> Agregar Perfil</button >
			</div >
		);
	}
}

const mapStateToProps = ({ settings, general }) => {
	const {
		navCollapsed,
		drawerType,
		width,
		isDirectionRTL,
		navigationStyle
	} = settings;
	const { profiles } = general;
	return { navCollapsed, drawerType, width, isDirectionRTL, navigationStyle, profiles };
};

export default withRouter(
	connect(
		mapStateToProps,
		{ toggleCollapsedNav, updateWindowWidth, listProfiles },
	)(SideNav)
);
