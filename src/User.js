import React from "react";
import { useState } from "react";

export default function (props) {
  var [Nome, setNome] = React.useState("catanacomics");
  var [Imagem, setImagem] = React.useState("catanacomics");

  function alteraNome() {
    let N = prompt("Digite o nome");
    if (N !== "") setNome(N);
  }

  function alteraImagem() {
    let I = prompt("Digite o link da imagem");
    if (I !== "") setImagem(I);
  }

  return (
    <div class="usuario">
      <img
        data-test="profile-image"
        src={`assets/img/${Imagem}.svg`}
        alt="imagem de perfil"
        onClick={() => alteraImagem()}
      />
      <div class="texto">
        <span>
          <strong data-test="name">{Nome}</strong>
          <ion-icon
            data-test="edit-name"
            name="pencil"
            onClick={() => alteraNome()}
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}
