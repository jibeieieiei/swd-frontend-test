'use client'
import styles from './page.module.css'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button className={styles.box} onClick={() => router.push('/layout')}>
          <span>{t('Test')} 1</span>
          <span>{t('Layout & Style')}</span>
        </Button>
        <Button className={styles.box}>
          <span>{t('Test')} 2</span>
          <span>{t('Connect')} api</span>
        </Button>
        <Button className={styles.box} onClick={() => router.push('/form')}>
          <span>{t('Test')} 3</span>
          <span>{t('Form & Table')}</span>
        </Button>
      </main>
    </div>
  )
}
