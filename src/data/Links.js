import {RiDashboardFill, RiCaravanLine, RiContactsLine} from 'react-icons/ri'
import {IoMdContacts} from 'react-icons/io'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdPhoto} from 'react-icons/md'
import {RxEnter, RxExit } from 'react-icons/rx'
import {AiOutlineCalendar, AiFillHome, AiFillQuestionCircle, AiFillLock, AiFillUnlock} from 'react-icons/ai'
import {FaTasks} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'
export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Dashboard',
        icon: <RiDashboardFill />,
      },
    ],
  },

  {
    title: 'People',
    links: [
      {
        name: 'tenants',
        icon: <BsFillPersonFill />,
      },
      {
        name: 'employees',
        icon: <IoMdContacts />,
      },
    ],
  },

  {
    title: 'Money',
    links: [
      {
        name: 'payments',
        icon: <RxEnter />,
      },
      {
        name: 'payroll',
        icon: <RxExit />,
      },
      {
        name: 'expenses',
        icon: <RxExit />,
      },
    ],
  },

  {
    title: 'Planning',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'tasks',
        icon: <FaTasks />,
      },
      {
        name: 'blog',
        icon: <FiEdit />,
      },
      
    ],
  },

  {
    title: 'Members',
    links: [
      {
        name: 'SiteInfo',
        icon: <RiCaravanLine />,
      },
      {
        name: 'exit',
        icon: <AiFillUnlock />,
      },
    ],
  },
];


export const publicLinks = [
  {
    title: 'Home',
    links: [
      {
        name: 'home',
        icon: <AiFillHome />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'photos',
        icon: <MdPhoto />,
      },
      {
        name: 'about',
        icon: <AiFillQuestionCircle />,
      },
      {
        name: 'contact',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Members',
    links: [
      {
        name: 'Sign-in',
        icon: <AiFillLock />,
      },
    ],
  },
];
