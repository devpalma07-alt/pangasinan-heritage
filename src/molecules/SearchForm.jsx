import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

const SearchContainer = styled.form`
  display: flex;
  gap: 12px;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 0 16px;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #dce8dc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #2d6a4f;
  }
  
  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 0.95rem;
  }
`;

export const SearchForm = ({ onSearch, placeholder = 'Search heritage sites...' }) => {
  const [query, setQuery] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };
  
  return (
    <SearchContainer onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit">
        <Icon name="MagnifyingGlassIcon" size={20} />
        Search
      </Button>
    </SearchContainer>
  );
};