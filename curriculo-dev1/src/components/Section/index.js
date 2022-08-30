import React from "react";
import Card from "../Card";
import '../Section/section.css';
import Title from '../Title/index.js';


const Section = () => (

    <>
        <section id="about">
            <Title texto="Olá Pessoal" />
            <div className="info">
            
            Inhumas - GO - (62) 9 9836-1512
            <span>wittallomarcos@gmail.com</span>
            </div>
            <p>
                Olá, meu nome é Wittallo Marcos, tenho 25 anos e sou um estudante de Análise e Dev de Sistemas.
                Sempreme interessei pela área de tecnologia, mesmo não dispondode recursos suficientes para
                estar sempre atualizado, porém estou sempre atento as novas tecnologias e muito bem disposto 
                a aprendar a usá-las, não tenho uma vasta expeiência más me considero apto para aprender qualquer
                linguagem ou framework.
            </p>
            <div className="contatos" id="cont">
            
            <Title texto="ACQA - TESTE"/>

            </div>
        </section>

        <section id="experiencia">
        <Title texto="Experiência" />
        <Card 
        Subtitle ="Aux.Logística"
        Subtitle2="A.A Fernandes"
        Data="Jan 2022 - Atual" 
        info="Aux.Escritório2"    
        />

        </section>

        <section id="skilss">
        <Title texto="Habilidades"/>
        <Card />

        </section>

        <section>
        <Title texto="Projetos"/>
        </section>
    </>
);


export default Section;