'use client';
import { FC } from 'react';
import Processes from '@/components/processes';
import Content from '@/components/content';
import HeaderActions from './header-actions';
import { login } from '@/lib/iam';
import { Button, Result, Space } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import Auth from '@/lib/AuthCanWrapper';

const ProcessesPage: FC = () => {
  return (
    <Content title="Processes">
      <Space direction="vertical" size="large" style={{ display: 'flex', height: '100%' }}>
        <Processes />
      </Space>
    </Content>
  );
};

export default Auth(
  {
    action: 'view',
    resource: 'Process',
    fallback: (
      <Result status="403" title="Not allowed" subTitle="You're not allowed to view processes" />
    ),
    notLoggedIn: (
      <Result
        status="403"
        title="You're not logged in"
        subTitle="Sorry, you have to be logged in to use the app"
        extra={
          <Button type="primary" icon={<LoginOutlined />} onClick={login}>
            Login
          </Button>
        }
      />
    ),
  },
  ProcessesPage,
);
