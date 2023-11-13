import React from 'react'
import "./ChatHeader.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationAltRoundedIcon from '@mui/icons-material/EditLocationAltRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

function ChatHeader() {
  return (
    <div className='chatHeader'>
        <div className="chatHeader__left">
            <h3>
                <span className='chatHeader__hash'>
                    #
                </span>
                Test Channel Name
            </h3>
        </div>

        <div className="chatHeader__right">
            <NotificationsIcon/>
            <EditLocationAltRoundedIcon/>
            <PeopleAltRoundedIcon/>

            <div className="chatHeader__search">
                <input type="text" placeholder='Search'/>
                <SearchRoundedIcon/>
            </div>
            <SendRoundedIcon/>
            <HelpOutlineRoundedIcon/>
        </div>
    </div>
  )
}

export default ChatHeader