import styled from '@emotion/styled';

const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

const Label = styled.div`
  display: flex;
  margin-left: 50px;
  gap: 180px;
  align-items: center;

  & span {
    font-size: 20px;
    font-weight: 500;
  }

  & i {
    font-size: 18px;
    transform: translate(0, 2px);
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6px;
`;
export { ContactsList, Label, Wrapper };
