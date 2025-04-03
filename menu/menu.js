menu.menu.entrees.forEach((item) => {
  let name = item.item;
  let desc = item.description;
  let price = item.price;
  let spicy = item.spicy;
  let img = item.src;

  let card = document.createElement("div");
  card.classList.add(
    "card",
    "bg-base-100",
    "col-span-8",
    "shadow-sm",
    "rounded-xl",
  );
  document.querySelector("#entrees").appendChild(card);

  let figure = document.createElement("figure");
  card.appendChild(figure);

  let image = document.createElement("img");
  image.src = img;
  image.alt = name;
  image.style.aspectRatio = "3/2";
  image.style.objectFit = "cover";
  figure.appendChild(image);

  let body = document.createElement("div");
  body.classList.add("card-body");
  card.appendChild(body);

  let titlec = document.createElement("div");
  titlec.classList.add("card-title", "justify-between");
  body.appendChild(titlec);

  let title = document.createElement("h2");
  title.classList.add("float-left");
  title.innerHTML =
    name +
    (spicy ? '<i class="fa-solid fa-pepper-hot ml-3 text-red-600"></i>' : "");
  titlec.appendChild(title);

  let cost = document.createElement("h2");
  cost.classList.add("float-end", "text-sm", "font-normal");
  cost.innerText = "$" + price;
  titlec.appendChild(cost);

  let description = document.createElement("p");
  description.innerText = desc;
  body.appendChild(description);
});

menu.menu.desserts.forEach((item) => {
  let name = item.item;
  let desc = item.description;
  let price = item.price;
  let spicy = item.spicy;
  let img = item.src;

  let card = document.createElement("div");
  card.classList.add(
    "card",
    "bg-base-100",
    "col-span-8",
    "shadow-sm",
    "rounded-xl",
  );
  document.querySelector("#desserts").appendChild(card);

  let figure = document.createElement("figure");
  card.appendChild(figure);

  let image = document.createElement("img");
  image.src = img;
  image.alt = name;
  image.style.aspectRatio = "3/2";
  image.style.objectFit = "cover";
  figure.appendChild(image);

  let body = document.createElement("div");
  body.classList.add("card-body");
  card.appendChild(body);

  let titlec = document.createElement("div");
  titlec.classList.add("card-title", "justify-between");
  body.appendChild(titlec);

  let title = document.createElement("h2");
  title.classList.add("float-left");
  title.innerHTML =
    name +
    (spicy ? '<i class="fa-solid fa-pepper-hot ml-3 text-red-600"></i>' : "");
  titlec.appendChild(title);

  let cost = document.createElement("h2");
  cost.classList.add("float-end", "text-sm", "font-normal");
  cost.innerText = "$" + price;
  titlec.appendChild(cost);

  let description = document.createElement("p");
  description.innerText = desc;
  body.appendChild(description);
});

menu.menu.drinks.forEach((item) => {
  let name = item.item;
  let desc = item.description;
  let price = item.price;
  let spicy = item.spicy;
  let img = item.src;

  let card = document.createElement("div");
  card.classList.add(
    "card",
    "bg-base-100",
    "col-span-8",
    "shadow-sm",
    "rounded-xl",
  );
  document.querySelector("#drinks").appendChild(card);

  let figure = document.createElement("figure");
  card.appendChild(figure);

  let image = document.createElement("img");
  image.src = img;
  image.alt = name;
  image.style.aspectRatio = "3/2";
  image.style.objectFit = "cover";
  figure.appendChild(image);

  let body = document.createElement("div");
  body.classList.add("card-body");
  card.appendChild(body);

  let titlec = document.createElement("div");
  titlec.classList.add("card-title", "justify-between");
  body.appendChild(titlec);

  let title = document.createElement("h2");
  title.classList.add("float-left");
  title.innerHTML =
    name +
    (spicy ? '<i class="fa-solid fa-pepper-hot ml-3 text-red-600"></i>' : "");
  titlec.appendChild(title);

  let cost = document.createElement("h2");
  cost.classList.add("float-end", "text-sm", "font-normal");
  cost.innerText = "$" + price;
  titlec.appendChild(cost);

  let description = document.createElement("p");
  description.innerText = desc;
  body.appendChild(description);
});
