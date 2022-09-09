import React, {useState}from 'react';
import Header from '../../components/Header';
import Section from '../../components/Section';
import FakeAPI from '../../Service/dados.json';

const Home = () => {
   
   const [dados] = useState(FakeAPI);
    return ( 
   
   <>
        
        <body>
    
            <Header img={dados.profile.img} />
    
            <main>
    
            <Section profile={dados.profile} />
    
            </main>
    
        </body>
        
    </>
  );
};


export default Home;