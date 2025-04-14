'use client'
import { Button, Checkbox, Table } from 'antd'
import type { FormInstance, PaginationProps, TableProps } from 'antd'
import { useState } from 'react'
import styles from '../page.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { FormData, FormState } from './reducer'
import dayjs, { Dayjs } from 'dayjs'
import {
  checkAll,
  checkByKey,
  clickDelete,
  clickEdit,
  deleteSelection,
  uncheckAll,
} from './action'

interface DataType {
  key: string
  name: string
  gender: string
  mobile: string
  nationality: string
  manage: string
}

interface FormType {
  id: string
  title: string
  firstname: string
  lastname: string
  'date-picker': Dayjs
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
  checked: boolean
}

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

const InfoTable = ({ form }: { form: FormInstance<FormType> }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])

  const dataTable = useSelector((state: FormState) => {
    return state.form
  })

  const dateFormat = 'YYYY/MM/DD'
  const dispatch = useDispatch()

  const temp: React.Key[] = dataTable.map((item) =>
    item.checked ? item.id : ''
  )

  const rowSelection: TableProps<DataType>['rowSelection'] = {
    selectedRowKeys: temp,
    onChange: (selectedKeys) => {
      dispatch(checkByKey(selectedKeys))
    },
  }

  const handleSelectAll = () => {
    if (dataTable.some((item) => item.checked === false)) {
      dispatch(checkAll())
    } else if (dataTable.every((item) => item.checked === true)) {
      dispatch(uncheckAll())
    }
  }

  const onEdit = (
    form: FormInstance<FormType>,
    dataTable: FormData[],
    id: string
  ) => {
    const editData = dataTable
      .map((item) => ({
        ...item,
        'date-picker': dayjs(item['date-picker'], dateFormat),
      }))
      .find((item) => item.id === id)
    if (editData) {
      form.setFieldsValue(editData)
    }
    dispatch(clickEdit(editData?.id ?? ''))
  }

  const onDelete = (dataTable: FormData[], id: string) => {
    const deleteData = dataTable.filter((item) => item.id !== id)

    if (deleteData) {
      localStorage.setItem('form', JSON.stringify(deleteData))
      dispatch(clickDelete(deleteData))
    }
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
          <div
            className={styles.editButton}
            onClick={() => {
              onEdit(form, dataTable, value.key)
            }}
          >
            EDIT
          </div>
          <div
            className={styles.editButton}
            onClick={() => {
              onDelete(dataTable, value.key)
            }}
          >
            DELETE
          </div>
        </div>
      ),
    },
  ]
  const data: DataType[] = dataTable.map((item) => {
    return {
      key: item.id,
      name: `${item.firstname} ${item.lastname}`,
      gender: `${item.gender}`,
      mobile: `${item['mobile-phone']}${item.Phone}`,
      nationality: `${item.nationality}`,
      manage: '',
    }
  })

  return (
    <div style={{ display: 'flex', width: '100%', position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: '16px',
        }}
      >
        <Checkbox
          onClick={handleSelectAll}
          checked={dataTable.every((item) => item.checked)}
        >
          Select All
        </Checkbox>
        <Button
          style={{ zIndex: 10 }}
          onClick={() => {
            const deleteData = dataTable.filter((item) => !item.checked)

            if (deleteData) {
              localStorage.setItem('form', JSON.stringify(deleteData))
              dispatch(deleteSelection())
            }
          }}
        >
          DELETE
        </Button>
      </div>

      <Table
        style={{ width: '100%' }}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 3,
          position: ['topRight'],
          itemRender: itemRender,
        }}
      />
    </div>
  )
}

export default InfoTable
