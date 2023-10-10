import {Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import CustomerAvatar from '../assets/img/patient-avatar.png'
import {HiStar} from 'react-icons/hi'


const Testimonials = () => {
  return (
    <>
    <div className="mt-[30px] lg:mt-[55px]">
        <Swiper modules={{Pagination}}
         spaceBetween={30}
          slidesPerView={1}
           pagination={{clickable: true}}
           breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween:0,
            },
            760: {
                slidesPerView:2,
                spaceBetween: 20,
            },
            1024:{
                slidesPerView: 3,
                spaceBetween: 30
            }
           }}
            > 
             <SwiperSlide>
                <div className="px-5 py-[30px] rounded-[13px]">
                   <div className="flex items-center gap-[13px]">
                     <img src={CustomerAvatar} alt="" />
                     <div className="
                     ">
                        <h4 className="font-semibold  text-[18px] leading-[30px] text-headingColor ">
                              Naira Marley
                        </h4>
                        <div className="flex items-center gap-[3px] ">
                            <HiStar className='text-yellowColor w-[18px] h-5 ' />
                            <HiStar className='text-yellowColor w-[18px] h-5 ' />
                            <HiStar className='text-yellowColor w-[18px] h-5 ' />
                            <HiStar className='text-yellowColor w-[18px] h-5 ' />
                        </div>
                     </div>
                   </div>
                </div>
             </SwiperSlide>
        </Swiper>
    </div>
    </>
  )
}

export default Testimonials