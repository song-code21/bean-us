import React from 'react';
import styled,{ css} from 'styled-components';

const MainSection2 = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const DescContainer = styled.div`
  width: 1024px;
  height: 90vh;
  margin: 0 auto;
  margin-top: 35px;
`;
const ImgContainer = styled.div`
  width: 260px;
  position: absolute;
  top: 30%;
  ${props => 
    props.scrollY > 375 && css`
      transform: translate(30%);
      transition: all 1s linear;
    ` 
    }
`;
const Description = styled.div`
  position: absolute;
  left: 50%;
  flex: none;
  width: 30vw;
  height: 90vh;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => 
    props.scrollY > 375 && css`
      transform: translate(-30%);
      transition: all 1s linear;
    ` 
    }
  > p {
    flex: none;
    width: 470px;
    font-weight: 500;
    padding: 20px;
    line-height: 1.4rem;
    border-radius: 2px;
    background-color: rgba(255,255,255,0.5);  
  }
  > ul {
      width: 470px;
      border-radius: 2px;
      background-color: rgba(255,255,255,0.5); 
      flex: none;
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      > li {
          flex: none;
          display: flex;
          margin-bottom: 20px;
          list-style: none;
          > .coffee-icon {
              max-width: 80px;
              max-height: 80px;
              vertical-align: center;
          }
          > p {
              flex: none;
              padding-left: 10px;
              font-weight: 500;
              > span {
                  font-size: 1.3rem;
                  font-weight: 500;
                  color: #94673f;
              }
          }
      }
  }
`;
const DescTitle = styled.div`
  width: 300px;
  font-size: 2rem;
  font-weight: 500;
  border-bottom: 1px solid #65452a;
  color: #65452a;
  margin-left: 20px;
`;

export default function Section2 (props) {
  const scrollY = props.scrollY;
  //375
  return (
  <MainSection2>
    <DescContainer>
      <ImgContainer scrollY={scrollY}r><img src="asset/mainpage/coffeebeanimg.png" alt='coffee'/></ImgContainer>
      <Description scrollY={scrollY}>
        <DescTitle>About Bean-us</DescTitle>
        <p>
          커피없인 못살아! 현대인의 필수품 커피, <br />
          조금 더 맛있게 취향대로 즐기는 방법이 없을까?<br/>
          Bean-us에서 취향에 맞는 커피를 찾고싶은 분들을 위한<br/>
          서비스를 제공합니다! <br />
          나에게 맞는 원두를 클릭 몇번으로 찾아주는 필터링 기능을 이용해보세요
        </p>
        <ul>
          <li>
          </li>
          <li>
              <img src="asset/mainpage/coffee.png" alt="" className="coffee-icon"/>
              <p>
                  <span>Share your recipe</span><br />
                  원두 꿀 조합을 공유해주세요! <br/>
                  게시글을 작성할 때 원두 꿀 조합 선택이 가능합니다.
              </p>
          </li>
          <li>
              <img src="asset/mainpage/coffee-mug.png" alt="" className="coffee-icon"/>
              <p>
                  <span>Find sepcial coffee beans</span><br />
                  나는 어떤 커피 취향일까? 세세하고 보기쉬운 필터링 <br/> 
                  기능을 통해 커피의 세계를 탐험해보세요!
              </p>
          </li>
          <li>
              <img src="asset/mainpage/coffee-machine.png" alt="" className="coffee-icon"/>
              <p>
                  <span>Comment your opinion</span><br />
                  내 글에는 어떤 반응일지, <br />
                  게시글을 열어 댓글창을 확인해볼까요? 
              </p>
          </li>
        </ul>
      </Description>
    </DescContainer>
  </MainSection2>
  )

}