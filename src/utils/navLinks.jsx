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
  },
  {
    text: 'Hashtags',
    icon: HashtagIcon,
  },
  {
    text: 'Notifications',
    icon: BellIcon,
  },
  {
    text: 'Messages',
    icon: EnvelopeIcon,
  },
  {
    text: 'Bookmarks',
    icon: BookmarkIcon,
  },
  {
    text: 'Lists',
    icon: ListAltIcon,
  },
  {
    text: 'Profile',
    icon: UserIcon,
  },
  {
    text: 'Settings',
    icon: SettingsIcon,
  },

];


export const mobileNavLinks =[
  {
    text: 'Home',
    icon: HomeIcon,
  },
  {
    text: 'Hashtags',
    icon: HashtagIcon,
  },
  {
    text: 'Notifications',
    icon: BellIcon,
  },
  {
    text: 'Profile',
    icon: UserIcon,
  },
  {
    text: 'Messages',
    icon: EnvelopeIcon,
  },
]