import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Sidebar from 'containers/SideNav/index';
import Footer from 'components/Footer';

import {
    COLLAPSED_DRAWER,
    FIXED_DRAWER,
} from 'constants/ActionTypes';
import {isIOS, isMobile} from 'react-device-detect';
import asyncComponent from '../util/asyncComponent';


class App extends React.Component {

    render() {
        const {match, drawerType} = this.props;
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'fixed-drawer' : drawerType.includes(COLLAPSED_DRAWER) ? 'collapsible-drawer' : 'mini-drawer';

        //set default height and overflow for iOS mobile Safari 10+ support.
        if (isIOS && isMobile) {
            document.body.classList.add('ios-mobile-view-height')
        } else if (document.body.classList.contains('ios-mobile-view-height')) {
            document.body.classList.remove('ios-mobile-view-height')
        }
        return (
            <div className={`app-container ${drawerStyle}`}>
                <Sidebar/>
                <div className="app-main-container">
                    <main className="app-main-content-wrapper">
                        <div className="app-main-content">
                            <Switch>
                                <Route path={`${match.url}/sample-page`}
                                       component={asyncComponent(() => import('./routes/SamplePage'))}/> <Route
                                component={asyncComponent(() => import('components/Error404'))}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </main>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({settings}) => {
    const {drawerType, navigationStyle, horizontalNavPosition} = settings;
    return {drawerType, navigationStyle, horizontalNavPosition}
};
export default withRouter(connect(mapStateToProps)(App));