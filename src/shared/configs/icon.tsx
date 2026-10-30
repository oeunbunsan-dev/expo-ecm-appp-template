// import Feather from '@expo/vector-icons/Feather';
// import { ReactNode } from 'react';

// interface IconProps {
//   size?: number;
//   color?: string;
// }

// // បង្កើត Type សម្រាប់ប្រាកដថាគ្រប់ Icon ទាំងអស់មានទម្រង់ដូចគ្នា
// type IconComponent = (props: IconProps) => ReactNode;

// export const AppIcons: Record<string, IconComponent> = {
//   // Navigation & Core Pages (របារខាងក្រោម និងទំព័រ முதன்மை)
//   Home: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="home" size={size} color={color} />
//   ),
//   Search: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="search" size={size} color={color} />
//   ),
//   Categories: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="grid" size={size} color={color} />
//   ),
//   Wishlist: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="heart" size={size} color={color} />
//   ),
//   Profile: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="user" size={size} color={color} />
//   ),

//   // Shopping & Checkout (ការទិញទំនិញ)
//   Cart: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="shopping-cart" size={size} color={color} />
//   ),
//   Bag: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="shopping-bag" size={size} color={color} />
//   ),
//   CheckOut: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="credit-card" size={size} color={color} />
//   ),
//   Discount: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="tag" size={size} color={color} />
//   ),

//   // Order Tracking & Actions (ការតាមដានការបញ្ជាទិញ)
//   Truck: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="truck" size={size} color={color} />
//   ),
//   Package: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="package" size={size} color={color} />
//   ),
//   Trash: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="trash-2" size={size} color={color} />
//   ),
//   Plus: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="plus" size={size} color={color} />
//   ),
//   Minus: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="minus" size={size} color={color} />
//   ),

//   // Settings & Customer Support (ការកំណត់ និងជំនួយ)
//   Settings: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="settings" size={size} color={color} />
//   ),
//   Bell: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="bell" size={size} color={color} />
//   ),
//   Help: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="help-circle" size={size} color={color} />
//   ),
//   Chat: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="message-square" size={size} color={color} />
//   ),

//   // UI Navigation Arrows (ព្រួញបញ្ជាទិសដៅ)
//   ArrowRight: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="arrow-right" size={size} color={color} />
//   ),
//   ArrowLeft: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="arrow-left" size={size} color={color} />
//   ),
//   ChevronRight: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="chevron-right" size={size} color={color} />
//   ),
//   ChevronLeft: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="chevron-left" size={size} color={color} />
//   ),
//   Star: ({ size = 24, color = 'black' }: IconProps) => (
//     <Feather name="star" size={size} color={color} />
//   ),
// };


// -------------------------------------------------------------------
import Feather from '@expo/vector-icons/Feather';

interface IconProps {
  size?: number;
  color?: string;
}

//  (Default Props)
const DEFAULT_ICON_PROPS: Required<IconProps> = {
  size: 24,
  color: 'black',
};

// Helper Function for create Icon Component auto
const createIcon = (name: keyof typeof Feather.glyphMap) => {
  return ({ size = DEFAULT_ICON_PROPS.size, color = DEFAULT_ICON_PROPS.color }: IconProps) => (
    <Feather name={name} size={size} color={color} />
  );
};

// Dictionary of AppIcons
export const AppIcons = {
  // Navigation & Core Pages
  Home: createIcon('home'),
  Search: createIcon('search'),
  Categories: createIcon('grid'),
  Wishlist: createIcon('heart'),
  Profile: createIcon('user'),

  // Shopping & Checkout
  Cart: createIcon('shopping-cart'),
  Bag: createIcon('shopping-bag'),
  CheckOut: createIcon('credit-card'),
  Discount: createIcon('tag'),

  // Order Tracking & Actions
  Truck: createIcon('truck'),
  Package: createIcon('package'),
  Trash: createIcon('trash-2'),
  Plus: createIcon('plus'),
  Minus: createIcon('minus'),

  // Settings & Customer Support
  Settings: createIcon('settings'),
  Bell: createIcon('bell'),
  Help: createIcon('help-circle'),
  Chat: createIcon('message-square'),
  Menu: createIcon("menu"),

  // UI Navigation Arrows & Others
  ArrowRight: createIcon('arrow-right'),
  ArrowLeft: createIcon('arrow-left'),
  ChevronRight: createIcon('chevron-right'),
  ChevronLeft: createIcon('chevron-left'),
  Star: createIcon('star'),
};

