import React, { Component } from "react";

import "./PostList.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://randomuser.me/api/portraits/men/33.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a RocketSeat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://randomuser.me/api/portraits/men/34.jpg"
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. ALém disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chama mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://randomuser.me/api/portraits/men/35.jpg"
        },
        date: "04 Jun 2019",
        content: `Fala galera, beleza?
          Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo comenta na publicação pra trocarmos uma idéia`,
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://randomuser.me/api/portraits/women/1.jpg"
            },
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios concluída."
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: "https://randomuser.me/api/portraits/men/36.jpg"
            },
            content:
              "Que maaaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://randomuser.me/api/portraits/men/35.jpg"
        },
        date: "04 Jun 2019",
        content: `Fala galera, beleza?
          Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo comenta na publicação pra trocarmos uma idéia`,
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://randomuser.me/api/portraits/women/1.jpg"
            },
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios concluída."
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: "https://randomuser.me/api/portraits/men/36.jpg"
            },
            content:
              "Que maaaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <main className="main">
        <h1>Hello World</h1>
      </main>
    );
  }
}

export default PostList;
