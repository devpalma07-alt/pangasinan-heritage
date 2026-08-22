import React from 'react';
import styled from 'styled-components';
import { HeritageCard } from '../molecules/HeritageCard';
import { Heading, Text } from '../atoms/Typography';

const GridContainer = styled.section`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const GridHeader = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const HeritageGrid = ({ 
  title = "Explore Pangasinan Heritage", 
  subtitle = "Discover the rich cultural and natural heritage of Alaminos",
  items = [],
  onItemClick 
}) => {
  return (
    <GridContainer>
      <GridHeader>
        <Heading size="large">{title}</Heading>
        <Text>{subtitle}</Text>
      </GridHeader>
      <Grid>
        {items.map((item, index) => (
          <HeritageCard
            key={index}
            title={item.title}
            description={item.description}
            category={item.category}
            image={item.image}
            onLearnMore={() => onItemClick && onItemClick(item)}
          />
        ))}
      </Grid>
    </GridContainer>
  );
};