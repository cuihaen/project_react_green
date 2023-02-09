import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Link } from 'react-router-dom';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import '../App.css';
import '../css/MainContent.css';

import visual01 from '../img/visual01.jpg';
import visual02 from '../img/visual02.jpg';
import visual03 from '../img/visual03.jpg';
import visual04 from '../img/visual04.jpg';

function App() {
  SwiperCore.use([Pagination, Autoplay]);
  
  return (
    <div className="wrap">
       <div className="box">
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{ clickable: true }}
                 modules={[Autoplay, Pagination]} loop={true} className="mySwiper">
                <SwiperSlide>
                    <img src={visual01} alt="visualImg" />
                    <span>If you want to be happy for a lifetime, be a gardner.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={visual02} alt="visualImg" />
                    <span>Gardening is a way to a healthy life.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={visual03} alt="visualImg" />
                    <span>Let some fresh air into your home.</span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={visual04} alt="visualImg" />
                    <span>Plant a tree and plant a hope for future.</span>
                </SwiperSlide>
            </Swiper>
        </div>
        <h2 className="hidden">본문영역</h2>
        <div className="contentInner about">
            <div className="col-lg-6 left">
                <h3 className="display-5 fw-bold">ABOUT</h3>
                <p className="fs-5">실내정원은 장소에 따라 주거공간, 공공공간으로 구분할 수 있으며, 가정에서 주로 이용하는 실내정원을 식물의 생태에 따라 수생식물을 활용한 연못형, 실내정원의 일부공간을 수공간으로 활용한 습지형, 일반적인 실내식물의 재배조건을 이용한 적습형, 그리고 물관리를 최소화할 수 있는 사막형으로 분류할 수 있다. 또한 이동여부에 따라 바퀴를 달아 이동이 가능하도록 한 이동식 실내정원과 고정식 실내정원으로 분류할 수 있다.</p>
                <Link className="btn btn-lg px-4 me-md-2" to="/react/about">VIEW MORE</Link>
            </div>
            <div className="col-lg-6 right">
                <img src="./img/img5.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
            </div>
        </div>
        <div className="contentInner2 management">
            <div className="innerBox">
            <h3 className="display-5 fw-bold">MANAGEMENT</h3>
                <div className="row align-items-center g-5 py-5">
                    <div className="col-lg-3 col-sm-6">
                        <div className="imgBox"><img src="./img/img4.jpg" alt=""/></div>
                        <span className="fw-normal title">01. 물주기</span>
                        <p>물주는 시기는 손가락으로 흙 표면을 약 1cm 깊이를 만져서 물기가 만져지면 물을 주지 않은 것이 좋다. 물을 주는 요령은 첫째가 물이 밑으로 줄줄 세어 나올 만큼 흠뻑 주는 것이다. 이것은 식물에 물 공급 그리고 토양내의 산소 교체와 뿌리 유출물 등의 노폐물을 제거하는 의미를 갖게 된다. 그러나 배수시설이 없는 실내정원의 경우에는 흠뻑 줄 수가 없으므로 흙 표면에 골고루 물을 주도록 하고, 물뿌리개를 한 식물에 고정시키지 말고 한번 주고 토양내로 물이 스며들면 다시 주는 방법이 좋다. 물의 온도는 실내온도와 비슷한 것이 좋다.</p>
                        <Link className="btn btn-secondary" to="/react/management">VIEW MORE</Link>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="imgBox"><img src="./img/img3.jpg" alt=""/></div>
                        <span className="fw-normal title">02. 광관리</span>
                        <p>창가나 베란다의 자연광이 들어오는 곳에 실내정원을 배치하는 것이 좋다. 일반 가정의 경우 실내공산에서 식물이 자라기에 광량이 부족한 경우가 많다. 특히 실내정원을 만들고 초기 1개월 동안 부족한 광이 문제시 된다. 재배농가에서 높은 광도에서 자랐기 때문에 식재 후에 실내 광량에 적응할 수 있는 광순화 기간이 필요하다. 따라서 약 1개월 정도는 가능한 광을 많아 실내 광도에 순화 될 수 있도록 하여야 한다. 한 여름에 직사광선이 들어오면 블라인드 등을 활용하여 햇빛을 가려주고 광이 너무 부족하면 형광등 등 인공광으로 보광을 해주는 것이 좋다. 꽃이 피는 국화, 튜립 등의 식물이나 허브식물은 많은 광이 요구되므로 반드시 창가나 베란다에 배치하여야 한다.</p>
                        <Link className="btn btn-secondary" to="/react/management">VIEW MORE</Link>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="imgBox"><img src="./img/img2.jpg" alt=""/></div>
                        <span className="fw-normal title">03. 온·습도 관리</span>
                        <p>실내식물은 대부분 열대나 아열대가 원산지로 겨울철에도 12℃이하로 내려가지 않도록 관리하는 것이 좋다. 가정 등의 실내공간에서는 공간별로 온도 차이가 크지 않은 경우가 일반적이다. 겨울에 난방이 되지 않는 베란다는 휴면을 요하는 자생식물 이외의 식물은 실내로 들여 놓아야 한다. 여름 휴가철 등 집안에 사람이 없는 경우 베란다에 온도가 너무 올라갈 경우 실내 안쪽으로 들여놓는 것이 좋다. 그리고 냉난방장치 가까이 두지 않는 것이 좋다. 공중습도는 실내온도가 올라가면 더욱 낮아진다. 특히 겨울철 난방으로 인해 온도가 올라갈 경우 실내습도가 더욱 낮아진다. 습도가 너무 낮으면 자주 스프레이 해주어 습도를 높여 준다.</p>
                        <Link className="btn btn-secondary" to="/react/management">VIEW MORE</Link>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="imgBox"><img src="./img/img1.jpg" alt=""/></div>
                        <span className="fw-normal title">04. 시비 및 병해충 관리</span>
                        <p>시비는 1년에 1-2번 정도 생육이 활발해지는 시기에 시중에서 판매되고 있는 막대형태 등의 고형 비료를 주며 너무 자주 주지 않는 것이 좋다. 스프레이 형태로 판매되고 있는 액비는 생육이 불량하거나 건조나 고온 또는 저온에 스트레스를 받았을 때 준다. 가정에서 자주 발생하는 충해는 응애, 깍지벌레, 진딧물 등으로 고온 건조한 환경에서 많이 발생함으로 스프레이나 환기를 자주해주고 일단 충이 발생하면, 최근 시중에서 간편하게 사용할 수 있도록 판매되는 500mL용 스프레이 약제를 활용하는 것이 좋다.</p>
                        <Link className="btn btn-secondary" to="/react/management">VIEW MORE</Link>
                    </div>
                   
                </div>
            </div>
        </div>
        <div className="backImgSection">
            <span>You probably can't kill.</span>
        </div>
        <div className="contentInner2 plants">
            <div className="innerBox">
                <div className="text-center">
                        <h3 className="display-5 fw-bold">PLANTS</h3>
                        <div className="col-lg-12">
                            <p >실내정원에서 기르기에 적합한 식물에는 어떤 것들이 있는지 궁금한 식물 이름을 검색해 결과를 확인해보자.</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <Link className="btn btn-lg px-4 " to="/react/plants">VIEW MORE</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contentInner2 gallery">
            <div className="innerBox">
            <div className="headTitle">
                <h3 className="display-5 fw-bold">GALLERY</h3>
                <Link className="galleryBtn" to="/react/gallery"><span className="hidden">VIEW MORE</span><i className="fa-solid fa-plus"></i></Link>
            </div>
            <ul>
                <li>
                    <img src="./img/img1.jpg" alt="Little Garden img1"/>
                </li>
                <li>
                    <img src="./img/img2.jpg" alt="Little Garden img2"/>
                </li>
                <li>
                    <img src="./img/img3.jpg" alt="Little Garden img3"/>
                </li>
                <li>
                    <img src="./img/img4.jpg" alt="Little Garden img4"/>
                </li>
                <li>
                    <img src="./img/img5.jpg" alt="Little Garden img5"/>
                </li>
                <li>
                    <img src="./img/img6.jpg" alt="Little Garden img6"/>
                </li>
                <li>
                    <img src="./img/img7.jpg" alt="Little Garden img7"/>
                </li>
                <li>
                    <img src="./img/img8.jpg" alt="Little Garden img8"/>
                </li>
                <li>
                    <img src="./img/sunshine.jpg" alt="Little Garden img9"/>
                </li>
                <li>
                    <img src="./img/watering.jpg" alt="Little Garden img10"/>
                </li>
                <li>
                    <img src="./img/home_garden.jpg" alt="Little Garden img11"/>
                </li>
                <li>
                    <img src="./img/backImg.jpg" alt="Little Garden img12"/>
                </li>
            </ul>
        </div>
        </div>
    </div>
  );
}

export default App;