import React, { ReactNode } from 'react'

function layout({children} :{children: ReactNode}) {
  return (
    <div className='relative flex h-full flex-col items-center justify-center'>{children}</div>
  );
}

export default layout;
