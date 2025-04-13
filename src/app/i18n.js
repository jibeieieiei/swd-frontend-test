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
      Title: 'Title',
      'Mr.': 'Mr.',
      'Ms.': 'Ms.',
      'Mrs.': 'Mrs.',
      Firstname: 'Firstname',
      Lastname: 'Lastname',
      Birthday: 'Birthday',
      'mm//dd//yy': 'mm/dd/yy',
      Nationality: 'Nationality',
      '- - Please Select - -': '- - Please Select - -',
      Thai: 'Thai',
      French: 'French',
      American: 'American',
      CitizenID: 'Citizen ID',
      Gender: 'Gender',
      Male: 'Male',
      Female: 'Female',
      Unsex: 'Unsex',
      'Mobile Phone': 'Mobile Phone',
      'Passport No': 'Passport No',
      'Expected salary': 'Expected Salary',
      RESET: 'RESET',
      SUBMIT: 'SUBMIT',
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
      Title: 'คำนำหน้า',
      'Mr.': 'นาย',
      'Ms.': 'นางสาว',
      'Mrs.': 'นาง',
      Firstname: 'ชื่อจริง',
      Lastname: 'นามสกุล',
      Birthday: 'วันเกิด',
      'mm//dd//yy': 'เดือน/วัน/ปี',
      Nationality: 'สัญชาติ',
      '- - Please Select - -': '- - กรุณาเลือก - -',
      Thai: 'ไทย',
      French: 'ฝรั่งเศส',
      American: 'อเมริกัน',
      CitizenID: 'เลขบัตรประชาชน',
      Gender: 'เพศ',
      Male: 'ชาย',
      Female: 'หญิง',
      Unsex: 'ไม่ระบุ',
      'Mobile Phone': 'หมายเลขโทรศัพท์มือถือ',
      'Passport No': 'หนังสือเดินทาง',
      'Expected salary': 'เงินเดือนที่คาดหวัง',
      RESET: 'ล้างข้อมูล',
      SUBMIT: 'ส่งข้อมูล',
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
