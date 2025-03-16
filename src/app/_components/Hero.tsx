"use client"
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50'>
      <div className='max-w-4xl mx-auto text-center px-4'>
        <span className='inline-block bg-blue-100 text-blue-800 rounded-full px-6 py-2 text-sm font-medium mb-8'>
          Investor - StartUp Association Platform
        </span>

        <h1 className='text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6'>
          Transform Dreams into 
          <span className='text-blue-600'> Global Ventures</span> with StackSurge
        </h1>

        <p className='text-xl text-gray-600 mb-12'>
          Where Big Ideas Meet Big Investors
        </p>

        <div className='flex justify-center gap-6'>
          <RegisterLink>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors'>
              Join Now
            </button>
          </RegisterLink>
          <button className='border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-medium transition-colors'>
            About Us
          </button>
        </div>
      </div>
    </div>
  )
}