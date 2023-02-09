import React, { useEffect, useState } from 'react';
import '../css/PlantsContent.css';
import  plants from '../gardenList.json'; 
import visual03 from '../img/visual03.jpg';

function Plants() {
    const [plant, setPlant] = useState([]);
    const [plantsName, setPlants] = useState('');
    useEffect(() => {
        setPlant(plants);
    }, []);

    const plantData = plant.map((row,index) => {
        return(
            <tr key={index}>
                <td><img src={'http://www.nongsaro.go.kr/'+row.rtnFileCours.__cdata+row.rtnThumbFileNm.__cdata} alt={row.rtnOrginlFileNm.__cdata}/></td>
                <td><span>{row.cntntsSj.__cdata}</span></td>
            </tr>
        );
    });
 
    const search = (e) => {
        e.preventDefault();  //새로고침이 안되게 한다
        //console.log(users.length);
        let searchlist = plants.filter(function(element){
            return element.cntntsSj.__cdata.includes(plantsName);  
          });
        setPlant(searchlist); 
    };

    return (
        <>
        <div className="sub_visual">
            <img src={visual03} alt="visualImg" />
            <span>PLANTS</span>
        </div>
        <div className="contentInner">
            <div className="col-md-12 order-md-2">
                <h2 className="featurette-heading fw-bold lh-1">PLANTS</h2>
                <p className="lead">실내정원에서 잘 자라는 식물들의 추천 리스트 입니다.</p>
            </div>
            <form className="searchForm" onSubmit={search}>
                <label htmlFor="title">식물명</label>
                <input id="title" type="text" placeholder="아레카야자" value={plantsName} onChange={ (e) => setPlants(e.target.value)}  />
                <button type="submit">검색</button>
            </form>
            <table className="table table-bordered">
                <thead>
                    <tr><th>이미지</th><th>Name</th></tr>
                </thead>
                <tbody>
                    {plantData}
                </tbody>
            </table>  
        </div>
        </> 
    );
  }

  export default Plants;