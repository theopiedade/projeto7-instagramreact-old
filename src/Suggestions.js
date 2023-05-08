import React from "react";

const itens = [
  "bad.vibes.memes",
  "chibirdart",
  "razoesparaacreditar",
  "adorable_animals",
  "smallcutecats"
];

export default function Suggestions() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {itens.map((item) => (
        <div class="sugestao">
          <div class="usuario">
            <img src={`assets/img/${item}.svg`} alt={item} />
            <div class="texto">
              <div class="nome">{item}</div>
              <div class="razao">Segue você</div>
            </div>
          </div>
          <div class="seguir">Seguir</div>
        </div>
      ))}

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
