import React from 'react'

export default function Loader() {
  return (
    <div>
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
