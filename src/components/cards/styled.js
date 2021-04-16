import styled from 'styled-components';

const CardWrapper = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1em;
  margin-top: 1em;
  overflow-x: auto;
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
  padding: 1.5em;
`;

const IllustrationWrapper = styled.div`
  margin-right: 7em;

  > :nth-child(3) {
    color: #4072a3;
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
  padding-top: 1em;
  padding-bottom: 1em;

  > {
    * {
      padding: 0.5em;
    }

    :nth-child(2) {
      padding: 0;
      margin: 0;
      font-size: 6em;
      font-weight: 400;
    }

    :nth-child(3) {
      order: 0;
      flex: 0 1 auto;
      align-self: flex-start;
      padding: 0;
      margin: 0;
      font-size: 2em;
      font-weight: 400;
    }
  }
`;

const DegreeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
`;

const CardDegree = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: center;

  > {
    :first-child {
      margin-right: 0.5em;
    }

    :nth-child(3) {
      order: 0;
      flex: 0 1 auto;
      align-self: flex-start;
      margin-top: 0.75em;
      font-size: 0.5em;
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;
  height: 100%;

  > {
    :nth-child(1),
    :nth-child(2) {
      margin-right: 1em;
      opacity: 40%;
    }
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: flex-start;

  > * :nth-child(1) {
    margin-top: 0.75em;
    margin-bottom: 0.75em;
  }
`;

const ForecastWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: stretch;
  align-items: flex-start;
  overflow-x: auto;
`;

const ForecastItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
  align-items: center;
  padding-left: 1em;
  padding-right: 1em;

  :first-child {
    margin-right: 0.75em;
  }

  :last-child {
    margin-left: 0.75em;
  }

  :not(:first-child):not(:last-child) {
    margin-right: 0.75em;
    margin-left: 0.75em;
  }

  > {
    :first-child,
    :nth-child(3) {
      font-weight: 700;
    }

    :not(p:first-child) {
      margin: 0;
      padding: 0;
      margin-top: 0.25em;
      margin-bottom: 0.25em;
    }
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
  ForecastWrapper,
  ForecastItem,
};
