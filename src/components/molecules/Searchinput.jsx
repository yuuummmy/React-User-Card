import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/input";

export const SearchInput = () => {
  return (
    <div>
      <SContailner>
        <Input placeholder="Search" />
        <SButtonwrapper>
          <PrimaryButton>Search</PrimaryButton>
        </SButtonwrapper>
      </SContailner>
    </div>
  );
};

const SContailner = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonwrapper = styled.div`
  padding-left: 8px;
`;
