import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator} = createNativeStackNavigator();

import { ScreenA } from '../screens/ScreenA';
import { ScreenB } from '../screens/ScreenB';
import { ScreenC } from '../screens/ScreenC';

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    title: 'Home'
                }}
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    title: 'Cadastro',
                    headerTitleAlign: 'left',
                    headerStyle:{
                        backgroundColor: 'black'
                    },
                    headerTintColor: '#fff'
                }}
            />
            <Screen
                name='screenC'
                component={ScreenC}
                options={{
                    title: 'Consulta',
                    headerTitleAlign: 'left',
                    headerStyle:{
                        backgroundColor: 'black'
                    },
                    headerTintColor: '#fff'
                }}
            />
        </Navigator>
    )
}