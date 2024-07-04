import React from 'react';
import HomeHero from '../../Components/home/HomeHero';
import HomeService from '../../Components/home/HomeService';
import OurServices from '../../Components/home/OurServices';
import Form from '../../Components/home/Form';
import Transformation from '../../Components/home/Transformation';
import Testimonial from '../../Components/home/Testimonial';
import Blogs from '../../Components/home/Blogs';
import Question from '../../Components/home/Question';
import Logo from '../../Components/home/Logo';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <HomeHero></HomeHero>
            <Logo></Logo>
            <HomeService></HomeService>
            <Form></Form>
            <OurServices></OurServices>
            <Transformation></Transformation>
            <Testimonial></Testimonial>
            <Question></Question>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;