import React from 'react'
import { Link } from 'react-router-dom'

function Header2() {
  return (
    <div className=' h-[40px] hidden md:flex items-center justify-center bg-iconColor '>
        <nav className=' '>
            <ul className=' flex text-white text-[0.9rem] gap-8'>
                <li><Link>Mobiles & More</Link></li>
                <li><Link>Men</Link></li>
                <li><Link>Women</Link></li>
                <li><Link>Home & Kitchen</Link></li>
                <li><Link>Application</Link></li>
                <li><Link>Sports & mode</Link></li>
                <li><Link>Essentials</Link></li>
                <li><Link>Offers</Link></li>
                <li><Link>Global Shopping</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header2