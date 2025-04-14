import { Form, Input, Space } from 'antd'

const CitizenIDInput = () => {
  return (
    <Space.Compact>
      <Form.Item name={['citizen-id', 'part1']} noStyle>
        <Input
          style={{ width: '100px' }}
          maxLength={1}
          id="citizen-id-1"
          onChange={(e) => {
            if (e.target.value.length === 1) {
              document.getElementById('citizen-id-2')?.focus()
            }
          }}
          onKeyDown={(e) => {
            if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
              e.preventDefault()
            }
          }}
        />
      </Form.Item>
      <span style={{ padding: '0 5px' }}>-</span>
      <Form.Item name={['citizen-id', 'part2']} noStyle>
        <Input
          style={{ width: '100px' }}
          maxLength={4}
          id="citizen-id-2"
          onChange={(e) => {
            if (e.target.value.length === 4) {
              document.getElementById('citizen-id-3')?.focus()
            }
          }}
          onKeyDown={(e) => {
            const inputValue = document.getElementById(
              'citizen-id-2'
            ) as HTMLInputElement
            if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
              e.preventDefault()
            } else if (e.key === 'Backspace' && inputValue.value === '') {
              document.getElementById('citizen-id-1')?.focus()
            }
          }}
        />
      </Form.Item>
      <span style={{ padding: '0 5px' }}>-</span>
      <Form.Item name={['citizen-id', 'part3']} noStyle>
        <Input
          style={{ width: '100px' }}
          maxLength={5}
          id="citizen-id-3"
          onChange={(e) => {
            if (e.target.value.length === 5) {
              document.getElementById('citizen-id-4')?.focus()
            }
          }}
          onKeyDown={(e) => {
            const inputValue = document.getElementById(
              'citizen-id-3'
            ) as HTMLInputElement
            if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
              e.preventDefault()
            } else if (e.key === 'Backspace' && inputValue.value === '') {
              document.getElementById('citizen-id-2')?.focus()
            }
          }}
        />
      </Form.Item>
      <span style={{ padding: '0 5px' }}>-</span>
      <Form.Item name={['citizen-id', 'part4']} noStyle>
        <Input
          style={{ width: '100px' }}
          maxLength={2}
          id="citizen-id-4"
          onChange={(e) => {
            if (e.target.value.length === 2) {
              document.getElementById('citizen-id-5')?.focus()
            }
          }}
          onKeyDown={(e) => {
            const inputValue = document.getElementById(
              'citizen-id-4'
            ) as HTMLInputElement
            if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
              e.preventDefault()
            } else if (e.key === 'Backspace' && inputValue.value === '') {
              document.getElementById('citizen-id-3')?.focus()
            }
          }}
        />
      </Form.Item>
      <span style={{ padding: '0 5px' }}>-</span>
      <Form.Item name={['citizen-id', 'part5']} noStyle>
        <Input
          style={{ width: '100px' }}
          maxLength={1}
          id="citizen-id-5"
          onKeyDown={(e) => {
            const inputValue = document.getElementById(
              'citizen-id-5'
            ) as HTMLInputElement
            if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
              e.preventDefault()
            } else if (e.key === 'Backspace' && inputValue.value === '') {
              document.getElementById('citizen-id-4')?.focus()
            }
          }}
        />
      </Form.Item>
    </Space.Compact>
  )
}

export default CitizenIDInput
