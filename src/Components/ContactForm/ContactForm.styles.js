import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  border: 3px solid #212121;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 800;
`;

const Btn = styled.button`
  width: 100px;
  padding: 5px;
  font-weight: 600;
  background-color: #5d5dff;
  border-radius: 5px;
`;

export { Form, Label, Btn };
