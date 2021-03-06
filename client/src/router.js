import React, { Suspense, lazy, memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';

const Layouts = lazy(() => import('@/components/layouts'));
const ProductList = lazy(() => import('@/pages/productlist'));
const ProductDetail = lazy(() => import('@/pages/productdetail'));
const Profile = lazy(() => import('@/pages/profile'));

const RouterComponent = () => {
  return (
    <Router>
      <Suspense fallback={<Spin size="large" />}>
        <Layouts>
          <Switch>
            <Route path="/" exact={true} component={ProductList} />
            <Route path="/detail/:id" component={ProductDetail} />
            <Route path="/profile" component={Profile} />
            <Route render={() =><h1>404 Not Found</h1>} />
          </Switch>
        </Layouts>
      </Suspense>
    </Router>
  )
};


export default memo(RouterComponent);
