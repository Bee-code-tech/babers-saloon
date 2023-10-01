// import {Nav} from '../components'
import Nav from './Nav'
import Button from './Button'
import arrowRight from'../assets/arrow-right.svg'
import {statistics} from "../data";
import HeroImg from '../assets/img/hero-2.jpg'
const Hero = () => {
  console.log(statistics);
  return (
    <>
      <Nav />
      <section
        id='home'
        className='w-full flex-col xl:flex-row min-h-screen
       max-container p-2 justify-center
       '>
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
          <p className='text-xl font-montserrat text-coral-red'>
            Hire Professional Babers Now!
          </p>
          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold'>
            <span
              className='xl:bg-white xl:whitespace-nowrap relative
            z-10 pr-10
            '>
              UniverSoul Babers
            </span>
            <br />
            <span className='text-coral-red inline-block mt-3'>Best </span>
            Service
          </h1>
          <p className='font-montserrat text-lg leading-8 text-slate-gray mt-6 mb-14 sm: max-w-sm'>
            Discover talented babers to give you the best cut. Are you also a
            professional baber? create your shop now!
          </p>
          <Button label='Explore' iconUrl={arrowRight} />
        </div>

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index} className='padding-x'>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl: py-40  bg-cover bg-center'>
          <img src={HeroImg} alt=""
          width={650}
          height={500}

          />
        </div>
      </section>
    </>
  );
}

export default Hero
