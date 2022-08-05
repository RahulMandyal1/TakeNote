import styled from "styled-components";
import NavigationSidebar from "./aside/NavigationSidebar";
import Main from "./main/Main";
import AllNotes from "./allnotes/AllNotes";


function App() {
  const Container = styled.section`
    display : flex;
    height : 100vh;
  `;

  return (
    <Container>
      <NavigationSidebar />
      <AllNotes />
      <Main />
    </Container>
  );
}

export default App;
