import styled from "styled-components";
import kebab from "assets/icon/ic_kebab.svg";
import defaultProfile from "assets/icon/profile.svg";
import formatTimeAgo from "utils/formatTimeAgo";
import CommentType from "models/comment";
import COLORS from "styles/palette";

export default function Comment({ data }: { data: CommentType }) {
  const {
    content,
    updatedAt,
    writer: { nickname, image },
  } = data;

  return (
    <CommentContainer>
      <StyledContent>
        <span>{content}</span>
        <img src={kebab} alt="kebab" />
      </StyledContent>

      <ProfileContainer>
        <ProfileImg src={image ?? defaultProfile} alt="profile-img" />
        <span className="username">{nickname}</span>
        <span className="updated-time">{formatTimeAgo(updatedAt)}</span>
      </ProfileContainer>
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  border-bottom: 1px solid ${COLORS.GRAY_200};
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${COLORS.COOL_GRAY_800};
    font-weight: 400;
  }
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const ProfileContainer = styled.div`
  margin: 24px 0;
  width: max-content;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 8px;

  ${ProfileImg} {
    grid-row: 1 / span 2;
  }

  .username {
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.COOL_GRAY_600};
  }

  .updated-time {
    font-weight: 400;
    font-size: 12px;
    color: ${COLORS.LIGHT_GRAY};
  }
`;
