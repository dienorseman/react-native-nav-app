import { Button } from 'react-native';

interface Props {
    

export const NavigationButton = () => {
    return (
        <Button
            title="Go back"
            onPress={() => navigator.pop()}
        />
    )
}
