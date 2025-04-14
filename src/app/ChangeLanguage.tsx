'use client'
import { Button, Select } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import './i18n'
import { useRouter } from 'next/navigation'

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation()

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  const router = useRouter()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
      <Button
        onClick={() => {
          router.push('/')
        }}
      >
        {t('Home')}
      </Button>
    </div>
  )
}

export default ChangeLanguage
