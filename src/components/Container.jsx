import React from 'react'

function GlobalContainer({ children }) {
  return (
    <div className='max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 transition-all duration-300'>
        {children}
    </div>
  );
}

export default GlobalContainer;