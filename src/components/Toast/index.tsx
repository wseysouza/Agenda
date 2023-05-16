import Toast from 'react-native-root-toast';
import theme from '../../styles/theme';

interface Props {
    menssage: string
}

export const toast = {
    success: ({ menssage }: Props) => Toast.show(
        menssage,
        {
            duration: 3000,
            position: Toast.positions.CENTER,
            animation: true,
            hideOnPress: true,
            backgroundColor: theme.colors.header,
            textColor: '#fff',
            visible: true,
        },
    ),
    warn: ({ menssage }: Props) => Toast.show(
        menssage,
        {
            duration: 3000,
            position: Toast.positions.CENTER,
            animation: true,
            hideOnPress: true,
            backgroundColor: '#cc0000',
            textColor: '#fff',
            visible: true,
        },
    )
}
