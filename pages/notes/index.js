import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div>
             <div>Notes Index page</div>
            <Link href='/notes/[id]' as={`/notes/1`}>Note 1</Link>
        </div>
    )
}
export default Page;