import React from 'react';
import styled from 'styled-components';
import { HeritageCard } from './molecules/HeritageCard';
import { heritageData } from './data/heritageData';

// Style: Red & Black Enhanced Design
const AppContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #050505; /* Deep Black Background */
  color: #ffffff;
  min-height: 100vh;
`;

const Header = styled.header`
  background: linear-gradient(135deg, #000000 0%, #800000 50%, #1a0000 100%);
  border-bottom: 4px solid #ff0000;
  color: white;
  padding: 60px 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2);
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  margin: 0;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0 4px 10px rgba(255, 0, 0, 0.6);
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeaderSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 15px 0 0 0;
  color: #ffcccc;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const Section = styled.section`
  margin-bottom: 80px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #ff0000;
  margin: 0;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: #aaaaaa;
  margin: 10px 0 0 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const HeritageBadge = styled.span`
  display: inline-block;
  background: ${props => props.type === 'iconic' ? '#800000' : '#ff0000'};
  color: white;
  padding: 6px 16px;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 12px;
  box-shadow: 0 4px 10px rgba(255, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

function App() {
  // Note: "Learn More" and icons have been removed. No handleItemClick needed.

  return (
    <AppContainer>
      {/* Header: Removed the Icon and IconWrapper */}
      <Header>
        <HeaderTitle>Pangasinan Heritage</HeaderTitle>
        <HeaderSubtitle>Discover the rich cultural and natural heritage of Alaminos</HeaderSubtitle>
      </Header>

      <Main>
        {/* Iconic Heritage Section */}
        <Section>
          <SectionHeader>
            <SectionTitle>Iconic Heritage Sites</SectionTitle>
            <SectionDescription>
              Explore the historic and cultural landmarks of Alaminos
            </SectionDescription>
          </SectionHeader>
          <Grid>
            {heritageData.iconic.map((item) => (
              <div key={item.id}>
                <HeritageBadge type="iconic">Iconic Heritage</HeritageBadge>
                {/* Removed onLearnMore prop */}
                <HeritageCard
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                />
              </div>
            ))}
          </Grid>
        </Section>

        {/* Tourist Spots Section */}
        <Section>
          <SectionHeader>
            <SectionTitle>Tourist Spots</SectionTitle>
            <SectionDescription>
              Discover the natural wonders and attractions of Alaminos
            </SectionDescription>
          </SectionHeader>
          <Grid>
            {heritageData.tourist.map((item) => (
              <div key={item.id}>
                <HeritageBadge type="tourist">Tourist Spot</HeritageBadge>
                {/* Removed onLearnMore prop */}
                <HeritageCard
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                />
              </div>
            ))}
          </Grid>
        </Section>
      </Main>
      
      {/* Footer completely removed */}
    </AppContainer>
  );
}

export default App;