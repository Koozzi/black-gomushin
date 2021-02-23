import React from 'react';
import styled from 'styled-components';

const Tag = styled.div`
  background-color: #54cbff;
  border-radius: 10px;
  width: 150px;
  text-align: center;
  font-size: small;
  height: 20px;
  box-shadow: 3px 3px 3px grey;
  color: white;
  margin: auto;
  margin-left: 10px;
`;

const TagContainer = styled.div`
  display: flex;
`;

const command = {
  size: '사이즈:',
  minprice: '최소:',
  maxprice: '최대:',
};

const changeWord = (str) => {
  return command[str] ? command[str] : '';
};

const Tags = ({ children }) => {
  const tagArray = [];
  for (const [key, value] of Object.entries(children)) {
    tagArray.push([key, value]);
  }
  return (
    <TagContainer>
      {tagArray.map((tag, idx) => {
        return tag[1] !== '' && <Tag key={idx}>{changeWord(tag[0]) + tag[1]}</Tag>;
      })}
    </TagContainer>
  );
};

export default Tags;
