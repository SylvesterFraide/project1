import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='text-center my-8 uppercase'>
      <p className='text-lg font-semibold text-gray-800'>{text1} <span className='text-gray-500'>{text2}</span></p>
    </div>
  )
}

export default Title;