'use client'
import { Select } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import './i18n'

const ChangeLanguage = () => {
  const { i18n } = useTranslation()

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang)
  }
  return (
    <Select
      defaultValue="en"
      style={{ width: 120 }}
      onChange={(value) => {
        handleChangeLang(value)
      }}
      options={[
        { value: 'en', label: 'English' },
        { value: 'th', label: 'ภาษาไทย' },
      ]}
    />
  )
}

export default ChangeLanguage
