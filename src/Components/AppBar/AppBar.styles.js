import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #2a363b;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  font-weight: 700;
  margin-right: 12px;
`;

export { Header, Container, Span };
