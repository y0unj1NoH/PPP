import { createRoot } from 'react-dom/client'
import ToastManager from './ToastManager'

// 토스트들을 관리해주고 띄우는 클래스
class Toast {
  portal = null

  constructor() {
    const portalId = 'toast-portal'
    const portalElement = document.getElementById(portalId)

    if (portalElement) {
      this.portal = portalElement
      return
    } else {
      this.portal = document.createElement('div')
      this.portal.id = portalId
      document.body.appendChild(this.portal)
    }

    const root = createRoot(this.portal)

    // createPortal은 해당 포탈을 원하는 컴포넌트에 넣는 기능
    // render는 해당 포탈을 원하는 컴포넌트 안에서 출력하는 기능
    root.render(
      <ToastManager bind={(createToast) => (this.createToast = createToast)} />,
    )
  }

  show(message, duration = 2000) {
    this.createToast(message, duration)
  }
}

export default new Toast()
