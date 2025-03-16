import classes from './Footer.module.css'
import vkLogo from "../../Images/vk.png"
import telegramLogo from "../../Images/telegram.png"
import whatsupLogo from "../../Images/whatsup.png"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContainer}>
                <ul className={classes.navigation}>
                    <li className={classes.li}><Link className={classes.link} to="/">Home</Link></li>
                    <li className={classes.li}><a className={classes.link} href='#'>Categories</a></li>
                    <li className={classes.li}><Link className={classes.link} to="/about">About me</Link></li>
                </ul>
                <div className={classes.contacts}>
                    <h4 className={classes.h4}>Contact me</h4>
                    <div className={classes.logos}>
                        <img className={classes.logoVk} src={vkLogo}></img>
                        <img className={classes.logoTg} src={telegramLogo}></img>
                        <img className={classes.logoWhatsup} src={whatsupLogo}></img>
                    </div>
                </div>
            </div>
            <p className={classes.p}>Copyright © 2024 BYulia911. All rights reserved.</p>
        </footer>
    )
}

export default Footer