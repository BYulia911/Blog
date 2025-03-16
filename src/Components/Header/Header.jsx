import { Routes, Route, Link } from 'react-router-dom';
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <input type="checkbox" className={classes.sideMenu} id="side-menu"/>
            <label className={classes.hamb} htmlFor="side-menu">
                <span className={classes.hambLine}></span>
            </label>

            <nav className={classes.nav}>
                <ul className={classes.navList}>
                    <li className={classes.li}><Link className={classes.link} to="/">Home</Link></li>
                    <li className={classes.li}><Link className={classes.link} to="#">Categories</Link></li>
                    <li className={classes.li}><Link className={classes.link} to="/about">About me</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;