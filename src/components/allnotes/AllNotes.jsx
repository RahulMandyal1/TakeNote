import React from "react";
import styled from "styled-components";
import { flexRowCenter } from "../../stylesheets/generalStyle";
import { BsThreeDots, BsStar } from "react-icons/bs";

const dummyNotes = [
  {
    id: 123,
    title: "first note ",
    category: "Notes",
    body: "this is the first note",
  },
  {
    id: 1234,
    title: "Create a new article how to work in the react js and how does .",
    category: "Notes",
    body: "this is the first note",
  },
  {
    id: 1235,
    title: "Third note ",
    category: "Notes",
    body: "this is the first note",
  },
  {
    id: 1223,
    title: "Fourth note ",
    category: "Notes",
    body: "this is the first note",
  },
  {
    id: 12342,
    title: "Fifth note ",
    category: "Notes",
    body: "this is the first note",
  },
];

function AllNotes() {
  const Container = styled.div`
    flex: 0 1 15%;
    height: 100%;
    padding: 2rem 0;
    background: #e5e5e5;
  `;

  const SearchContainer = styled.div`
    background: transparent;
    margin-bottom: 0.5rem;
    padding: 0 1rem;
  `;

  const SeachBar = styled.input`
    width: 100%;
    padding: 1rem;
    border-radius: 0.6rem;
    border: 0.1rem #dddddd;
    &:focus {
      outline: 0.2rem solid lightblue;
    }
  `;

  const NotesContainer = styled.div``;

  const NoteAdditionalInfo = styled.div`
    flex: 1;
  `;

  const MoreAboutNote = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
  `;

  const NoteInfo = styled.div`
    flex: 4;
  `;

  const NoteTitle = styled.h4`
    font-size: 1.4rem;
  `;

  const NoteModal = styled.div`
    position: absolute;
    left : 80%;
    top: 100%;
    display: none;
    background : #fff;
    box-shadow : 5px 2px 10px rgba(0,0,0,0.1);
    width : 200px;
    height : 300px;
  `;

  const ThreedotContainer = styled.div`
    display: none;
    position: relative;
    &:hover ${NoteModal} {
      display: inline-block;
    }
  `;

  const NoteBox = styled.div`
    padding: 2rem 1rem;
    border-bottom: 0.1rem solid #dddddd;
    ${flexRowCenter};
    &:hover {
      .showdots {
        display: inline-block;
      }
      background: #c8c8c8;
    }
  `;

  return (
    <Container>
      <SearchContainer>
        <SeachBar placeholder="Search for Notes" />
      </SearchContainer>
      <NotesContainer>
        {dummyNotes.map((note) => {
          return (
            <NoteBox key={note.id}>
              <NoteAdditionalInfo>
                <BsStar color="blue" size={12} />
              </NoteAdditionalInfo>
              <NoteInfo>
                <NoteTitle>{note.title}</NoteTitle>
              </NoteInfo>
              <MoreAboutNote>
                <ThreedotContainer className="showdots">
                  <BsThreeDots color="#fff" size={15} />
                  <NoteModal>here this is the modal</NoteModal>
                </ThreedotContainer>
              </MoreAboutNote>
            </NoteBox>
          );
        })}
      </NotesContainer>
    </Container>
  );
}

export default AllNotes;
