import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      'Layout & Style': 'Layout & Style',
      Test: 'Test',
      Connect: 'Connect',
      'Form & Table': 'Form & Table',
      'Move Position': 'Move Position',
      'Move Shape': 'Move Shape',
    },
  },
  th: {
    translation: {
      'Layout & Style': 'การจัดการหน้าเว็บ',
      Test: 'แบบทดสอบที่',
      Connect: 'การเชื่อมต่อ',
      'Form & Table': 'การจัดการหน้าฟอร์ม',
      'Move Position': 'เปลี่ยนตำแหน่ง',
      'Move Shape': 'เลื่อนรูปแบบ',
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
