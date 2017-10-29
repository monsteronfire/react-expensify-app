import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div>dashboard</div>
);

const AddExpensePage = () => (
  <div>create</div>
);

const EditExpensePage = () => (
  <div>edit</div>
);

const HelpPage = () => (
  <div>help</div>
);

const NotFoundPage = () => (
  <div>
    404 - <Link to='/'>Go Back Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ul>
      <li><NavLink activeClassName='is-active'to='/' exact={true}>Dashboard</NavLink></li>
      <li><NavLink activeClassName='is-active'to='/create'>Create</NavLink></li>
      <li><NavLink activeClassName='is-active'to='/edit'>Edit</NavLink></li>
      <li><NavLink activeClassName='is-active'to='/help'>Help</NavLink></li>
    </ul>
  </header>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path='/' exact component={ExpenseDashboardPage} exact={true} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/edit' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
