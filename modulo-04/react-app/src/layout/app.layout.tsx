import { ProfileContext } from '@/core'
import React, { PropsWithChildren, useContext } from 'react'

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { username } = useContext(ProfileContext);
  return (
    <div className='layout-app-container'>
      <div className="layout-app-header">{ username }</div>
      {children}
    </div>
  )
}
