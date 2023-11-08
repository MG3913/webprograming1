import { Link } from "react-router-dom";

function Nav() {
  return (
    <div id ="nav">
        <ul class="menu">
          <li> <a href="#">나의 소개</a> 
            <ul class="submenu">
              <li><nav><Link to={"/Resume"}> 이력서 </Link></nav></li>
              <li><nav><Link to={"/Info"}> 자기 소개서 </Link></nav></li>
            </ul>
          </li>

          <li>
          <a href="#">프로 젝트</a>
            <ul class="submenu">
              <li><nav><Link to="/css"> 디지털 컨텐츠 기획 </Link></nav></li>
              <li><nav><Link to="/reactjs"> 웹 프로그래밍 </Link></nav></li>
              <li><nav><Link to="/js"> 모바일 프로그래밍 </Link></nav></li>
              <li><nav><Link to="/nodejs"> C++ </Link></nav></li>
              
            </ul>
          </li>

          <li>
          <a href="#">공 모 전</a>
            <ul class="submenu">
              <nav>
              <li><nav><Link to={"/contest1"}> Contest1 </Link></nav></li>
              <li><nav><Link to={"/contest2"}> Contest2 </Link></nav></li>
              <li><nav><Link to={"/contest3"}> Contest3 </Link></nav></li>
              </nav>
            </ul>
          </li>

          <li>
          <a href="#">나의 경력</a>
            <ul class="submenu">
              
              <li><nav><Link to={"/Career1"}> 아르바이트 및 사회봉사 </Link></nav></li>
              <li><nav><Link to={"/Career2"}> 자격증 및 그외 스펙 </Link></nav></li>
              
            </ul>
          </li>
        </ul>
      </div>
  );
}

export default Nav;