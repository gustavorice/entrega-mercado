const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: " ",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

function geraProduto(produto) {
  //recuperar informações do produto
  const nome = produto.title;
  const preco = produto.price;
  const categoria = produto.category;
  const image = produto.image;

  //criando elementos
  const productMain = document.createElement("main");
  const productCard = document.createElement("li");
  const productImg = document.createElement("img");
  const productTitle = document.createElement("h1");
  const productCategory = document.createElement("h5");
  const productPrice = document.createElement("strong");
  const ul = document.createElement("ul");
  const frutas = document.getElementById("frutas");
  const bebidas = document.getElementById("bebidas");
  const higiene = document.getElementById("higiene");

  //adicionar informações nas tags criadas
  //imprimindo imagem
  if (image == undefined) {
    productImg.src = "./img/products/no-img.svg";
  } else {
    productImg.src = `${image}`;
  }
  productImg.alt = nome;
  //imprimindo nome
  productTitle.innerHTML = `${nome}`;
  //imprimindo categoria
  productCategory.innerHTML = `${categoria}`;
  //
  productPrice.innerHTML = `${preco}`;

  if (produto.category == "Frutas") {
    frutas.appendChild(ul);
    ul.appendChild(productCard);
    productCard.appendChild(productImg);
    productCard.appendChild(productMain);
    productMain.appendChild(productTitle);
    productMain.appendChild(productCategory);
    productMain.appendChild(productPrice);
  } else if (produto.category == "Bebidas") {
    bebidas.appendChild(ul);
    ul.appendChild(productCard);
    productCard.appendChild(productImg);
    productCard.appendChild(productMain);
    productMain.appendChild(productTitle);
    productMain.appendChild(productCategory);
    productMain.appendChild(productPrice);
  } else if (produto.category == "Higiene") {
    higiene.appendChild(ul);
    ul.appendChild(productCard);
    productCard.appendChild(productImg);
    productCard.appendChild(productMain);
    productMain.appendChild(productTitle);
    productMain.appendChild(productCategory);
    productMain.appendChild(productPrice);
  }

  productCard.classList.add("product");
  productImg.classList.add("product-img");
  productMain.classList.add("product-main");
  productTitle.classList.add("product-title");
  productCategory.classList.add("product-category");
  productPrice.classList.add("product-price");

  return productCard;
}

//const criarProduto = geraProduto();

function listarProduto(listaProduto) {
  for (let i = 0; i < listaProduto.length; i++) {
    const produto = listaProduto[i];

    const cardProduto = geraProduto(produto);
  }
}

listarProduto(products);
