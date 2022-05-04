import styled from "styled-components";
import { SearchInput } from "../molecules/Searchinput";

export const Users = () => {
  return (
    <SContaioner>
      <h2>USER List </h2>
      <SearchInput />
    </SContaioner>
  );
};

const SContaioner = styled.div`
  display: flex;
  flex-direction: column;
  algin-item: center;
  padding: 24px;
`;
