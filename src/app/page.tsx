'use client'
import styles from './page.module.css'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button className={styles.box} onClick={() => router.push('/layout')}>
          <span>แบบทดสอบที่ 1</span>
          <span>การจัดการหน้าเว็บ</span>
        </Button>
        <Button className={styles.box}>
          <span>แบบทดสอบที่ 2</span>
          <span>การเชื่อมต่อ api</span>
        </Button>
        <Button className={styles.box} onClick={() => router.push('/form')}>
          <span>แบบทดสอบที่ 3</span>
          <span>การจัดการหน้าฟอร์ม</span>
        </Button>
      </main>
    </div>
  )
}
