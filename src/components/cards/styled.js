import styled from 'styled-components';

const CardWrapper = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1em;
  margin-top: 1em;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
  margin-bottom: 1em;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
  padding: 2em;
`;

const IllustrationWrapper = styled.div`
  margin-right: 7em;

  & > :nth-child(3) {
    color: #99ccff;
    font-weight: 700;
    font-size: 1.5em;
  }
`;

const CardIllustration = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;

  & > * {
    padding: 0.5em;
  }

  & > :nth-child(2) {
    padding: 0;
    margin: 0;
    font-size: 6em;
    font-weight: 400;
  }

  & > :nth-child(3) {
    order: 0;
    flex: 0 1 auto;
    align-self: flex-start;
    padding: 0;
    margin: 0;
    font-size: 2em;
    font-weight: 400;
  }
`;

const DegreeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;

  /* & > :nth-child(1) {
    margin-right: 5.5em;
  } */
`;

const CardDegree = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
  height: 100%;

  & > :nth-child(1),
  > :nth-child(2) {
    margin-right: 1em;
    opacity: 40%;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;

  & > * :nth-child(1) {
    margin-top: 0.75em;
    margin-bottom: 0.75em;
  }
`;

export {
  CardWrapper,
  CardHeader,
  CardBody,
  IllustrationWrapper,
  CardIllustration,
  DegreeWrapper,
  CardDegree,
  InfoWrapper,
  CardInfo,
};
