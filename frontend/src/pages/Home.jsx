import {statistics, categories} from '../data'
import {SectionHeader, BarberList, Testimonials, Pricing} from '../components'
import heroOne from '../assets/img/hero-1.jpg'
import heroTwo from '../assets/img/hero-2.jpg'
import heroThree from '../assets/img/hero-3.jpg'
import Service from '../assets/img/service.jpg'
import Card from '../assets/img/card.png'
import Vid from '../assets/img/video-icon.png'
import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import CountUp from 'react-countup'



const Home = () => {
  return (
    <>
      <section className='hero-section pt-[2px] 2xl:h-[800px] relative '>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[10px] items-center justify-between '>
            {/* <div className='absolute  top-[-200px] left-[-400px] blur-xl w-[1300px] h-[800px] rounded-full bg-gradient-to-r from-slate-200 -z-10 '></div>
            <div className='absolute  top-[-200px] right-[-400px] blur-xl w-[1000px] h-[800px] rounded-full bg-gradient-to-l from-[#E0CEB5] -z-10 '></div> */}

            {/* Hero content  */}
            <div>
              <div className='lg:w-[570px]  '>
                <h1
                  className='text-[36px] mt-10 text-center leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] md:text-center lg:text-left '
                  data-aos='fade-down'
                  data-aos-duration='1200'>
                  UniverSoul Babers
                </h1>
                <p
                  className='text-para text-center md:text-center lg:text-left'
                  data-aos='fade-up'
                  data-aos-duration='1200'
                  data-aos-delay='400'>
                  Discover talented babers to give you the best cut. Are you
                  also a professional baber? create your shop now!
                </p>
                <div
                  className='w-full flex items-center justify-center md:justify-start lg:justify-start '
                  data-aos='zoom-in'
                  data-aos-duration='1200'
                  data-aos-delay='600'>
                  <button className='btn'>Request A Demo</button>
                </div>
              </div>
              {/* Counter  */}
              <div className='mt-[30px] flex justify-center lg:justify-start md:justify-start lg:mt-[70px] lg:flex-row lg:items-center gap-5 lg:gap-[30px] '>
                {statistics.map((stats) => {
                  const { value, label, suffix } = stats;
                  return (
                    <div
                      key={value}
                      data-aos='fade-up'
                      data-aos-duration='1200'
                      data-aos-delay='700'>
                      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[44px] font-[700] text-headingColor '>
                        <CountUp
                          start={0}
                          end={value}
                          suffix={suffix}
                          duration={5}
                        />
                      </h2>
                      <span className='h-2  w-[100px] bg-pink-700 rounded-full block mt-[-8px] '></span>
                      <p className='text-para'>{label}</p>
                    </div>
                  );
                })}
              </div>
              {/* Social Icons  */}
              <div
                className='flex items-center gap-5 mt-12'
                data-aos='fade-up'
                data-aos-duration='1200'
                data-aos-delay='800'>
                <Link
                  to=''
                  className='w-9 h-9 border border-solid rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                  <RiYoutubeFill className='group-hover:text-white w-4 h-5' />
                </Link>
                <Link
                  to=''
                  className='w-9 h-9 border border-solid rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                  <RiLinkedinFill className='group-hover:text-white w-4 h-5' />
                </Link>
                <Link
                  to=''
                  className='w-9 h-9 border border-solid rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                  <AiOutlineInstagram className='group-hover:text-white w-4 h-5' />
                </Link>
                <Link
                  to=''
                  className='w-9 h-9 border border-solid rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                  <AiFillGithub className='group-hover:text-white w-4 h-5' />
                </Link>
              </div>
            </div>
            {/* hero img  */}
            <div className='flex gap-[10px] md:gap-[20px] justify-end '>
              <div>
                <img
                  data-aos='fade-right'
                  data-aos-duration='1500'
                  data-aos-delay='500'
                  className='md:w-[320px] w-[230px] mt-[3rem] md:mt-[100px] rounded-lg'
                  src={heroThree}
                  alt=''
                />
              </div>
              <div className='md:mt-[110px] mt-[3rem]'>
                <img
                  data-aos='fade-left'
                  data-aos-duration='1500'
                  data-aos-delay='600'
                  src={heroOne}
                  alt=''
                  className=' w-[100px] md:w-[150px] md:h-[220px] mb-2 md:mb-[20px] rounded-lg'
                />
                <img
                  data-aos='fade-left'
                  data-aos-duration='1000'
                  data-aos-delay='700'
                  src={heroTwo}
                  alt=''
                  className='w-[100px] md:w-[150px] md:h-[220px] rounded-lg '
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionHeader title='Services' subTitle='What we do' />
      <div className='container items-center justify-center  w-[1100px] flex gap-5 flex-col mx-auto mt-[60px]lg:flex-row md:flex-row'>
        <div className='w-full flex items-center justify-center relative'>
          <img
            data-aos='fade-left'
            data-aos-duration='900'
            src={Service}
            alt=''
            className='relative rounded-lg h-[450px] '
          />
          <img
            data-aos='zoom-in'
            data-aos-duration='1500'
            data-aos-delay='400'
            src={Card}
            alt='desc'
            className='
          absolute
          rounded-lg
          w-[150px]
          top-[10%]
          left-[6%]
          shadow-lg
          '
          />
          <div
            className='absolute shadow-lg  bg-white w-[200px] rounded-lg p-3 top-[70%] right-[-3%] '
            data-aos='zoom-out'
            data-aos-duration='1500'
            data-aos-delay='400'>
            <div className='flex justify-between items-center'>
              <p>
                <span className='font-bold text-para mr-3'>Tue 23</span>
                <span className='text-para'>10:00 AM</span>
              </p>
              <div className='w-6 h-4 p-1 flex items-center rounded-sm bg-green-300'>
                <img src={Vid} alt='icon' />
              </div>
            </div>
            <div className='w-20 mt-2 p-[3px] rounded-full bg-yellow-100'>
              <p className='text-yellow-300 text-center text-[14px]'>Premium</p>
            </div>
            <div className='flex w-full items-center justify-start gap-3 mt-2 '>
              <span className='h-6 w-6 bg-black rounded-full items-center '></span>
              <p className='text-[17px]'>Drax BaberShop</p>
            </div>
          </div>
        </div>
        <div className='  p-8 w-full'>
          <h1
            className='text-center font-bold text-[30px] leading-12'
            data-aos='fade-down'
            data-aos-duration='1500'
            data-aos-delay='700'>
            We Offer The Best Platform For Your Salon
          </h1>
          <p
            className='text-para text-center lg:text-left md:text-left'
            data-aos='fade-up'
            data-aos-duration='1300'
            data-aos-delay='400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            doloribus placeat nam aliquam! Ipsa delectus dignissimos, adipisci
            qui quos, eum officia blanditiis veniam quidem recusandae, excepturi
            molestias nemo numquam accusantium. Dolorem sapiente placeat velit
            eos beatae quos cumque expedita quia?
          </p>
          <div
            className='flex flex-center justify-center'
            data-aos='zoom-in'
            data-aos-duration='1500'
            data-aos-delay='900'>
            <button className='btn '> Create A Shop</button>
          </div>
        </div>
      </div>
      <SectionHeader title='Categories' subTitle='Registration Guide' />
      <section className='max-w-[1100px] mx-auto rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-11 lg:gap-[30px] p-[30px]  '>
        {categories.map((category, index) => {
          const { img, title, content, btnText } = category;
          return (
            <div
              className='flex items-center flex-col p-8 justify-center w-full bg-white rounded-lg shadow-2xl '
              key={index}>
              <img src={img} width={50} height={40} alt={title} />
              <h2 className='text-center text-[24px] md:text-[28pz] lg:text-[28px] font-bold my-5 '>
                {title}
              </h2>
              <p
                className='
                text-center
                '>
                {content}
              </p>
              <button
                className='
                bg-black
                text-white
                p-2
                rounded-md
                px-4
                mt-6
                '>
                {btnText}
              </button>
            </div>
          );
        })}
      </section>
      <section className='container mx-auto items-center justify-center'>
        <BarberList />
      </section>
      <section className='container mx-auto items-center justify-center'>
        <Testimonials />
      </section>
      <section className='container mx-auto items-center justify-center'>
        <Pricing />
      </section>
    </>
  );
}

export default Home
