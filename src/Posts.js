import React from "react";

let itens = [
  {
    usuario: "meowed",
    img: "gato-telefone",
    curtido_por: "respondeai",
    curtidas: "101.523",
    id: "0",
    btSalvar: "bookmark-outline",
    btCurtir: "heart-outline"
  },
  {
    usuario: "barked",
    img: "dog",
    curtido_por: "adorable_animals",
    curtidas: "99.159",
    id: "1",
    btSalvar: "bookmark-outline",
    btCurtir: "heart-outline"
  },
  {
    usuario: "adorable_animals",
    img: "cat",
    curtido_por: "barked",
    curtidas: "10.150",
    id: "2",
    btSalvar: "bookmark-outline",
    btCurtir: "heart-outline"
  }
];

export default function Posts() {
  let [btSalvar, setbtSalvar] = React.useState("bookmark-outline");
  let [btCurtir, setbtCurtir] = React.useState("heart-outline");

  function salvarPost(id) {
    if (itens[id].btSalvar === "bookmark-outline")
      itens[id].btSalvar = "bookmark";
    else itens[id].btSalvar = "bookmark-outline";
    console.log(itens[id].btSalvar);
  }

  return (
    <div class="posts">
      {itens.map((item) => (
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
                  data-test="like-post"
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
                  data-test="save-post"
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
      ))}
    </div>
  );
}

{
  /*
  return (
    <div class="posts">
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src="assets/img/meowed.svg" alt="meowed" />
            meowed
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src="assets/img/gato-telefone.svg" alt="gato-telefone" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="assets/img/respondeai.svg" alt="respondeai" />
            <div class="texto">
              Curtido por <strong>respondeai</strong> e{" "}
              <strong>outras 101.523 pessoas</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src="assets/img/barked.svg" alt="barked" />
            barked
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src="assets/img/dog.svg" alt="dog" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="assets/img/adorable_animals.svg" alt="adorable_animals" />
            <div class="texto">
              Curtido por <strong>adorable_animals</strong> e{" "}
              <strong>outras 99.159 pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
}
