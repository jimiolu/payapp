import React, { ReactNode } from 'react'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <main>
        <div>{children}</div>
    </main>
  )
}

export default layout