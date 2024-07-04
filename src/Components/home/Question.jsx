import React from 'react';
import women from '../../assets/ledis.jpg'

const Question = () => {
    return (
        <div>
            <div className='py-10'><div className='grid justify-center'> <p className='text-center border w-24 rounded-lg border-red-400 bg-green-200'>Our FAQ</p></div>
                <h1 className='text-center text-3xl font-bold py-5'>Commonly Asked Questions</h1></div>
            <div className='grid grid-cols-2 items-center justify-center gap-10 mb-44' >
                <div><dir>
                    <div className="collapse collapse-arrow my-5 border ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">How Do You Address My Concepts?</div>
                        <div className="collapse-content">
                            <p>
                                It can increase brand visibility, drive website traffic, generate leads, and ultimately boost sales and revenue.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow my-5 border ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium"> In Which Industries Do You Have Expertise?</div>
                        <div className="collapse-content">
                            <p>

                                We work with businesses of various budgets and can create strategies that align with your financial resources while delivering meaningful results.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow my-5 border ">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium"> How Do You Approach My Ideas?</div>
                        <div className="collapse-content">
                            <p>

                                provides a comprehensive range of digital services, including website design and development, digital marketing, search engine optimization</p>
                        </div>
                    </div>


                </dir>
                </div>
                <div className='relative grid grid-cols-1 justify-center items-center h-full'>
                    <div><img className='absolute  top-5 right-1/3 max-w-lg rounded-md' src={women} alt="" /></div>
                    <div> <img className='absolute left-5 top-1/2 right-1/2 rounded-md' src={women} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Question;