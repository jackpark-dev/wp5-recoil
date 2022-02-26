import React from "react";
import { Layout, Row, Col, Divider } from "antd";
import { RecoilRoot } from "recoil";
import Header from "nav/Header";

import "./index.less";

import ProductCarousel from "./ProductCarousel";

const SideCard = ({ name, image, children }) => (
  <Row
    style={{
      background: "white",
      border: "1px solid #ddd",
    }}
  >
    <Col span={12}>
      <img
        alt={name}
        src={image}
        style={{ maxHeight: 300, overflow: "hidden", objectFit: "contain" }}
      />
    </Col>
    <Col span={12} style={{ padding: "1em" }}>
      {children}
    </Col>
  </Row>
);

function App() {
  return (
    <RecoilRoot>
      <Layout style={{ minHeight: 800, maxWidth: 1400, margin: "auto" }}>
        <Header />
        <Layout.Content style={{ padding: "2em" }}>
          <Divider orientation="left">Products You Might Like</Divider>
          <ProductCarousel />
        </Layout.Content>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
