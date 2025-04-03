let offset = 1;
let coolEffect = () => {
  for (let i = 0; i < 2; i++) {
    menu.menu.entrees
      .concat(menu.menu.desserts)
      .concat(menu.menu.drinks)
      .forEach((item) => {
        let src = item.src;
        let w = Math.random() * 15 + 15;
        let container = document.createElement("div");
        container.classList.add(
          "spin-around",
          "shadow-md",
          "bg-transparent",
          "rounded-full",
          "w-[var(--w)]",
        );

        container.style.setProperty(
          "--w",
          document.querySelector("#imggall").clientWidth *
            parseFloat("0." + Math.floor(w)) +
            "px",
        );
        container.style.animationDelay = -offset + "s";
        container.style.animationDuration = Math.random() * 4;
        document.querySelector("#imggall").appendChild(container);

        let img = document.createElement("img");
        img.src = src;
        img.classList.add("aspect-square", "rounded-full", "object-full");
        container.appendChild(img);

        offset += 0.5;
      });
  }

  offset = 1;
  document.querySelectorAll("#imggall>div").forEach((elm) => {
    elm.style.setProperty(
      "--offset",
      Math.min(
        Math.max(
          (offset * elm.clientWidth) / 4,
          document.querySelector("#imggall").querySelector("img").clientWidth +
            10,
        ),
        document.querySelector("#imggall").clientWidth - elm.clientWidth,
      ) + "px",
    );

    offset += 0.5;
  });
};

document
  .querySelector("#imggall")
  .querySelector("img")
  .addEventListener("load", () => {
    coolEffect();
  });

if (document.querySelector("#imggall").querySelector("img").complete) {
  coolEffect();
}

document.querySelector("#ingredientsimg").src =
  menu.menu.entrees[Math.floor(Math.random() * menu.menu.entrees.length)].src;

setInterval(() => {
  document.querySelector("#ingredientsimg").src =
    menu.menu.entrees[Math.floor(Math.random() * menu.menu.entrees.length)].src;
}, 750);

/*
<div class="spin-around w-[15%]">
              <img
                src="https://images.pexels.com/photos/30506288/pexels-photo-30506288/free-photo-of-delicious-noodle-dish-with-herbs-and-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                class="aspect-square rounded-full object-cover"
              />
            </div>
            */
