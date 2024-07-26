import React from 'react'
import PrimaryHeading from '../common/PrimaryHeading'
import Paragraph from '../common/Paragraph'
import { CommentSenderArrow, IconListLogo, LeftArrow, Pen, RightArrow, SmallFavIcon } from '../common/Icons'

const Mastering = () => {
    return (
        <div className='lg:pt-[160px] md:pt-[120px] sm:pt-20 pt-16'>
            <div className='px-5'>
                <PrimaryHeading textName='Mastering' blueText=' Detailed' blackText=' Explanations' className='text-center' />
                <Paragraph textName='Providing In-Depth, Customized Solutions to Complex Queries' className='text-center pt-4' />
                <div className='container 2xl:max-w-[1360px] max-w-[1180px] mx-auto mt-10 bg-light_skyblue lg:py-11 sm:py-8 py-6 md:px-6 px-4 rounded-2xl'>
                    <div className='flex justify-end items-center gap-4'>
                        <Pen />
                        <div className='max-w-[690px] w-full lg:py-5 py-3 pl-3 lg:pl-5 border-[0.5px] border-grey rounded-xl bg-white'>
                            <h3 className='font-medium'>What is data annotation, and why is it important?</h3>
                        </div>
                    </div>
                    <div className='items-center flex justify-end gap-3 pt-4'>
                        <LeftArrow />
                        <Paragraph textName='1/1' />
                        <RightArrow />
                    </div>
                    <div className='flex items-start lg:gap-8 md:gap-6 gap-4 pt-[6px]'>
                        <div className=' max-w-9 min-h-9 h-full w-full rounded-full bg-light_blue3 items-center justify-center flex border border-transparent hover:border-blue ease-in-out duration-300'>
                            <SmallFavIcon />
                        </div>
                        <div>  <p className='text-grey max-w-[935px] text-xl font_gilroy_medium'>Data annotation is the process of labeling data to make it usable for machine learning algorithms. It's essential because accurately labeled data is critical for training models to understand and interpret real-world information.</p>
                            <p className='text-grey max-w-[935px] text-xl font_gilroy_medium lg:pt-5 sm:pt-3 pt-2'>We specialize in annotating various data types, including text, images, audio, and video. Our services cover sentiment analysis, image segmentation, object detection, and more.</p>
                        </div>
                    </div>
                    <div className='flex lg:py-8 md:py-6 py-4 lg:pl-8 sm:pl-6 pl-4  lg:pr-7 pr-4 border-grey border-[0.5px] rounded-xl gap-4 bg-white lg:mt-20 md:mt-15 mt-10'>
                        <div className='cursor-pointer'><IconListLogo /></div>
                        <input type="text" placeholder='Message Hyperleen' className='font-medium text-grey opacity-40 outline-none w-full' />
                        <div className='cursor-pointer'> <CommentSenderArrow /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mastering