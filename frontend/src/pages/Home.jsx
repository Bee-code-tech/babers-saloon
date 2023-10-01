import {statistics} from '../data'
import heroOne from '../assets/img/hero-1.jpg'
import heroTwo from '../assets/img/hero-2.jpg'
import heroThree from '../assets/img/hero-3.jpg'



const Home = () => {
  return (
    <>
      <section className='hero-section pt-[2px] 2xl:h-[800px] '>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[10px] items-center justify-between '>
            {/* Hero content  */}
            <div>
              <div className='lg:w-[570px]  '>
                <h1 className='text-[26px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] '>
                  UniverSoul Babers
                </h1>
                <p className='text-para'>
                  Discover talented babers to give you the best cut. Are you
                  also a professional baber? create your shop now!
                </p>
                <button className='btn'>Request A Demo</button>
              </div>
              {/* Counter  */}
              <div className='mt-[30px] flex flex-col lg:mt-[70px] lg:flex-row lg:items-center gap-5 lg:gap-[30px] '>
                {statistics.map((stats) => {
                  const { value, label } = stats;
                  return (
                    <div>
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
            <div className='flex gap-[20px] justify-end '>
              <div>
                <img
                  className='w-[320px] mt-[100px] rounded-lg'
                  src={heroThree}
                  alt=''
                />
              </div>
              <div className='mt-[110px]'>
                <img
                  src={heroOne}
                  alt=''
                  className='w-[150px] h-[220px] mb-[20px] rounded-lg'
                />
                <img src={heroTwo} alt='' className='w-[150px] h-[220px] rounded-lg ' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home
