import EnsureHighQuality from '@/components/common/EnsureHighQuality'
import HowWorks from '@/components/common/HowWorks'
import Mastering from '@/components/rlhf/Mastering'
import React from 'react'

const page = () => {
    return (
        <div>
            <Mastering />
            <div className='xl:pt-[160px] lg:pt-20 pt-16'><HowWorks /></div>
            <EnsureHighQuality />
        </div>
    )
}

export default page