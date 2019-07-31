import React, { useState } from "react";
import styled from "styled-components";
import avatar from "./Bitmap.png";

const IssueCardContainer = styled.div`
  min-height: 66px;
  width: 300px;
  border: 1px solid #999;
  background-color: #e8e8e8;
  font-family: Roboto;
  padding: 8px;
  border-left: 4px solid #103FB2;
  position: relative;
`;

const IssueCardMainBody = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 1fr 1fr 1fr;
  grid-template-rows: 14px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const IssueHeader = styled.div`
  grid-area: 1 / 2 / 2 / 6;
  display: flex;
  font-size: 12px;
  line-height: 14px;
`;
const RepoName = styled.div``;
const IssueNumber = styled.div`
  font-weight: bold;
  padding-left: 8px;
`;
const UserAvatar = styled.div`
  grid-area: 1 / 1 / 3 / 2;
`;
const IssueBody = styled.div`
  grid-area: 2 / 2 / 3 / 6;
  font-weight: bold;
  line-height: 16px;
`;
const IssueTitle = styled.div`
  padding-top: 4px;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IssueEvent = styled.div`
  padding-top: 4px;
  font-size: 12px;
  color: #606060;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IssueAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
`;

const IssueFooter = styled.div`
  grid-area: 4 / 1 / 5 / 6;
  display: flex;
  border-top: 1px solid #979797;
  margin: 0 -8px -8px -8px;
  height: 24px;
`;

const StoryPointsContainer = styled.div`
  width: 38px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StoryPoints = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: #103fb2;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: bold;
`;

const LabelContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Label = styled.span`
  color: white;
  background-color: ${props => props.color};
  padding: 0 8px;
  margin-right: 4px;
  font-size: 11px;
  line-height: 13px;
  border: 1px solid ${props => props.color};
  border-radius: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

const Img = styled.img`
  height: 32px;
  width: 32px;
`;

const ActionButton = styled.button`
  height: 32px;
  width: 255px;
  background-color: #ffffff;
  border: 1px solid #103fb2;
  color: #103fb2;
  font-size: 14px;
  line-height: 16px;
`;

const IssuePriority = styled.div`
  display: flex;
  align-items: center;
`;

const PinIcon = styled.span`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PriorityText = styled.span`
  color: #C04848;
  font-size: 14px;
  line-height: 16px;
  font-weight:  bold;
`;

const MenuButton = styled.button`
  position:absolute;
  right: 4px;
  top: 4px;
  width: 24px;
  height: 24px;
  border: 1px solid #979797;
  background: #D8D8D8;
`;

const Menu = styled.div`
  position: absolute;
  right: 28px;
  top: 4px;
  background: #FFFFFF;
  border: 1px solid #979797;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  width: 128px;
  font-size: 12px;
  line-height: 14px;
  padding:  8px;
  padding-left: 25px;
`;

const MenuItem = styled.div`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

function IssueCard(props) {
  const [isShowingMenu, setIsShowingMenu] = useState(false);

  return (
    <IssueCardContainer>
    <MenuButton onClick={() => setIsShowingMenu(!isShowingMenu)}>䷮</MenuButton>
    { isShowingMenu && 
    <Menu>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Duplicate</MenuItem>
    <MenuItem>Custom Action</MenuItem>
    </Menu>
    }
    <IssuePriority><PinIcon>📌</PinIcon><PriorityText>High Priority</PriorityText></IssuePriority>
      <IssueCardMainBody>
        <UserAvatar>
          <Img src={avatar} />
        </UserAvatar>
        <IssueHeader>
          <RepoName>Some repo name</RepoName>
          <IssueNumber>#756</IssueNumber>
        </IssueHeader>
        <IssueBody>
          <IssueTitle>
            Issue Title will go here. If it's very long it should wrap to the
            next line.asdasmaxd asd asdas das dasd asd asd asd asdasmax
          </IssueTitle>
          <IssueEvent>
            <span>📆</span> Milestone with a very very long name, this is going
            to keep going to make it longer.
          </IssueEvent>
          <IssueEvent>
            <span>📆</span> Milestone with a very very long name, this is going
            to keep going to make it longer.
          </IssueEvent>
        </IssueBody>
      </IssueCardMainBody>
      <IssueAction>
        <ActionButton>Perform Some Action</ActionButton>
      </IssueAction>
      <IssueFooter>
        <StoryPointsContainer>
          <StoryPoints>4</StoryPoints>
        </StoryPointsContainer>
        <LabelContainer>
          <Label color="red">label</Label>
          <Label color="blue">label 2</Label>
          <Label color="green">long label 3</Label>
        </LabelContainer>
      </IssueFooter>
    </IssueCardContainer>
  );
}

export default IssueCard;
