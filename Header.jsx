import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import  IconButton  from '@mui/material/IconButton';
import "./Header.css"
import ForumIcon from '@mui/icons-material/Forum';
function Header() {
  return (
<div className="header">

<IconButton>
<PersonIcon fontSize="large" className='header_icon'/>
</IconButton>

<img  src="src/assets/icons8-dating-128.png" className='header_logo' alt="logo"/>

<IconButton>

<ForumIcon/>
</IconButton>
</div>

  )
}

export default Header