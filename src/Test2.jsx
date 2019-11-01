import React from "react";
import {TiHeartFullOutline} from "react-icons/ti";

let Likes = 0;

function handeClick() {
    return (
        <div className={"likes"}>
            Likes: {Likes + 1}
        </div>
    );
}

const Test2 = () => {
  return (
    <div>
      <div className={"description"}>
        Ülesanne 2:
        <p>
          Rakendus peab arvet pidama mitu korda on südame ikooni klikitud ning vastava numbri <code>likes:</code> järel kuvama.
        </p>
      </div>

      <div style={{display:"flex", alignItems: "center"}}>
        <div className={"likes"}>
          Likes: {Likes}
        </div>
        <TiHeartFullOutline />
        <div onClick={handeClick}>Click me</div>
      </div>
    </div>
  );
};

export default Test2;
