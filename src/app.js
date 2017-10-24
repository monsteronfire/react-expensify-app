import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

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
      <li><Link to='/create'>Create</Link></li>
      <li><Link to='/edit'>Edit</Link></li>
      <li><Link to='/help'>Help</Link></li>
    </ul>
  </header>
);

const routes = (
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

ReactDOM.render(routes, document.getElementById('app'));
