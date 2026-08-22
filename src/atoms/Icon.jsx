import React from 'react';
import styled from 'styled-components';
import * as Icons from '@radix-ui/react-icons';

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size || '24px'};
  height: ${props => props.size || '24px'};
  color: ${props => props.color || 'currentColor'};
`;

export const Icon = ({ name, size = 24, color, ...props }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) return null;
  
  return (
    <IconWrapper size={size} color={color} {...props}>
      <IconComponent width={size} height={size} />
    </IconWrapper>
  );
};