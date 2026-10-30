import Feather from '@expo/vector-icons/Feather';

interface IconProps {
  size?: number;
  color?: string;
}

// Centralized dictionary of pre-defined icons
export const AppIcons = {
  Search: ({ size = 24, color = 'black' }: IconProps) => (
    <Feather name="search" size={size} color={color} />
  ),
  Home: ({ size = 24, color = 'black' }: IconProps) => (
    <Feather name="home" size={size} color={color} />
  ),
  Settings: ({ size = 24, color = 'black' }: IconProps) => (
    <Feather name="settings" size={size} color={color} />
  ),
};
