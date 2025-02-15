import classes from './Footer.module.css'
import vkLogo from "/src/Images/vk.png"
import telegramLogo from "/src/Images/telegram.png"
import whatsupLogo from "/src/Images/whatsup.png"

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContainer}>
                <div className={classes.navigation}>
                    <a className={classes.a} href='#'>Главная</a>
                    <a className={classes.a} href='#'>Категории</a>
                    <a className={classes.a} href='#'>Обо мне</a>
                </div>
                <div className={classes.contacts}>
                    <h4 className={classes.h4}>Связаться со мной</h4>
                    <div className={classes.logos}>
                        <img className={classes.logoImg} src={vkLogo}></img>
                        <img className={classes.logoTg} src={telegramLogo}></img>
                        <img className={classes.logoWhatsup} src={whatsupLogo}></img>
                    </div>
                </div>
            </div>
            <p className={classes.p}>© Copyright by BYulia911. Use for learning or your portfolio. Don't use to teach. Don't claim as your own product.</p>
        </footer>
        
    )
}

export default Footer