import React, {useState} from "react";
import {TiHeartFullOutline} from "react-icons/ti";


const Test2 = () => {
    const [count, setCount] = useState(0);
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
          Likes: {count}
        </div>
        <div onClick={() => setCount(count + 1)}>
            <TiHeartFullOutline />
        </div>
          <div>Click me</div>
      </div>
    </div>
  );
};

export default Test2;
