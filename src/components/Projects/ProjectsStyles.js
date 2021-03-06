import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  @-moz-document url-prefix() {
    height: 20%;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  font-size: 2rem;
  font-weight: 600;
  color: #46acbd;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 2px;
  color: #b6cdfc;
  padding: 2rem 0;
  font-size: ${(props) => (props.title ? "3.2rem" : "2rem")};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.3rem;
    font-weight: 600;
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #46acbd;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #46acbd;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-size: 2rem;
  line-height: 26px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
    font-size: 1.8rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: white;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 1.3rem 2rem;
  background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  border-radius: 25px;
  transition: 0.5s;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

export const MoreProjects = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
`;

export const MoreProjectsButton = styled.a`
  color: white;
  font-size: 2rem;
  font-weight: 600;
  padding: 2rem 2.7rem;
  background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  border-radius: 9999px;
  transition: 0.5s;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  @media screen and (max-width: 580px) {
    display: block;
  }
`;
export const Tag = styled.li`
  padding: 4px 5px;
  color: #b6cdfc;
  font-size: 1.5rem;
`;
