import React from 'react';
import '../css/ManagementContent.css';

import visual01 from '../img/visual01.jpg';

function Management() {
    

    return (
        <>
            <div className="sub_visual">
                <img src={visual01} alt="visualImg" />
                <span>MANAGEMENT</span>
            </div>
            <div className="contentInner">
                <div className="col-md-12 order-md-2">
                    <h2 className="featurette-heading fw-bold lh-1">MANAGEMENT</h2>
                    <p className="lead">실내정원의 올바른 관리법을 소개합니다.</p>
                </div>
            </div>
            <div className="contentInner2" id="watering"> 
                <div className="innerBox">
                    <div className="row featurette" >
                        <div className="col-md-7">
                            <span className="title">01. 물주기</span>
                            <p className="text">물주는 시기는 손가락으로 흙 표면을 약 1cm 깊이를 만져서 물기가 만져지면 물을 주지 않은 것이 좋다. 물을 주는 요령은 첫째가 물이 밑으로 줄줄 세어 나올 만큼 흠뻑 주는 것이다. 이것은 식물에 물 공급 그리고 토양내의 산소 교체와 뿌리 유출물 등의 노폐물을 제거하는 의미를 갖게 된다. 그러나 배수시설이 없는 실내정원의 경우에는 흠뻑 줄 수가 없으므로 흙 표면에 골고루 물을 주도록 하고, 물뿌리개를 한 식물에 고정시키지 말고 한번 주고 토양내로 물이 스며들면 다시 주는 방법이 좋다. 물의 온도는 실내온도와 비슷한 것이 좋다.</p>
                        </div>
                        <div className="col-md-5">
                            <div className="imgBox">
                                <img src="./img/watering.jpg" alt="물주기"/>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="contentInner">    
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <span className="title">02. 광관리</span>
                        <p className="text">창가나 베란다의 자연광이 들어오는 곳에 실내정원을 배치하는 것이 좋다. 일반 가정의 경우 실내공산에서 식물이 자라기에 광량이 부족한 경우가 많다. 특히 실내정원을 만들고 초기 1개월 동안 부족한 광이 문제시 된다. 재배농가에서 높은 광도에서 자랐기 때문에 식재 후에 실내 광량에 적응할 수 있는 광순화 기간이 필요하다. 따라서 약 1개월 정도는 가능한 광을 많아 실내 광도에 순화 될 수 있도록 하여야 한다. 한 여름에 직사광선이 들어오면 블라인드 등을 활용하여 햇빛을 가려주고 광이 너무 부족하면 형광등 등 인공광으로 보광을 해주는 것이 좋다. 꽃이 피는 국화, 튜립 등의 식물이나 허브식물은 많은 광이 요구되므로 반드시 창가나 베란다에 배치하여야 한다.</p>
                    </div>
                    <div className="col-md-5">
                        <div className="imgBox">
                            <img src="./img/sunshine.jpg" alt="광관리"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contentInner2">  
                <div className="innerBox">
                    <div className="row featurette">
                        <div className="col-md-7">
                            <span className="title">03. 온·습도 관리</span>
                            <p className="text">실내식물은 대부분 열대나 아열대가 원산지로 겨울철에도 12℃이하로 내려가지 않도록 관리하는 것이 좋다. 가정 등의 실내공간에서는 공간별로 온도 차이가 크지 않은 경우가 일반적이다. 겨울에 난방이 되지 않는 베란다는 휴면을 요하는 자생식물 이외의 식물은 실내로 들여 놓아야 한다. 여름 휴가철 등 집안에 사람이 없는 경우 베란다에 온도가 너무 올라갈 경우 실내 안쪽으로 들여놓는 것이 좋다. 그리고 냉난방장치 가까이 두지 않는 것이 좋다. 공중습도는 실내온도가 올라가면 더욱 낮아진다. 특히 겨울철 난방으로 인해 온도가 올라갈 경우 실내습도가 더욱 낮아진다. 습도가 너무 낮으면 자주 스프레이 해주어 습도를 높여 준다.</p>
                        </div>
                        <div className="col-md-5">
                            <div className="imgBox">
                                <img src="./img/home_garden.jpg" alt="온습도관리"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contentInner">    
                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <span  className="title">04. 시비 및 병해충 관리</span>
                        <p className="text">시비는 1년에 1-2번 정도 생육이 활발해지는 시기에 시중에서 판매되고 있는 막대형태 등의 고형 비료를 주며 너무 자주 주지 않는 것이 좋다. 스프레이 형태로 판매되고 있는 액비는 생육이 불량하거나 건조나 고온 또는 저온에 스트레스를 받았을 때 준다. 가정에서 자주 발생하는 충해는 응애, 깍지벌레, 진딧물 등으로 고온 건조한 환경에서 많이 발생함으로 스프레이나 환기를 자주해주고 일단 충이 발생하면, 최근 시중에서 간편하게 사용할 수 있도록 판매되는 500mL용 스프레이 약제를 활용하는 것이 좋다.</p>
                    </div>
                    <div className="col-md-5">
                            <div className="imgBox">
                                <img src="./img/bug.jpg" alt="시비 및 병해충 관리"/>
                            </div>
                        </div>
                </div>
            </div>
        </> 
    );
  }

  export default Management;