import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaListAlt, FaUser } from 'react-icons/fa';
import {IoMdSettings} from 'react-icons/io'

const HomeIcon = <FaHome size={24} className='mr-4 '/>;
const HashtagIcon = <FaHashtag size={24}  className='mr-4' />;
const BellIcon = <FaBell size={24}  className='mr-4' />;
const EnvelopeIcon = <FaEnvelope size={24}  className='mr-4' />;
const BookmarkIcon = <FaBookmark size={24}  className='mr-4' />;
const ListAltIcon = <FaListAlt size={24}  className='mr-4'/>;
const UserIcon = <FaUser size={24}  className='mr-4' />;
const SettingsIcon = <IoMdSettings size={24}  className='mr-4'/>;

export const navLinks =[
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
    text: 'Profile',
    icon: UserIcon,
    link: '/Profile'
  },
  {
    text: 'Settings',
    icon: SettingsIcon,
    link: '/settings'
  },

];



export const mobileNavLinks =[
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
    text: 'Profile',
    icon: UserIcon,
    link: '/profile'
  },
  {
    text: 'Messages',
    icon: EnvelopeIcon,
    link: '/messages'
  },
]