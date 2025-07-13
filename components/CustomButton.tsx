import { Pressable, PressableProps, Text } from 'react-native'

interface Props extends PressableProps {

    children: string;
    color?: 'primary' | 'secondary';
    textColor?: 'primary' | 'secondary';
    className?: string;
}


export const CustomButton = ({ children,color = 'primary', onPress,textColor = 'primary', className} : Props) => {

  const btnColor = {
    primary : 'bg-primary',
    secondary: 'bg-secondary'
  }[color];
  const txtColor = {
    primary: 'text_primary:',
    secondary: 'text-secondary'
    }[textColor];

  return (
    <Pressable
        onPress={onPress}
        className={`${btnColor} p-3 rounded-md active:opacity-90 ${className}`}
    >
      <Text className={`text-${txtColor}, text-center`}>{children}</Text>
    </Pressable>
  )
}

