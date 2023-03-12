import styled from '@emotion/styled';

const ContactItem = styled.li`
  display: flex;
  align-items: center;

  justify-content: space-around;

  width: 100%;
  padding: 15px 10px 15px 10px;

  color: #ffff;
  border-radius: 15px;
  background-color: #212121;

  font-size: 18px;
`;
const Button = styled.button`
  width: 100px;
  height: 28px;
  font-size: 18px;

  color: #212121;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;

  &:hover {
    background-image: linear-gradient(
      to right,
      #e52d27 0%,
      #b31217 51%,
      #e52d27 100%
    );
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
const ContactName = styled.p`
  display: flex;
  min-width: 190px;
  max-width: 220px;
`;

const Icons = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: grey;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  gap: 10px;
  align-items: center;
`;
export { ContactItem, ContactName, Button, Icons, Wrapper };
