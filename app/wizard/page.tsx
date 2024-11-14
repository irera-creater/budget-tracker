import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
  const user =  await currentUser();
  if(!user){
    redirect('/sign-in');
  }
    
   
  return (
  <div className='container flex max-w-2xl flex-col items-center justify-between gap-4'>
    <h1 className='text-center text-3xl'>
        Welcome, <span className='ml-2 font-bold'>{user.firstName} 👋</span>
    </h1>
     <h2 className='mt-4 text-center text-base text-muted-foreground'>
        Let &apos;s get started by setting up your currency.
     </h2>
  </div>
  );
}

export default page;
