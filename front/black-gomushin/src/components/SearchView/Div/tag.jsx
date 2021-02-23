import React from 'react';
import styled from 'styled-components';
import getRandom from '../../../utils/random';

const Tag = styled.div`
  background-color: #54cbff;
  border-radius: 10px;
  width: 150px;
  text-align: center;
  font-size: small;
  font-weight: bold;
  height: 20px;
  box-shadow: 3px 3px 3px grey;
  color: white;
  margin: auto;
  margin-left: 10px;
  background: ${(props) => props.background || 'black'};
`;

const TagContainer = styled.div`
  display: flex;
`;

const command = {
  size: '사이즈:',
  minprice: '최소:',
  maxprice: '최대:',
};

const backgrounds = [
  '#395f70',
  '#ad4593',
  '#e86190',
  '#2c8956',
  '#ddb649',
  '#73c13c',
  '#8f4ee5',
  '#5449ed',
];

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
        return (
          tag[1] !== '' &&
          tag[1] !== undefined && (
            <Tag background={getRandom(backgrounds)} key={idx}>
              {changeWord(tag[0]) + tag[1]}
            </Tag>
          )
        );
      })}
    </TagContainer>
  );
};

export default Tags;
