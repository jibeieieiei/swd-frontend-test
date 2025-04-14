'use client'
import { useTranslation } from 'react-i18next'
import styles from '.././page.module.css'
import '.././i18n'
import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Image,
  Input,
  Radio,
  Select,
} from 'antd'
import { useForm } from 'antd/es/form/Form'
import { nanoid } from 'nanoid'
import CitizenIDInput from './CitizenIDInput'

import InfoTable from './InfoTable'
import { useDispatch, useSelector } from 'react-redux'
import { edit, insert, reset } from './action'
import { FormData, FormState } from './reducer'
import { useEffect } from 'react'

export interface FormType {
  title: string
  firstname: string
  lastname: string
  'date-picker': string
  nationality: string
  'citizen-id': {
    part1?: string
    part2?: string
    part3?: string
    part4?: string
  }
  gender: string
  'mobile-phone': string
  Phone: string
}

const FormPage = () => {
  const { t } = useTranslation()
  const [form] = useForm()
  const dispatch = useDispatch()
  const isEdit = useSelector((state: FormState) => {
    return state.isEdit
  })

  const onFinish = (e: FormType) => {
    if (isEdit) {
      const data: string | null = localStorage.getItem('form')
      if (data) {
        const array: FormData[] = JSON.parse(data)
        const newData = array.map((item) =>
          item.id === isEdit ? { id: isEdit, checked: false, ...e } : item
        )
        localStorage.setItem('form', JSON.stringify(newData))
        dispatch(edit(newData))
      }
      form.resetFields()
    } else {
      const id = nanoid()
      const data: string | null = localStorage.getItem('form')
      if (data) {
        localStorage.setItem(
          'form',
          JSON.stringify([
            ...JSON.parse(data),
            { id: id, checked: false, ...e },
          ])
        )
      } else {
        localStorage.setItem(
          'form',
          JSON.stringify([{ id: id, checked: false, ...e }])
        )
      }
      form.resetFields()
      dispatch(insert({ id: id, checked: false, ...e }))
    }
    alert(t('Save Success'))
  }

  const onReset = () => {
    form.resetFields()
    dispatch(reset())
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('form')
      if (data) {
        dispatch(edit(JSON.parse(data)))
      }
    }
  }, [])

  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            itemMarginBottom: 0,
          },
        },
      }}
    >
      <div className={styles.page}>
        <span
          style={{
            position: 'absolute',
            fontSize: '32px',
            top: '20px',
            left: '40px',
          }}
        >
          {t('Form & Table')}
        </span>

        <Form form={form} className={styles.form} onFinish={onFinish}>
          <div className={styles.formRow}>
            <Form.Item
              label={t('Title')}
              name="title"
              rules={[{ required: true, message: '' }]}
            >
              <Select placeholder={t('Title')} className={styles.formItem}>
                <Select.Option value="mr">{t('Mr.')}</Select.Option>
                <Select.Option value="mrs">{t('Mrs.')}</Select.Option>
                <Select.Option value="ms">{t('Ms.')}</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={t('Firstname')}
              name="firstname"
              rules={[{ required: true, message: '' }]}
            >
              <Input placeholder=""></Input>
            </Form.Item>
            <Form.Item
              label={t('Lastname')}
              name="lastname"
              rules={[{ required: true, message: '' }]}
            >
              <Input placeholder=""></Input>
            </Form.Item>
          </div>
          <div className={styles.formRow}>
            <Form.Item
              label={t('Birthday')}
              name="date-picker"
              rules={[{ required: true, message: '' }]}
            >
              <DatePicker placeholder={t('mm//dd//yy')} />
            </Form.Item>
            <Form.Item
              label={t('Nationality')}
              name="nationality"
              rules={[{ required: true, message: '' }]}
            >
              <Select
                placeholder={t('- - Please Select - -')}
                className={styles.formItem}
              >
                <Select.Option value="Thai">{t('Thai')}</Select.Option>
                <Select.Option value="French">{t('French')}</Select.Option>
                <Select.Option value="American">{t('American')}</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className={styles.formRow}>
            <Form.Item
              label={t('CitizenID')}
              rules={[{ required: true, message: '' }]}
            >
              <CitizenIDInput />
            </Form.Item>
          </div>
          <div className={styles.formRow}>
            <Form.Item
              label={t('Gender')}
              name="gender"
              rules={[{ required: true, message: 'Please pick an item!' }]}
            >
              <Radio.Group>
                <Radio value="Male">{t('Male')}</Radio>
                <Radio value="Female">{t('Female')}</Radio>
                <Radio value="Unsex">{t('Unsex')}</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <div className={styles.formRow}>
            <Form.Item
              label={t('Mobile Phone')}
              name="mobile-phone"
              rules={[{ required: true, message: '' }]}
            >
              <Select style={{ minWidth: '100px' }}>
                <Select.Option value="+66">
                  <div
                    style={{
                      display: 'flex',
                      gap: '4px',
                    }}
                  >
                    <Image
                      src={'/thailand.png'}
                      alt="thai"
                      width={15}
                      height={15}
                      preview={false}
                    />
                    +66
                  </div>
                </Select.Option>

                <Select.Option value="+33">
                  <div
                    style={{
                      display: 'flex',
                      gap: '4px',
                    }}
                  >
                    <Image
                      src={'/france.jpg'}
                      alt="france"
                      width={15}
                      height={15}
                      preview={false}
                    />
                    +33
                  </div>
                </Select.Option>
                <Select.Option value="+1">
                  <div
                    style={{
                      display: 'flex',
                      gap: '4px',
                    }}
                  >
                    <Image
                      src={'/american.jpg'}
                      alt="american"
                      width={15}
                      height={15}
                      preview={false}
                    />
                    +1
                  </div>
                </Select.Option>
              </Select>
            </Form.Item>
            <span> - </span>
            <Form.Item
              label=""
              name="Phone"
              rules={[{ required: true, message: '' }]}
            >
              <Input
                maxLength={10}
                onKeyDown={(event) => {
                  if (!/[0-9]/.test(event.key) && event.key !== 'Backspace') {
                    event.preventDefault()
                  }
                }}
              />
            </Form.Item>
          </div>
          <div className={styles.formRow}>
            <Form.Item label={t('Passport No')} name="passport">
              <Input maxLength={10} />
            </Form.Item>
          </div>
          <div className={styles.formRow}>
            <Form.Item label={t('Expected salary')} name="salary">
              <Input
                maxLength={10}
                onKeyDown={(event) => {
                  if (!/[0-9]/.test(event.key) && event.key !== 'Backspace') {
                    event.preventDefault()
                  }
                }}
              />
            </Form.Item>
            <div style={{ marginLeft: '100px', display: 'flex', gap: '10px' }}>
              <Button onClick={onReset}>{t('RESET')}</Button>
              <Button htmlType="submit">{t('SUBMIT')}</Button>
            </div>
          </div>
        </Form>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <InfoTable form={form} />
        </div>
      </div>
    </ConfigProvider>
  )
}

export default FormPage
