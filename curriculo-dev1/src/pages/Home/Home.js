import React, {useState} from 'react';
import Header from '../../components/Header/Index';
import Section from '../../components/Section/Index';
import FakeAPI from '../../Service/dados.json';

const Home = () => {
   
   const [dados] = useState(FakeAPI);
    return ( 
   
       <div>  
    
            <Header img={dados.profile.img} />
    
            <main>
    
            <Section profile={dados.profile} />
    
            </main>
    
        
      </div>    
    
  );
};


export default Home;