import {navLinks} from '../data'
import {NavLink, Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className='header flex items-center'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* logo  */}
          <div className='flex items-start gap-3 justify-center'>
            <div className='w-5 h-5 bg-black'></div>
            <p className='text-sm'>UniverSoul Babers</p>
          </div>
          
          {/* Menu  */}
          <div className='navigation'>
          <ul className="menu flex items-center gap-[2.7rem]">
            {navLinks.map((link,i)=> {
              const {path, label} = link
             return <li  key={label}>
                <NavLink to={path} className={navClass => navClass.isActive ? 'text-primaryColor  text-[16px] leading-7 font-[600]':'text-textColor  text-[16px] leading-7 font-[500] hover:text-primaryColor'}  > {label} </NavLink>
             </li>
            })}
          </ul>
          </div>

          {/* Right nav  */}
      
        </div>
      </div>
    </header>
  );
}

export default Header