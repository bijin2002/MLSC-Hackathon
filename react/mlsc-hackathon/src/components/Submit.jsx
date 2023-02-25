import React from "react";
import "./button.css"
export default function Submit({isSubmit}) {
  return (
    <div class="container">
      <a href="#" class="button">
        <div class="button__line"></div>
        <div class="button__line"></div>
        <span class="button__text"><button onClick={()=>isSubmit=true}></button></span>
        <div class="button__drow1"></div>
        <div class="button__drow2"></div>
      </a>
    </div>
  );
}
