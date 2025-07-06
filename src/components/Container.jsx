import React from 'react'

function GlobalContainer({ children }) {
  return (
    <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300'>
        {children}
    </div>
  );
}

export default GlobalContainer;