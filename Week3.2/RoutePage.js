import {createStackNavigator} from 'react-navigation';
import LoginScreen from '../screen/LoginScreen';
import MainScreen from '../screen/MainScreen';
import AboutUsScreen from "../screen/AboutUsScreen";
import WarehouseScreen from "../screen/WarehouseScreen";
import InfoUserScreen from "../screen/InfoUserScreen";
import SaleScreen from "../screen/SaleScreen";
import ReportScreen from "../screen/ReportScreen";
import AdminScreen from "../screen/AdminScreen";
import ChangePasswordScreen from "../screen/ChangePasswordScreen";
import InfoProductScreen from "../screen/InfoProductScreen";
import ReportDetailScreen from "../screen/ReportDetailScreen";
import TestScreen from "../screen/TestScreen";
import ListCategoryScreen from "../screen/admin/ListCategoryScreen";

export const RoutePage = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: ({}) => ({
                header: null,
            }),
        },
        AboutUs: {
            screen: AboutUsScreen,
            navigationOptions: ({}) => ({
                header: null,
            }),
        },
        Main: {
            screen: MainScreen,
            navigationOptions: ({}) => ({
                header: null,
            }),
        },
        Warehouse: {
            screen: WarehouseScreen,
            navigationOptions: ({}) => ({
                header: null,
            }),
        },
        InfoUser: {
            screen: InfoUserScreen,
            navigationOptions: ({}) => ({
                header: null,
            }),
        },
        Sale: {
            screen: SaleScreen,
            navigationOptions: ({}) => ({
                header: null,
            }),
        },
        Report: {
            screen: ReportScreen,
            navigationOptions: ({}) => ({
                header: null,
            }),
        },
        Admin: {
            screen: AdminScreen,
            navigationOptions: ({}) => ({
                header: null,
            }),
        },
        InfoProduct: {
            screen: InfoProductScreen,
            navigationOptions: ({}) => ({
                header: null,
            }),
        },
        ChangePassword: {
            screen: ChangePasswordScreen,
            navigationOptions: ({}) => ({
                header: null,
            }),
        },
        ReportDetail: {
            screen: ReportDetailScreen,
            navigationOptions: ({}) => ({
                header: null,
            }),
        },
        ListCategoryScreen: {
            screen: ListCategoryScreen,
            navigationOptions: ({}) => ({
                header: null,
            }),
        },

    },
    {
        initialRouteName: 'Login',
    },
);

export default RoutePage;