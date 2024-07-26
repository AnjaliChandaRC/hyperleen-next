import EnsureHighQuality from '@/components/home/EnsureHighQuality'
import HowWorks from '@/components/home/HowWorks'
import Mastering from '@/components/rlhf/Mastering'
import React from 'react'

const page = () => {
    return (
        <div>
            <Mastering />
            <HowWorks />
            <EnsureHighQuality />
        </div>
    )
}

export default page