import React from 'react';
import loadable from '@loadable/component';
// import { Switch, Route, Redirect } from 'react-router-dom';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
// const Workspace = loadable(() => import('@layouts/Workspace'));

const App = () => {
  return <div>좀만 참아주세요ㅠㅠ</div>;
};

export default App;
