import React from 'react';
import { useRouter } from 'next/router';

const Page = () => {
    const router = useRouter();
    const { params } = router.query;
    console.log(params);
    return(
        <h1>
            Notes {params}
        </h1>
    )
}

export default Page;