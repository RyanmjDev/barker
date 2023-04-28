import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaListAlt, FaUser } from 'react-icons/fa';
import {IoMdSettings} from 'react-icons/io'
import NotificationIcon from '../components/NotificationIcon';




export const generateNavLinks = (username, unreadCount) => {

const HomeIcon = <FaHome size={24} className='mr-4 '/>;
const HashtagIcon = <FaHashtag size={24}  className='mr-4' />;
const BellIcon = <NotificationIcon unreadCount={unreadCount} />
const EnvelopeIcon = <FaEnvelope size={24}  className='mr-4' />;
const BookmarkIcon = <FaBookmark size={24}  className='mr-4' />;
const ListAltIcon = <FaListAlt size={24}  className='mr-4'/>;
const SettingsIcon = <IoMdSettings size={24}  className='mr-4'/>;
const UserIcon = <FaUser size={24}  className='mr-4' />;


 const navLinks =[
  {
    text: 'Home',
    icon: HomeIcon,
    link: '/home'
  },
  {
    text: 'Explore',
    icon: HashtagIcon,
    link: '/'
  },
  {
    text: 'Notifications',
    icon: BellIcon,
    link: '/notifications'
  },
  {
    text: 'Messages',
    icon: EnvelopeIcon,
    link: '/messages'
  },
  {
    text: 'Bookmarks',
    icon: BookmarkIcon,
    link: '/bookmarks'
  },
  {
    text: 'Lists',
    icon: ListAltIcon,
    link: '/'
  },
  {
    text: "Profile",
    icon: UserIcon,
    link: `/profile/${username}`
  },
  {
    text: 'Settings',
    icon: SettingsIcon,
    link: '/settings'
  },

];

return navLinks;

};

export const generateBottomNavLinks = (username, unreadCount) => {
  
  const HomeIcon = <FaHome size={24} className='mr-4 '/>;
  const HashtagIcon = <FaHashtag size={24}  className='mr-4' />;
  const BellIcon = <NotificationIcon unreadCount={unreadCount} />
  const UserIcon = <FaUser size={24}  className='mr-4' />;
  const SettingsIcon = <IoMdSettings size={24}  className='mr-4'/>;

  const bottomNavLinks =[
  {
    id: 0,
    text: 'Home',
    icon: HomeIcon,
    link: '/home'
  },
  {
    id: 1,
    text: 'Explore',
    icon: HashtagIcon,
    link: '/'
  },
  {
    id: 2,
    text: 'Notifications',
    icon: BellIcon,
    link: '/notifications'
  },
  {
    id: 3,
    text: 'Profile',
    icon: UserIcon,
    link: `/profile/${username}`
  },
  {
    id: 4,
    text: 'Settings',
    icon: SettingsIcon,
    link: '/settings'
  },
]

    return bottomNavLinks;
}