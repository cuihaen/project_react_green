import React from 'react';
import '../css/AboutContent.css';
import visual02 from '../img/visual02.jpg';

function About() {
    return (
      <>
      <div className="sub_visual">
        <img src={visual02} alt="visualImg" />
        <span>ABOUT</span>
      </div>
      <div className="contentInner">
          <div className="col-md-12 order-md-2">
            <h2 className="featurette-heading fw-bold lh-1">ABOUT</h2>
            <p className="lead">실내정원은 장소에 따라 주거공간, 공공공간으로 구분할 수 있으며, 가정에서 주로 이용하는 실내정원을 식물의 생태에 따라 수생식물을 활용한 연못형, 실내정원의 일부공간을 수공간으로 활용한 습지형, 일반적인 실내식물의 재배조건을 이용한 적습형, 그리고 물관리를 최소화할 수 있는 사막형으로 분류할 수 있다. 또한 이동여부에 따라 바퀴를 달아 이동이 가능하도록 한 이동식 실내정원과 고정식 실내정원으로 분류할 수 있다.</p>
          </div>
      </div>
          <div className="contentInner2 benefit">
            <div className="innerBox">
                <p>산뜻하고 쾌적한 공간을 만들어줄 뿐 아니라 식물을 가꾸는 즐거움과 보람도 함께 느낄 수 있는 실내 정원 조성의 장점은 크게 3가지로 나눌 수 있다.</p>
                <ul>
                    <li>
                      <div className="imgBox box1"><img src="./img/img2.jpg" alt="" /></div>
                      <dl className="txtBox">
                          <dt>01 공기정화효과</dt>
                          <dd>식물이 성장하는데 있어서 사람들이 일상생활 속에서 배출하는 이산화탄소 등을 흡수하고, 산소를 배출해주기 때문에 별도의 공기청정기를 두지 않더라도 보다 자연친화적으로 실내공기를 맑게 정화시켜주는 효과를 얻을 수 있다.</dd>
                      </dl>
                    </li>
                    <li>
                        <div className="imgBox box2"><img src="./img/img3.jpg" alt="" /></div>
                        <dl className="txtBox">
                            <dt>02 실내 온, 습도 조절 효과</dt>
                            <dd>겨울철에는 건조한 실내로 인해 호흡기 질환이나 여러가지 질병들이 생기는 경우가 많은데 실내정원을 조성해 식물을 기르는 경우 식물들의 증산활동으로 인해 실내 습도를 적절히 높여주는 효과를 얻을 수 있다.</dd>
                        </dl>
                    </li>
                    <li>
                        <div className="imgBox box3"><img src="./img/img4.jpg" alt="" /></div>
                        <dl className="txtBox">
                            <dt>03 정서안정 효과</dt>
                            <dd>또한 고층 아파트와 빌딩 속에서 살아가는 사람들에게 식물을 가까이에 둠으로써 굳이 시간을 내 자연속으로 힐링을 하러 떠나지 않더라도 보다 편하게 마음의 불편함이 해소되고 안정되는 효과를 얻을 수 있다.</dd>
                        </dl>
                    </li>
                </ul>
              </div>
              </div>
              <div className="contentInner moreInfo">
                    <p>위의 세가지 효과 외에도 경직된 분위기의 공간을 식물의 푸른 색이나 부드러운 곡선을 통해 완화시켜줄 수 있을 뿐 아니라, 보다 특색있고 아름다운 공간으로 바꿔주는 역할을 할 수 있다. 일반적으로는 실내 정원의 공간 또는 화단의 수분 함유량에 따라서 생태형을 '연못형', '습지형', '적습형', '사막형' 4가지로 구분하게 되며, 각 형태에 따라 기를 수 있는 식물의 종류가 달라지기도 한다.</p>
                    <table>
                        <thead>
                            <tr>
                                <th>형태</th>
                                <th>추천식물</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>연못형</td>
                                <td>개운죽, 싱고니움, 테이블야자, 물칸나, 드라세나류, 무늬석창포, 시파티필럼, 종려방동사니 등</td>                            
                            </tr>
                            <tr>
                                <td>습지형</td>
                                <td>돌미나리, 무늬석창포, 애기석창포, 아글레오네마, 싱고니움 등</td>
                            </tr>
                            <tr>
                                <td>적습형</td>
                                <td>기린초, 셈퍼비붐, 디펜바키아, 마리안느, 아스플레니움, 네프롤레피스더비, 셀라지넬라, 왜란, 봉의꼬리, 산호수, 백량금 등</td>
                            </tr>
                            <tr>
                                <td>사막형</td>
                                <td>바위치, 산세베리아, 홍옥, 압테니아, 세덤류, 구문초, 틸란드시아, 세잎돌나물 등</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>실내 정원을 가꿀때는 매일 물을 주기보다는 배수구를 손으로 만져보았을때 말랐을 때 배수구로 물이 흘러나올 수 있도록 충분한 양의 물을 주는 것을 추천한다. 또한 고온 건조한 날씨가 찾아오면 응애, 깍지벌레, 진듯물 등 여러가지 병충해가 발생하기 쉬우므로 각별한 주의가 필요하다.</p>
            </div>
      </>
    );
  }

  export default About;