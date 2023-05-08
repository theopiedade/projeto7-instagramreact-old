import React from "react";
//import Storie from "./Storie";

export default function Stories() {
  const itens = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet"
  ];

  return (
    <div class="stories">
      {itens.map((item) => (
        <div class="story">
          <div class="imagem">
            <img src={`assets/img/${item}.svg`} alt={item} />
          </div>
          <div class="usuario">{item}</div>
        </div>
      ))}
      Storie();
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

{
  /*
function Storie() {
  const itens = [ 
  "9gag",
  "meowed",
  "barked",
  "nathanwpylestrangeplanet",
  "wawawicomics",
  "respondeai",
  "filomoderna",
  "memeriagourmet"
];

return (
  {itens.map((item) => (
    <div class="story">
      <div class="imagem">
        <img src={`assets/img/${item}.svg`} alt={item} />
      </div>
      <div class="usuario">{item}</div>
    </div>
     ))}
  );
}
*/
}
