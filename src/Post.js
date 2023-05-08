import React from "react";
import { useState } from "react";

export default function Post(props) {
  let [btSalvar, setbtSalvar] = useState("bookmark-outline");
  let [btCurtir, setbtCurtir] = useState("heart-outline");
  let [classHeart, setClass] = useState("");
  let [numLikes, setLikes] = useState(props.numCurtidas);
  let contLikes = numLikes;

  function salvarPost(salvar) {
    if (salvar === "bookmark-outline") setbtSalvar("bookmark");
    else setbtSalvar = "bookmark-outline";
  }

  function curtirPost(curtida) {
    if (curtida === "heart-outline") {
      setClass("curtido");
      setbtCurtir("heart");
      setLikes(contLikes + 1);
    } else {
      setClass("");
      setbtCurtir("heart-outline");
      setLikes(contLikes + 1);
    }
  }

  function curtirImagem() {
    if (classeHeart === "") {
      setClass("curtido");
      setbtCurtir("heart");
      setLikes(contLikes + 1);
    }
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={`assets/img/${item.usuario}.svg`} alt={item.usuario} />
          {item.usuario}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={`assets/img/${item.img}.svg`} alt={item.img} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              name={btCurtir}
              onClick={() => {
                btCurtir === "heart-outline"
                  ? setbtCurtir("heart")
                  : setbtCurtir("heart-outline");
              }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={btSalvar}
              onClick={() => {
                btSalvar === "bookmark-outline"
                  ? setbtSalvar("bookmark")
                  : setbtSalvar("bookmark-outline");
              }}
            ></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img
            src={`assets/img/${item.curtido_por}.svg`}
            alt="{item.curtido_por}"
          />
          <div class="texto">
            Curtido por <strong>{item.curtido_por}</strong> e{" "}
            <strong>outras {item.curtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
