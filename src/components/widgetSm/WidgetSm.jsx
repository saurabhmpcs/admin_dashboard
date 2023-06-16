import React from "react";

import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
            alt=""
            className="widgetImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna kellar</span>
            <span className="widgetSmUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="smIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
            alt=""
            className="widgetImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna kellar</span>
            <span className="widgetSmUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="smIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
            alt=""
            className="widgetImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna kellar</span>
            <span className="widgetSmUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="smIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
            alt=""
            className="widgetImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna kellar</span>
            <span className="widgetSmUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="smIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVEBcPJKSYHevA2n4w8wzAJ_yJaErblC4Fi_y1SPEMQ&s"
            alt=""
            className="widgetImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna kellar</span>
            <span className="widgetSmUserTitle">Software engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="smIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
