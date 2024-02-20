'use client';

import React from 'react'
import { AuthLayoutContainer } from './style'
import BackgroundImg from '@/components/BackgroundImg';


function AuthLayout({
  children }: {
    children: React.ReactNode
  }) {
  return (
    <AuthLayoutContainer>
      <BackgroundImg></BackgroundImg>
      {children}
    </AuthLayoutContainer>
  )
}

export default AuthLayout