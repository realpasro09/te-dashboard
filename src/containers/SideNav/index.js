import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Drawer from "rc-drawer";
import { Config } from "constants/ThemeColors";
import SidenavContent from "./SidenavContent";
import SidenavLogo from "components/SidenavLogo";
import {
  COLLAPSED_DRAWER,
  FIXED_DRAWER,
  HORIZONTAL_NAVIGATION
} from "constants/ActionTypes";
import { toggleCollapsedNav, updateWindowWidth } from "actions/Setting";

class SideNav extends React.PureComponent {
  onToggleCollapsedNav = e => {
    const val = !this.props.navCollapsed;
    this.props.toggleCollapsedNav(val);
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.props.updateWindowWidth(window.innerWidth);
    });
  }

  render() {
    const sideBarStyle = {
      width: "250px",
      color: "white",
      backgroundColor: "gray"
    };
    const {
      navCollapsed,
      drawerType,
      width,
      isDirectionRTL,
      navigationStyle
    } = this.props;
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
        Sidebar Content
      </div>
    );
  }
}

const mapStateToProps = ({ settings }) => {
  const {
    navCollapsed,
    drawerType,
    width,
    isDirectionRTL,
    navigationStyle
  } = settings;
  return { navCollapsed, drawerType, width, isDirectionRTL, navigationStyle };
};

export default withRouter(
  connect(
    mapStateToProps,
    { toggleCollapsedNav, updateWindowWidth }
  )(SideNav)
);
