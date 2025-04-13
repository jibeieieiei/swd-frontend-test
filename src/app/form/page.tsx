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

const FormPage = () => {
  const { t } = useTranslation()
  const onFinish = (e: any) => {
    const id = nanoid()
    localStorage.setItem('form', JSON.stringify([{ id: id, form: e }]))
  }

  const [form] = useForm()

  const onEdit = () => {
    form.setFieldsValue({})
  }

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
                <Select.Option value="thai">{t('Thai')}</Select.Option>
                <Select.Option value="french">{t('French')}</Select.Option>
                <Select.Option value="american">{t('American')}</Select.Option>
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
                <Radio value="male">{t('Male')}</Radio>
                <Radio value="female">{t('Female')}</Radio>
                <Radio value="unsex">{t('Unsex')}</Radio>
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
                <Select.Option value="thai">
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

                <Select.Option value="france">
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
                <Select.Option value="american">
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
              <Button>{t('RESET')}</Button>
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
          <InfoTable />
        </div>
      </div>
    </ConfigProvider>
  )
}

export default FormPage
