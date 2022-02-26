import React from "react";
import { Layout, Row, Col, Divider } from "antd";
import { RecoilRoot } from "recoil";

const Header = React.lazy(() => import("nav/Header"));

import "./index.less";

import ProductCarousel from "./ProductCarousel";
import TheBill from "./TheBill";

function App() {
  return (
    <RecoilRoot>
      <Layout style={{ minHeight: 800, maxWidth: 1400, margin: "auto" }}>
        <React.Suspense fallback={<div />}>
          <Header />
        </React.Suspense>
        <Layout.Content style={{ padding: "2em" }}>
          <Row gutter={6}>
            <Col span={18}>
              <Divider orientation="left">Products You Might Like</Divider>
              <ProductCarousel />
            </Col>
            <Col span={6}>
              <h1>The Bill</h1>
              <TheBill />
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
