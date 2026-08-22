import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.variant === 'primary' ? '#2d6a4f' : '#fff'};
  color: ${props => props.variant === 'primary' ? '#fff' : '#2d6a4f'};
  border: ${props => props.variant === 'primary' ? 'none' : '2px solid #2d6a4f'};
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 0.9rem;
    width: auto;
  }
`;

export const Button = ({ children, variant = 'primary', onClick, ...props }) => {
  return (
    <StyledButton variant={variant} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};