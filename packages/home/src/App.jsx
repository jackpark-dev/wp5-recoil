import React from "react";
import { Layout, Row, Col, Divider } from "antd";
import { RecoilRoot } from "recoil";

const Header = React.lazy(() => import("nav/Header"));

import "./index.less";

import ProductCarousel from "./ProductCarousel";

function App() {
  return (
    <RecoilRoot>
      <Layout style={{ minHeight: 800, maxWidth: 1400, margin: "auto" }}>
        <React.Suspense fallback={<div />}>
          <Header />
        </React.Suspense>
        <Layout.Content style={{ padding: "2em" }}>
          <Divider orientation="left">Products You Might Like</Divider>
          <ProductCarousel />
        </Layout.Content>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
