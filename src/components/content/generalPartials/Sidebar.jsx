import React from 'react'
import { links, publicLinks } from '../../../data/Links';
import { useAuth0 } from '@auth0/auth0-react';
import SidebarLink from './SidebarLink';

const Sidebar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {isAuthenticated
        ? <SidebarLink links={links} />
        : <SidebarLink links={publicLinks} />}
    </div>
  )
}

export default Sidebar;

