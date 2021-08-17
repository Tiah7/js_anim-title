# js_anim-title
## Animer un titre

- Objectif : Réaliser un effet d'actualisation d'un message.
- Consigne : •	En réalité, le javascript n'est pas très compliqué, c'est les keyframes dans le css qui gèrent la fluidité de l'animation. Il suffit de faire une série de condition pour chaque cas et de remplacer le texte dans le HTML, on peut le faire avec switch mais aussi avec une variable compteur qu'on incrémente et des if/else if/else. Plutôt que innerHTML, vous pouvez utiliser innerText pour modifier le texte.


### index.php :
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animate Title</title>
    <link rel="stylesheet" href="main.css">
  </head>
  <body>

    <div class="container">
      <div class="image-wrapper left"></div>
      <hr>
      <h1 id="title">Salut !</h1>
      <div class="image-wrapper right"></div>
    </div>

    <script type="text/javascript" src="main.js"></script>
  </body>
</html>



### main.css :
                                      * {
                                          padding: 0;
                                          margin: 0;
                                      }

                                    .container {
                                        width: 100vw;
                                        height: 100vh;
                                        display: flex;
                                    }

                                    .image-wrapper {
                                        width: 50%;
                                        height: 100%;
                                        background-size: cover;
                                        position: absolute;
                                    }

                                    .left {
                                        background-image: url('left.jpg');
                                        background-position: right;
                                        z-index: 4;
                                    }

                                    .right {
                                        background-image: url('right.jpg');
                                        background-position: left;
                                        left: 50%;
                                        z-index: 1;
                                    }

                                    hr {
                                        height: 180px;
                                        border: none;
                                        border-left: solid 10px #76a89d;
                                        position: absolute;
                                        z-index: 4;
                                        left: 50%;
                                        top: 50%;
                                        transform: translate(-48%, -48%)
                                    }

                                    #title {
                                        font-size: 3rem;
                                        text-align: center;
                                        position: absolute;
                                        z-index: 2;
                                        left: 50%;
                                        top: 50%;
                                        margin-left: 2rem;
                                        transform: translate(-120%, -56%);
                                        animation: showTitle 3s infinite ;
                                    }

                                    @keyframes showTitle {
                                        0% {
                                            transform: translate(-120%, -56%)
                                        }
                                        15% {
                                            transform: translate(0%, -56%)
                                        }
                                        80% {
                                            transform: translate(0%, -56%)
                                        }
                                        94% {
                                            transform: translate(-120%, -56%)
                                        }
                                        100% {
                                            transform: translate(-120%, -56%)
                                        }
                                    }

                                    @media screen and (max-width: 600px) {
                                        hr {
                                            height: 136px;
                                        }

                                        .title {
                                            font-size: 2rem
                                        }
                                    }
                                    
                                    
                                    

### main.js :
                                  const title = document.getElementById('title');
                                  let counter = 0;

                                  function changeTitle() {
                                      if (counter == 0) {
                                          title.innerHTML = 'je suis un designer web';
                                          counter = 1;
                                      } else if (counter ==1) {
                                          title.innerHTML = 'je sais concevoir';
                                          counter = 2;
                                      } else if (counter ==2) {
                                          title.innerHTML = 'et développer';
                                          counter = 3;
                                      } else if (counter ==3) {
                                          title.innerHTML = 'des sites web';
                                          counter = 4;
                                      } else if (counter ==4) {
                                          title.innerHTML = 'Salut !';
                                          counter = 0;
                                      }
                                  }

                                  setInterval(changeTitle, 3000);
