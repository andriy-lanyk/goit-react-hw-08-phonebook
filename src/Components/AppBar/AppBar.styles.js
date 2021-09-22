import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #2a363b;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-right: 12px;
`;

const Btn = styled.button`
  width: 100px;
  padding: 5px;
  font-weight: 600;
  background-color: #5d5dff;
  border-radius: 5px;
`;

export { Header, Container, Span, Btn };
