'use client'
import { Table, Tag } from 'antd'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a: any, b: any) => a.name.localeCompare(b.name),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a: any, b: any) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    sorter: (a: any, b: any) => a.address.localeCompare(b.address),
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    key: 'tags',
    render: (tags: string[]) => (
      <>
        {tags.map((tag) => (
          <Tag color="blue" key={tag}>
            {tag.toUpperCase()}
          </Tag>
        ))}
      </>
    ),
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: '10 Downing Street, London',
    tags: ['developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: '22 Baker Street, London',
    tags: ['designer'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 28,
    address: '18 King’s Cross, London',
    tags: ['engineer', 'team lead'],
  },
  {
    key: '4',
    name: 'Lisa White',
    age: 25,
    address: '11 Oxford Street, London',
    tags: ['intern'],
  },
]

const SortableMockTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 2,
        position: ['topRight'],
      }}
    />
  )
}

export default SortableMockTable
