import styled from "styled-components";
import { V } from "../styles/variables";

const HeaderComponent = styled.h2`
  font-size: ${V.font_size_xl};
  text-align: center;
`;

const Header = () => {
  return <HeaderComponent>Facebook/react</HeaderComponent>;
};
export default Header;
