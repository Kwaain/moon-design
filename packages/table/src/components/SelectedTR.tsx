import React from 'react';
import {themed} from "@heathmont/moon-utils";
import styled from "styled-components";

const SelectedTR: React.FC = styled.div<{}>(
  ({ theme }) => ({
    //backgroundColor: themed('color', backgroundColor)(theme),
    boxShadow: 'inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)',
    margin: '2px',
    position: 'absolute',
    width: 'calc(100% - 4px)',
    zIndex: 5
  }),
);

export default SelectedTR;
