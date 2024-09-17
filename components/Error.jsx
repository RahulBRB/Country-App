import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()
  console.log(error)
  return (
    <>
    <div>Something went wrong . . . </div>
    <h1>{error.status}</h1>
    <p>{error.statusText}</p>
    </>
  )
}
