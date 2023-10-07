import {statistics, categories, barbers} from '../data'
import {SectionHeader} from '../components'
import heroOne from '../assets/img/hero-1.jpg'
import heroTwo from '../assets/img/hero-2.jpg'
import heroThree from '../assets/img/hero-3.jpg'
import Service from '../assets/img/service.jpg'
import Card from '../assets/img/card.png'
import Vid from '../assets/img/video-icon.png'



const Home = () => {
  return (
    <>
      <section className='hero-section pt-[2px] 2xl:h-[800px] '>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[10px] items-center justify-between '>
            {/* Hero content  */}
            <div data-aos='fade-down' data-aos-delay='400'>
              <div className='lg:w-[570px]  '>
                <h1 className='text-[36px] mt-10 text-center leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] md:text-center lg:text-left '>
                  UniverSoul Babers
                </h1>
                <p className='text-para text-center md:text-center lg:text-left'>
                  Discover talented babers to give you the best cut. Are you
                  also a professional baber? create your shop now!
                </p>
                <div className='w-full flex items-center justify-center md:justify-left lg:justify-left '>
                  <button className='btn'>Request A Demo</button>
                </div>
              </div>
              {/* Counter  */}
              <div className='mt-[30px] flex justify-center lg:mt-[70px] lg:flex-row lg:items-center gap-5 lg:gap-[30px] '>
                {statistics.map((stats) => {
                  const { value, label } = stats;
                  return (
                    <div key={value}>
                      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[44px] font-[700] text-headingColor '>
                        {value}
                      </h2>
                      <span className='h-2  w-[100px] bg-pink-700 rounded-full block mt-[-14px] '></span>
                      <p className='text-para'>{label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* hero img  */}
            <div
              className='flex gap-[10px] md:gap-[20px] justify-end '
              data-aos='fade-left'
              data-aos-delay='600'>
              <div>
                <img
                  className='md:w-[320px] w-[230px] mt-[3rem] md:mt-[100px] rounded-lg'
                  src={heroThree}
                  alt=''
                />
              </div>
              <div className='md:mt-[110px] mt-[3rem]'>
                <img
                  src={heroOne}
                  alt=''
                  className=' w-[100px] md:w-[150px] md:h-[220px] mb-2 md:mb-[20px] rounded-lg'
                />
                <img
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
            src={Service}
            alt=''
             className='relative rounded-lg h-[500px] '
          />
          <img src={Card} alt="desc" className='
          absolute
          rounded-lg
          w-[200px]
          top-[10%]
          left-[6%]
          shadow-lg
          '  />
          <div className="absolute shadow-lg  bg-white w-[240px] rounded-lg p-4 top-[70%] right-[-3%] ">
            <div className="flex justify-between items-center">
              <p>
                <span className='font-bold text-para mr-3'>Tue 23</span>
                <span className="text-para">
                  10:00 AM
                </span>
              </p>
              <div className="w-6 h-4 p-1 flex items-center rounded-sm bg-green-300">
                <img src={Vid} alt="icon" />
              </div>
            </div>
            <div className="w-20 mt-2 p-[3px] rounded-full bg-yellow-100">
              <p className="text-yellow-300 text-center text-[14px]">
                Premium 
              </p>
            </div>
            <div className="flex w-full items-center justify-start gap-3 mt-2 ">
              <span className="h-6 w-6 bg-black rounded-full items-center "></span>
              <p className="text-[17px]">
                Drax BaberShop
              </p>
            </div>
          </div>
        </div>
        <div className='  p-8 w-full'>
          <h1 className='text-center font-bold text-[35px]'>
            We Offer The Best Platform For Your Salon
          </h1>
          <p className='text-para text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            doloribus placeat nam aliquam! Ipsa delectus dignissimos, adipisci
            qui quos, eum officia blanditiis veniam quidem recusandae, excepturi
            molestias nemo numquam accusantium. Dolorem sapiente placeat velit
            eos beatae quos cumque expedita quia?
          </p>
          <div className='flex flex-center justify-center'>
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
      <SectionHeader title='Featured Barber' subTitle='Top Rated Babers' />
      <div className="w-full bg-green-50 flex flex-col items-center justify-center gap-6 lg:flex-row md:flex-row">
        {
          barbers.map((barber, index) => {
            const {img, name, patients, badge, location, review} = barber
            return (
              <div className='bg-white shadow-xl  ' key={name}>
                <div className='flex w-[270px] h-[30px] flex-col items-center my-4'>
                  <img src={img} alt={name} />
                </div>
              </div>
            );
          })
        }
      </div>

    </>
  );
}

export default Home
