import React from 'react'
import Icon from '../icon/Icon'
import { createPortal } from 'react-dom'

function AlertModal({ message, children, onClose, title }) {
  return createPortal(
    <div className="D-Blur" onClick={onClose}>
      <div className="AlertModal" onClick={(e) => e.stopPropagation()}>
        <Icon.Delete className="AlertModal-Close" onClick={onClose} />
        {title && <h3 className="f-24 f-Brown mb-3 font-M">{title}</h3>}
        {message && <span className="f-24 f-Brown mb-3 font-M">{message}</span>}
        {children}
      </div>
    </div>,
    document.body
  )
}

export default AlertModal
