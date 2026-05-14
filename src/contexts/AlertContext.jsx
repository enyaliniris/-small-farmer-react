import { createContext, useContext, useState } from 'react'
import AlertModal from '../components/AlertModal'

const AlertContext = createContext()

export function AlertProvider({ children }) {
  const [alertConfig, setAlertConfig] = useState(null)

  const showAlert = ({ title, message, content }) => {
    setAlertConfig({ title, message, content })
  }

  const closeAlert = () => setAlertConfig(null)

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alertConfig && (
        <AlertModal
          title={alertConfig.title}
          message={alertConfig.message}
          onClose={closeAlert}
        >
          {alertConfig.content}
        </AlertModal>
      )}
    </AlertContext.Provider>
  )
}

export const useAlert = () => useContext(AlertContext)
