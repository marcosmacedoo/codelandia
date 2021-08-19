const news = [
  {
    title: "Agora é oficial: o Windows 11 está vindo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
  },
  {
    title: "Tim Berners-Lee vai leiloar código-fonte da web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
  },
  {
    title: "Tem Firefox novo no pedaço e você vai querer migrar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.",
  },
  {
    title: "John McAfee, criador do antivírus McAfee, morre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.",
  },
];

let $listNews = document.querySelector('.list-news')

window.addEventListener('load', () => {
  news.forEach(itemNews => {
    const $li = document.createElement('li')

    const $article = document.createElement('article')
    $article.classList.add('card-news')

    const $header = document.createElement('header')

    const $span = document.createElement('span')
    $span.innerText = '02 de jul, 2021'

    const $button = document.createElement('button')
    $button.id = 'button-like'

    const $img = document.createElement('img')
    $img.src = './assets/heart.svg'
    $img.alt = 'Botão de like'

    $button.appendChild($img)

    $header.appendChild($span)
    $header.appendChild($button)

    const $h3 = document.createElement('h3')
    $h3.innerText = itemNews.title

    const $p = document.createElement('p')
    $p.innerText = itemNews.description

    $article.appendChild($header)
    $article.appendChild($h3)
    $article.appendChild($p)

    $li.appendChild($article)

    $listNews.appendChild($li)
  })
})


let newsSought = ''
const $inputSearchNews = document.querySelector('#search-news')

$inputSearchNews.addEventListener('input', (event) => {
  $listNews.remove()

  newsSought = event.target.value.toLowerCase()

  const filteredNews = news.filter(itemNews => {
    return itemNews.title.toLowerCase().includes(newsSought)
  })

  $listNews = document.createElement('ul')
  $listNews.classList.add('list-news')

  document.querySelector('main > .container').appendChild($listNews)

  filteredNews.forEach(itemNews => {
    const $li = document.createElement('li')

    const $article = document.createElement('article')
    $article.classList.add('card-news')

    const $header = document.createElement('header')

    const $span = document.createElement('span')
    $span.innerText = '02 de jul, 2021'

    const $button = document.createElement('button')
    $button.id = 'button-like'

    const $img = document.createElement('img')
    $img.src = './assets/heart.svg'
    $img.alt = 'Botão de like'

    $button.appendChild($img)

    $header.appendChild($span)
    $header.appendChild($button)

    const $h3 = document.createElement('h3')
    $h3.innerText = itemNews.title

    const $p = document.createElement('p')
    $p.innerText = itemNews.description

    $article.appendChild($header)
    $article.appendChild($h3)
    $article.appendChild($p)

    $li.appendChild($article)

    $listNews.appendChild($li)
  })
})


window.addEventListener('load', () => {
  const buttonsLike = document.querySelectorAll("#button-like");

  buttonsLike.forEach((buttonLike) => {
    buttonLike.addEventListener("click", () => {
      const [imgHeart] = buttonLike.children;

      if (buttonLike.getAttribute("like-active") === "true") {
        imgHeart.setAttribute("src", "./assets/heart.svg");
        buttonLike.setAttribute("like-active", "false");
      } else {
        imgHeart.setAttribute("src", "./assets/heart-active.svg");
        buttonLike.setAttribute("like-active", "true");
      }
    });
  });
})
