import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  font-size: ${props => {
    if (props.size === 'large') return '2.5rem';
    if (props.size === 'medium') return '1.8rem';
    return '1.2rem';
  }};
  color: ${props => props.color || '#1a3c2a'};
  margin: 0;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: ${props => {
      if (props.size === 'large') return '2rem';
      if (props.size === 'medium') return '1.4rem';
      return '1rem';
    }};
  }
`;

const StyledText = styled.p`
  font-size: ${props => props.size === 'small' ? '0.9rem' : '1rem'};
  color: ${props => props.color || '#4a5c4a'};
  line-height: 1.6;
  margin: 8px 0;
  
  @media (max-width: 768px) {
    font-size: ${props => props.size === 'small' ? '0.8rem' : '0.95rem'};
  }
`;

export const Heading = ({ children, size = 'medium', color, ...props }) => {
  return <StyledHeading size={size} color={color} {...props}>{children}</StyledHeading>;
};

export const Text = ({ children, size = 'medium', color, ...props }) => {
  return <StyledText size={size} color={color} {...props}>{children}</StyledText>;
};