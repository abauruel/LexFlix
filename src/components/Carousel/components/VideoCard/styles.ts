import styled from "styled-components";
interface IVideoCardContainer {
  url: string;
}
export const VideoCardContainer = styled.a<IVideoCardContainer>`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;

  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;

  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
export const VideoCardContainerVideo = styled.div`
  width: 298px;
  height: 197px;
  position: relative;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }

  iframe {
    align-items: center;

    width: 298px;
    height: 197px;
    transition: 1s transform;

    &:hover {
      transform: translate3d(0, -10px, 0) scale(1.1);
      --webkit-transform: scale(1.5);
      cursor: pointer;
    }
  }
`;
