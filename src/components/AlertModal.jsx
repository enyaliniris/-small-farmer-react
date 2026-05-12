import React from 'react'
import Icon from '../icon/Icon'

function AlertModal({ message, children, onClose, title }) {
  return (
    <div className="D-Blur">
      <div className="d-flex justify-content-center w-100 h-100">
        <div className="P-LoginAlert">
          <Icon.Delete
            style={{
              position: 'absolute',
              top: '10%',
              left: '90%',
              cursor: 'pointer',
            }}
            onClick={onClose}
          />
          {title && <h3 className="f-24 f-Brown mb-3 font-M">{title}</h3>}
          {message && (
            <span className="f-24 f-Brown mb-3 font-M">{message}</span>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

export default AlertModal
