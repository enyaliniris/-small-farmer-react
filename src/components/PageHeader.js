import React from 'react'
import '../css/PageHeader.css'

function PageHeader({ backgroundImage, alt = 'Page Header', waveImage, children }) {
  return (
    <header
      className="page-header"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      role="banner"
      aria-label={alt}
    >
      {children}
      {waveImage && (
        <img
          className="page-header-wave w-100 d-none d-md-block"
          src={waveImage}
          alt=""
        />
      )}
    </header>
  )
}

export default PageHeader
