'use client'
import { Button, Checkbox, Table } from 'antd'
import type { PaginationProps, TableProps } from 'antd'
import { useState } from 'react'
import styles from '../page.module.css'

interface DataType {
  key: string
  name: string
  gender: string
  mobile: string
  nationality: string
  manage: string
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a: DataType, b: DataType) => a.name.localeCompare(b.name),
    width: 450,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    sorter: (a: DataType, b: DataType) => a.gender.localeCompare(b.gender),
    width: 170,
  },
  {
    title: 'Mobile',
    dataIndex: 'mobile',
    key: 'mobile',
    sorter: (a: DataType, b: DataType) => a.mobile.localeCompare(b.mobile),
    width: 300,
  },
  {
    title: 'Nationality',
    dataIndex: 'nationality',
    key: 'nationality',
    sorter: (a: DataType, b: DataType) =>
      a.nationality.localeCompare(b.nationality),
  },
  {
    title: 'Manage',
    dataIndex: 'manage',
    key: 'manage',
    render: (_: string, value: DataType) => (
      <div style={{ display: 'flex', justifyContent: 'start', gap: '16px' }}>
        <div className={styles.editButton}>EDIT{value.key}</div>
        <div className={styles.editButton}>DELETE{value.key}</div>
      </div>
    ),
  },
]

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    gender: 'Male',
    mobile: '1',
    nationality: '',
    manage: '',
  },
  {
    key: '2',
    name: 'Jim Green',
    gender: 'Male',
    mobile: '2',
    nationality: '',
    manage: '',
  },
  {
    key: '3',
    name: 'Joe Black',
    gender: 'Male',
    mobile: '4',
    nationality: 'asdf',
    manage: 'asda',
  },
  {
    key: '4',
    name: 'Lisa White',
    gender: 'Male',
    mobile: '3',
    nationality: '',
    manage: '',
  },
]

const itemRender: PaginationProps['itemRender'] = (
  _,
  type,
  originalElement
) => {
  if (type === 'prev') {
    return <a>Previous</a>
  }
  if (type === 'next') {
    return <a>Next</a>
  }
  return originalElement
}

const InfoTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const rowSelection: TableProps<DataType>['rowSelection'] = {
    selectedRowKeys,
    onChange: (selectedKeys) => {
      setSelectedRowKeys(selectedKeys)
    },
  }

  const handleSelectAll = () => {
    const allKeys = data.map((item) => item.key)
    setSelectedRowKeys(allKeys)
  }

  return (
    <div style={{ display: 'flex', width: '100%', position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}
      >
        <Checkbox onClick={handleSelectAll}>Select All</Checkbox>
        <Button>DELETE</Button>
      </div>
      <Table
        style={{ width: '100%' }}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 2,
          position: ['topRight'],
          itemRender: itemRender,
        }}
      />
    </div>
  )
}

export default InfoTable
