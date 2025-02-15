import classes from './Header.module.css'

function Header() {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <ul className={classes.navList}>
                    <li className={classes.li}><a className={classes.a} href='#'>Главная</a></li>
                    <li className={classes.li}><a className={classes.a} href='#'>Категории</a></li>
                    <li className={classes.li}><a className={classes.a} href='#'>Обо мне</a></li>
                </ul>
            </nav>
        </header>
        
    )
}

export default Header