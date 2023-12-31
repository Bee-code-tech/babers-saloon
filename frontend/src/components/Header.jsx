import {navLinks} from '../data'
import {useRef,useEffect} from 'react'
import {NavLink, Link} from 'react-router-dom'
import avatar from '../assets/img/avatar-icon.png'
import {BiMenu} from 'react-icons/bi'


const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)

const handleStickyHeader = ()=>{
  window.addEventListener('scroll', () =>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
      headerRef.current.classList.add("sticky-header");
    }else{
      headerRef.current.classList.remove("sticky-header");
    
    }
  })
}

useEffect(() => {
  handleStickyHeader();
  return ()=>{
    window.removeEventListener('scroll', handleStickyHeader)
  }
}, [])

const toggleMenu =()=> menuRef.current.classList.toggle('show-menu')


  return (
    <header className='header lg:px-[75px] mt-[20px] px-[17px] flex items-center' data-aos='fade-down' data-aos-delay='100' ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* logo  */}
          <div className='flex items-start gap-3 justify-center'>
            <div className='w-5 h-5 bg-black rounded-full'></div>
            <p className='text-sm'>UniverSoul Babers</p>
          </div>
          
          {/* Menu  */}
          <div className='navigation' ref={menuRef} onClick = {toggleMenu}>
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
          <div className="flex items-center gap-4">
            <div className='hidden'>
              <Link to='/'>
              <figure className='w-[35px] h-[35px] rounded-full cursor-pointer '>
                <img src={avatar} alt="" className='w-full rounded-full' />
              </figure>
              </Link>
            </div>

            <Link to='/login'>
              <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center
              justify-center rounded-[50px]
              ' >login</button>
            </Link>
            <span  className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>
          </div>
      
        </div>
      </div>
    </header>
  );
}

export default Header