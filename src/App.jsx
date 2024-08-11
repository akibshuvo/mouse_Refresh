import React, { useState } from 'react';
import { GrNext } from "react-icons/gr";
import { BsFillDisplayFill } from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleRightClick = (event) => {
    event.preventDefault();
    setShowMenu(true);
    setMenuPosition({ x: event.pageX, y: event.pageY });
  };

  const handleClick = () => {
    if (showMenu) setShowMenu(false);
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div onContextMenu={handleRightClick} onClick={handleClick} style={{ height: '100vh' }}>
     <h1></h1>

      {showMenu && (
        <ul
          style={{
            width:'260px',
            position: 'absolute',
            top: menuPosition.y,
            left: menuPosition.x,
            listStyle: 'none',
            padding:'6px 0',
            backgroundColor: '#ebeaea67',
            boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
            zIndex: 1000,
          }}
        >
          <li className='cursor-pointer text-sm hover:bg-white pl-11 pr-2 pt-1 pb-1 flex justify-between items-center' onClick={handleRefresh}>View <GrNext className='text-[#1f1f1fb7]'/></li>
          <li className='cursor-pointer text-sm hover:bg-white pl-11 pr-2 pt-1 pb-1 flex justify-between items-center' onClick={handleRefresh}>Short by <GrNext className='text-[#1f1f1fb7]'/></li>
          <li className='cursor-pointer text-sm hover:bg-white pl-11 pr-3 pt-1 pb-3 border-b ' onClick={handleRefresh}>Refresh</li>
          <li className='cursor-pointer text-sm hover:bg-white pl-11 pr-2 pt-1 pb-2 text-[#1f1f1f65]' onClick={handleRefresh}>Past</li>
          <li className='cursor-pointer text-sm hover:bg-white pl-11 pr-2 pt-1 pb-2 text-[#1f1f1f65]' onClick={handleRefresh}>Past shorcut</li>
          <li className='cursor-pointer text-sm hover:bg-white pl-11 pr-6 pt-1 pb-2 flex justify-between' onClick={handleRefresh}>Undo Delete <span>Ctrl+z</span></li>
          <li className='cursor-pointer text-sm hover:bg-white pl-11 pr-2 pt-1 pb-2' onClick={handleRefresh}>Delete</li>
          <li className='cursor-pointer text-sm hover:bg-white pl-5 pr-2 pt-1 pb-2 border-b flex gap-x-2 items-center' onClick={handleRefresh}><VscVscode className='text-[#0078d7] text-lg'/>Open with Code</li>
          <li className='cursor-pointer text-sm hover:bg-white pl-11 pr-2 pt-1 pb-2 border-b flex justify-between items-center' onClick={handleRefresh}>New <GrNext className='text-[#1f1f1fb7]'/></li>
          <li className='cursor-pointer text-sm hover:bg-white pl-6 pr-2 pt-2 pb-2 flex gap-x-2 items-center' onClick={handleRefresh}><BsFillDisplayFill className='text-[#357EC7]'/> Display settings</li>
          <li className='cursor-pointer text-sm hover:bg-white pl-6 pr-2 pt-1 pb-2 flex gap-x-2 items-center' onClick={handleRefresh}> <GrPersonalComputer className='text-[#357EC7]'/> Personalise</li>
          
          

        </ul>
      )}
    </div>
  );
};

export default App;