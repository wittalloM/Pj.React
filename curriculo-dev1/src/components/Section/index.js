import React from "react";
import Card from '../Card/Index';
import { Highlight, Info } from '../Card/styles';
import { Itens } from "../Header/styles";
import SubTitle from '../SubTitle/Index';
import Title from '../Title/Index';
import { SectionHeading } from '../Title/styles';
import { Sections } from './styles';
import { AiOutlineGithub } from "react-icons";

const Section = ({ profile }) => (
  <>
    <Sections id="about">
      <Title texto="Olá pessoal, sou o" />
      <SectionHeading>
        {profile.nome} <Highlight>{profile.sobrenome}</Highlight>
      </SectionHeading>
      <Info>
        {profile.cidade} - {profile.estado} - {profile.contato} -{' '}
        <Highlight> {profile.email}</Highlight>
      </Info>
      <p>{profile.biografia}</p>
      <div id="contacts">
        <Title texto="Contatos" />
        <SubTitle texto="GitHub Profile" />
        <button>
          <AiOutlineGithub size={22} color='black' />
        </button>
        </div>
    </Sections>
    <Sections id="experience">
      <Title texto="Experiência" />
      {profile.experiencia.map((val) => (
        <Card
          key={val.id}
          SubTitle={val.cargo}
          SubTitle2={val.empresa}
          date={val.periodo}
          info={val.atividades}
        />
      ))}
    </Sections>
    <Sections id="skills">
      <Title texto="Habilidades" />
     <info>{profile.habilidades}</info>
    </Sections>
    <Sections id="projects">
      <Title texto="Projetos" />
      <info>{profile.projetos}</info>
      <Itens to="https://github.com/wittalloM"></Itens>
    </Sections>
  </>
);



export default Section;