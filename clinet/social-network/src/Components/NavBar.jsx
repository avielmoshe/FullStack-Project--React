import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const iconCss = 'w-[40px] p-[3px] mt-2'
function NavBar() {
  return (
    <div className='flex flex-col justify-between h-screen bg-navColor w-1/5 items-center'>
        <img src="/threads-white-icon.svg" alt="" className={iconCss}/>
        <div className='flex flex-col gap-12'>
            <HomeIcon sx={{ fontSize: 40, padding:"1px", cursor:"pointer", "&:hover":{ backgroundColor: "rgb(24 24 50)" }}}/>
            <SearchIcon sx={{ fontSize: 40, padding:"1px" }}/>
            <AddIcon sx={{ fontSize: 40, padding:"1px" }}/>
            <BookmarksOutlinedIcon sx={{ fontSize: 40, padding:"1px" }}/>
            <Person2OutlinedIcon sx={{ fontSize: 40, padding:"1px" }}/>
        </div>
        <div></div>
    </div>
  )
}

export default NavBar