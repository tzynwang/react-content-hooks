import React, { memo } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Category from '@Components/Common/Category';

function App(): React.ReactElement {
  /* Main */
  return (
    <Router>
      <div>
        <ul
          style={{
            margin: '.5rem auto',
            display: 'flex',
            gap: '1rem',
            listStyleType: 'none',
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category1/productA">category1</Link>
          </li>
          <li>
            <Link to="/category2/productB">category2</Link>
          </li>
          <li>
            <Link to="/category3/productC">category3</Link>
          </li>
          <li>
            <Link to="/category4/productD">category4</Link>
          </li>
        </ul>

        <hr
          style={{
            margin: '.5rem auto',
            border: 'none',
            borderTop: '1px solid #333',
          }}
        />

        <Switch>
          <Route path="/category1/:productID">
            <Category />
          </Route>
          <Route path="/category2/:productID">
            <Category />
          </Route>
          <Route path="/category3/:productID">
            <Category />
          </Route>
          <Route path="/category4/:productID">
            <Category />
          </Route>
          <Route path="*">
            <div>Home</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default memo(App);
