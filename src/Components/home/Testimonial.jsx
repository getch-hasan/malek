
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import profile from '../../assets/profile.jpg'
const Testimonial = () => {

    return (
        <div className='py-10 bg-slate-100 mt-10 rounded-lg'>
            <div className='grid justify-center'> <p className='text-center border w-44 rounded-lg border-red-400 bg-green-200'>Our TESTIMONIAL</p></div>
            <h1 className='text-4xl font-semibold text-center'>Explore the feedback from our client</h1>
            <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='p-20'><div className='grid justify-center items-center'>
                    <p>Nulla aenean ipsum elit, adipiscing tristique nisi. Eget ultrices urna arcu quis. <br /> Tristique potenti vitae in adipiscing. Eu augue cras quis nec proin pharetra netus massa.</p>
                    <div className="avatar p-2 justify-center grid">
                        <div className="w-24  rounded-full">
                            <img src={profile} />
                        </div>
                    </div>
                    <h1 className='text-center '>Rashed ka</h1>
                    <p className='text-center '>Italy</p>
                </div></SwiperSlide>
               
                <SwiperSlide className='p-20'><div className='grid justify-center items-center'>
                    <p>Nulla aenean ipsum elit, adipiscing tristique nisi. Eget ultrices urna arcu quis. <br /> Tristique potenti vitae in adipiscing. Eu augue cras quis nec proin pharetra netus massa.</p>
                    <div className="avatar p-2 justify-center grid">
                        <div className="w-24  rounded-full">
                            <img src={profile} />
                        </div>
                    </div>
                    <h1 className='text-center '>Rashed ka</h1>
                    <p className='text-center '>Italy</p>
                </div></SwiperSlide>
               
                <SwiperSlide className='p-20'><div className='grid justify-center items-center'>
                    <p>Nulla aenean ipsum elit, adipiscing tristique nisi. Eget ultrices urna arcu quis. <br /> Tristique potenti vitae in adipiscing. Eu augue cras quis nec proin pharetra netus massa.</p>
                    <div className="avatar p-2 justify-center grid">
                        <div className="w-24  rounded-full">
                            <img src={profile} />
                        </div>
                    </div>
                    <h1 className='text-center '>Rashed ka</h1>
                    <p className='text-center '>Italy</p>
                </div></SwiperSlide>
               
                <SwiperSlide className='p-20'><div className='grid justify-center items-center'>
                    <p>Nulla aenean ipsum elit, adipiscing tristique nisi. Eget ultrices urna arcu quis. <br /> Tristique potenti vitae in adipiscing. Eu augue cras quis nec proin pharetra netus massa.</p>
                    <div className="avatar p-2 justify-center grid">
                        <div className="w-24  rounded-full">
                            <img src={profile} />
                        </div>
                    </div>
                    <h1 className='text-center '>Rashed ka</h1>
                    <p className='text-center '>Italy</p>
                </div></SwiperSlide>
               
                <SwiperSlide className='p-20'><div className='grid justify-center items-center'>
                    <p>Nulla aenean ipsum elit, adipiscing tristique nisi. Eget ultrices urna arcu quis. <br /> Tristique potenti vitae in adipiscing. Eu augue cras quis nec proin pharetra netus massa.</p>
                    <div className="avatar p-2 justify-center grid">
                        <div className="w-24  rounded-full">
                            <img src={profile} />
                        </div>
                    </div>
                    <h1 className='text-center '>Rashed ka</h1>
                    <p className='text-center '>Italy</p>
                </div></SwiperSlide>
               
                
            </Swiper>
        </div>
    );
};

export default Testimonial;