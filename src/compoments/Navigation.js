import React from "react";
import { Link } from "react-router-dom";
import { MdGames } from "react-icons/md";
import { VscSearch } from "react-icons/vsc";
import "./Navigation.css";

function Navigation() {
  return (
    <div>
      <div className="header">
        <ul className="headerleft">
          <li>
            <Link to="/">
              <MdGames className="mdgames" />
            </Link>
          </li>
          <li>
            <Link to="/">GAMEGO!</Link>
          </li>
        </ul>

        <ul className="headerright">
          <li>
            <VscSearch className="vscsearch" />
            <input type="text" placeholder="원하는 게임을 입력하세요" />
          </li>
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
