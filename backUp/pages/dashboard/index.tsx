import React, { useEffect } from 'react'
import { QueryClient, useQueryClient } from 'react-query'

export default function index() {
    const queryClient=useQueryClient()

    const data=queryClient.getQueryData("userData")
    useEffect(() => {
      console.log('userData: ', data)
    }, [])
    
  return (
    <div>
      {`${data}`}
    </div>
  )
}
