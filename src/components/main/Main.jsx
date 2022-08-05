import styled from "styled-components";

function Main() {
  const Container = styled.aside`
    flex: 0 1 70%;
    height: 100%;
    padding: 2rem;
    background: #f5f4f4;
  `;
  
  const NoteContainer = styled.textarea`
  width  : 100%;
  height : 100%;
  background : transparent;
  border : none;
  resize: none;
  &:focus{
    border : none;
    outline : none;
  }
  `;
  return (
    <Container>
      <NoteContainer />
    </Container>
  );
}

export default Main;
