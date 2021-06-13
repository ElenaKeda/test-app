import './App.css';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Table } from 'antd'
import { InfoCircleTwoTone, ExclamationCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';


const ModalBtn = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOkClose = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Тип',
      dataIndex: 'type',
      width: 255,
      sorter: true,
    },
    {
      title: 'Сообщение',
      dataIndex: 'message',
      width: 800,
      ellipsis: true,
      sorter: true,
    },
    {
      title: 'Дата создания',
      dataIndex: 'date',
      align: 'center' as const,
      sorter: true,
    },
    {
      title: 'Пользователь',
      dataIndex: 'user',
      width: 255,
      sorter: true,
    },
  ];
  
  const data = [
    {
      key: '1',
      type: <InfoCircleTwoTone twoToneColor="#1890ff" style={{ fontSize: '26px' }} />,
      message: 'Текст информационного сообщения. Может быть очень длинным',
      date: Date.now(),
      user: 'Иванов И.И',
    },
    {
      key: '2',
      type: <ExclamationCircleTwoTone twoToneColor="#fa8c16" style={{ fontSize: '26px' }} />,
      message: 'Текст предупреждения',
      date: Date.now(),
      user: 'Иванов И.И',
    },
    {
      key: '3',
      type: <CloseCircleTwoTone twoToneColor="#f5222d" style={{ fontSize: '26px' }} />,
      message: 'Текст ошибки',
      date: Date.now(),
      user: 'Иванов И.И',
    },
    {
      key: '4',
      type: <InfoCircleTwoTone twoToneColor="#1890ff" style={{ fontSize: '26px' }} />,
      message: 'Текст информационного сообщения',
      date: Date.now(),
      user: 'Иванов И.И',
    },
  ];

  function onChange(filters:any, sorter:any, extra:any) {
    console.log('params', filters, sorter, extra);
  }

  return (
    <>
      <Button onClick={showModal}>
        Просмотр протокола
      </Button>
      <Modal title="Протокол ошибок выполнения процессов"
            width={1600}
            maskClosable={false}
            onCancel={handleOkClose}
            visible={isModalVisible}
            footer={[
                <Button onClick={handleOkClose}>
                  Закрыть
                </Button>
              ]}>
        <Table columns={columns} dataSource={data} onChange={onChange} pagination={false} scroll={{ x: 1600 }} />
      </Modal>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ModalBtn />
      </header>
    </div>
  );
}

export default App;
