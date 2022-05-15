import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import HomeScreen from './screen/HomeScreen';


function App() {
  const { Header, Content, Footer } = Layout;

  return (
    <BrowserRouter>
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo">
              <img src="../datasintesa_logo.png" alt="logo" width="115px" />
            </div>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List User</Breadcrumb.Item>
            </Breadcrumb>
            <main>
              <Routes>
                <Route path="/" element={<HomeScreen/>} exact />
              </Routes>
            </main>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by Ant UED</Footer>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
