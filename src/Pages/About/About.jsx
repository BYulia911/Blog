import React from 'react';
import classes from './About.module.css';
import avatar from '../../Images/avatar.png';
import Footer from '/src/Components/Footer/Footer';
import Header from '/src/Components/Header/Header.jsx';

function About() {
    return (
        <>
            <Header/>
            <div className={classes.avatarContainer}>
                <img className={classes.avatar} src={avatar}/>
                <h4 className={classes.h4}>Привет! Меня зовут Юлия, и я рада приветствовать вас в своем блоге!</h4>
            </div>
            <p className={classes.p}>
                В целом, конечно, разбавленное изрядной долей эмпатии, рациональное мышление прекрасно 
                подходит для реализации новых предложений. Лишь некоторые особенности внутренней политики 
                представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны 
                быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего 
                возрастает их статус бесполезности. Мы вынуждены отталкиваться от того, что укрепление и 
                развитие внутренней структуры не оставляет шанса для новых предложений. Однозначно, стремящиеся 
                вытеснить традиционное производство, нанотехнологии объективно рассмотрены соответствующими 
                инстанциями. В рамках спецификации современных стандартов, независимые государства своевременно 
                верифицированы. Кстати, сделанные на базе интернет-аналитики выводы будут объявлены нарушающими 
                общечеловеческие нормы этики и морали. Однозначно, акционеры крупнейших компаний освещают 
                чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, 
                смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает 
                их статус бесполезности. Как уже неоднократно упомянуто, реплицированные с зарубежных источников, 
                современные исследования, которые представляют собой яркий пример континентально-европейского 
                типа политической культуры, будут призваны к ответу. Внезапно, стремящиеся вытеснить традиционное 
                производство, нанотехнологии лишь добавляют фракционных разногласий и объединены в целые кластеры 
                себе подобных. Современные технологии достигли такого уровня, что постоянное информационно-пропагандистское 
                обеспечение нашей деятельности играет определяющее значение для поставленных обществом задач.
            </p>
            <Footer/>
        </>
    );
}

export default About;
