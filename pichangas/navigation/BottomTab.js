import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Pichangas from '../screens/Pichangas'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={({ color, size }) => ({
                    tabBarIcon: () => (
                        <HomeIcon name="home" size={size} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Pichangas"
                component={Pichangas}
                options={({ color, size }) => ({
                    tabBarIcon: () => (
                        <SportsSoccerIcon name="home" size={size} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={({ color, size }) => ({
                    tabBarIcon: () => (
                        <AccountCircleIcon name="home" size={size} color={color} />
                    ),
                })}
            />
        </Tab.Navigator>

    );
}