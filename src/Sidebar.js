import { Slide } from '@material-ui/core'
import { Chat, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons'
import userEvent from '@testing-library/user-event'
import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import './SidebarRow.css'
import { useStateValue } from './StateProvider'

function Sidebar() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospital} title="Pages" />
            <SidebarRow Icon={People} title="Friends" />
            <SidebarRow Icon={Chat} title="Messages" />
            <SidebarRow Icon={Storefront} title="MarketPlace" />
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace" />
        </div>
    )
}

export default Sidebar
