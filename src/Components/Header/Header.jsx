import { Routes, Route, Link } from 'react-router-dom';
import classes from './Header.module.css'

function Header() {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <ul className={classes.navList}>
                    <li className={classes.li}><Link className={classes.link} to="/">Home</Link></li>
                    <li className={classes.li}><a className={classes.a} href='#'>Categories</a></li>
                    <li className={classes.li}><Link className={classes.link} to="/about">About me</Link></li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Header;