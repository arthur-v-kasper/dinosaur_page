import React from "react";
// import Proptypes from "prop-types";
import { FaOtter, FaCheck, FaStudiovinari, FaCashRegister } from "react-icons/fa";


import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Feature from "components/atoms/Feature";
import Grid from "components/atoms/Grid";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";

import HeroImage from "assets/dino-01.jpg";
import HeroVideo from "assets/dinosaur.mp4";



const Home = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>
          Venha conhecer tudo sobre <strong>renderização 3D</strong>
          <br />  
          com dinosauros.
        </h1>
      </Heading>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
      </ul>${props => props.theme.colors.primary.main};
      <Button color="primary" variant="outlined" >Matricule-se Agora</Button>
    </Hero>
    <Section>
      <Grid sm={2} md={4}>
        <Feature icon={< FaOtter />} title="Conheça todas as tecnologias">
          <p>Non duis officia enim nulla cillum nostrud exercitation mollit</p>
        </Feature>
        <Feature icon={< FaCheck />} title="Do zero ao avançado">
          <p>Non duis officia enim nulla cillum nostrud exercitation mollit</p>
        </Feature>
        <Feature icon={< FaStudiovinari />} title="Aprenda a melhores técnicas">
          <p>Non duis officia enim nulla cillum nostrud exercitation mollit</p>
        </Feature>
        <Feature icon={< FaCashRegister />} title="Acessível">
          <p>Non duis officia enim nulla cillum nostrud exercitation mollit</p>
        </Feature>
      </Grid>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
      </Heading>
    </Section>
    <Section>
      <Grid md={2}>
        <div>
          <Heading>
            <h2>3Dino Academy</h2>
          </Heading>        
          <p>
            loVeniam enim anim dolor cupidatat irure dolore et. 
            Duis aliquip consectetur excepteur amet non nostrud ad non sunt. Nostrud do commodo ea dolore est fugiat amet Lorem reprehenderit elit aliqua. Ullamco mollit non incididunt deserunt laboris duis sint laboris.
          </p>
          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={HeroVideo} width="100%" autoPlay loop />
        </div>
      </Grid>      
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas frequentes</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

// Home.defaultProps = {};

// Home.propTypes = {};

export default Home;