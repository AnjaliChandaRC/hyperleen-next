import EnsureHighQuality from '@/components/common/EnsureHighQuality'
import HowWorks from '@/components/common/HowWorks'
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