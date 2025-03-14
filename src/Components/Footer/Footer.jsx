import classes from './Footer.module.css'
import vkLogo from "/src/Images/vk.png"
import telegramLogo from "/src/Images/telegram.png"
import whatsupLogo from "/src/Images/whatsup.png"

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContainer}>
                <div className={classes.navigation}>
                    <a className={classes.a} href='#'>Home</a>
                    <a className={classes.a} href='#'>Categories</a>
                    <a className={classes.a} href='#'>About me</a>
                </div>
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