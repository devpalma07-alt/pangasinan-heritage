// src/molecules/HeritageCard.jsx
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    border-color: #ff0000;
    box-shadow: 0 15px 30px rgba(255, 0, 0, 0.2);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
  flex-grow: 1;
`;

const Title = styled.h3`
  color: #ffffff;
  font-size: 1.4rem;
  margin: 0 0 10px 0;
  font-weight: 700;
`;

const Category = styled.p`
  color: #ff0000;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 0 15px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Description = styled.p`
  color: #cccccc;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

export const HeritageCard = ({ title, description, category, image }) => {
  return (
    <Card>
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>
      <CardContent>
        <Title>{title}</Title>
        <Category>{category}</Category>
        <Description>{description}</Description>
      </CardContent>
      {/* No Button here anymore */}
    </Card>
  );
};

export default HeritageCard;