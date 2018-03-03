import React from 'react';
import {StackNavigator} from 'react-navigation'
import MainTab from './MainTab'
import PageContent from '../pages/PageContent'
import Login from '../pages/Login'
import RLists from '../pages/RLists'

const MainNav = StackNavigator({
    MainPage: {
        screen: MainTab,
    },
    PageContent: {
        screen: PageContent,
    },
    RLists: {
        screen: RLists,
    },
    Login: {
        screen: Login,
    },
});

export default MainNav