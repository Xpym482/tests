import React from "react";
import {TiHeartFullOutline} from "react-icons/ti";

let Likes = 0;

const click = () => {
    function handeClick() {
        Likes += 1;
    }
    console.log(handeClick());
    return (
        <div className={"likes"}>
            Likes: {Likes}
        </div>
    );
};

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
          Likes: <click />
        </div>
        <TiHeartFullOutline />
        <div onClick={click}>Click me</div>
      </div>
    </div>
  );
};

export default Test2;
