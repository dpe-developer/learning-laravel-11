import React, { useState } from 'react';
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, usePage } from '@inertiajs/react';

const { Header, Content, Footer, Sider } = Layout;

const siderStyle = {
	overflow: 'auto',
	height: '100vh',
	position: 'fixed',
	insetInlineStart: 0,
	top: 0,
	bottom: 0,
	scrollbarWidth: 'thin',
	scrollbarGutter: 'stable',
};
  
const App = ({children}) => {
	const user = usePage().props.auth.user;
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return (
		<Layout hasSider>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				style={siderStyle}
			>
				<div className="demo-logo-vertical" />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={['1']}
					items={[
						{
							key: '1',
							icon: <UserOutlined />,
							label: 'nav 1',
						},
						{
							key: '2',
							icon: <VideoCameraOutlined />,
							label: 'nav 2',
						},
						{
							key: '3',
							icon: <UploadOutlined />,
							label: 'nav 3',
						},
					]}
				/>
			</Sider>
			<Layout
				style={{
					marginInlineStart: 200,
				}}
			>
				<Header
					style={{
						padding: 0,
						background: colorBgContainer,
					}}
				>
				<Button
					type="text"
					icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
					onClick={() => setCollapsed(!collapsed)}
					style={{
					fontSize: '16px',
					width: 64,
					height: 64,
					}}
				/>
				</Header>
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
					}}
				>
					{children}
					{children}
					{children}
					{children}
					{children}
					{children}
					{children}
					{children}
					{children}
					{children}
					{children}
					{children}
				</Content>
				<Footer
					style={{
						textAlign: 'center',
					}}
				>
					Taleen ©{new Date().getFullYear()} Created by David
				</Footer>
			</Layout>
		</Layout>
	);
};
export default App;