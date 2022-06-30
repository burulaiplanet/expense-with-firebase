import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Creat Expenses</div>
      <nav className={classes.nav}>
        <ul>
          <li>
          <NavLink to="/expenses" activeClassName={classes.active}>
             All Expenses
            </NavLink>
          </li>
          <li>
           
            <NavLink to="/new-expenses" activeClassName={classes.active}>
             New Expenses
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
