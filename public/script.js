let menu = {
  menu: {
    entrees: [
      {
        item: "Teriyaki Tofu Miso Ramen",
        description:
          "Plant-based chicken broth with ramen noodles, miso paste, rice vinegar, and teriyaki tofu. Topped with spring onions and sesame seeds.",
        price: 12.99,
        src: "https://images.pexels.com/photos/30506288/pexels-photo-30506288/free-photo-of-delicious-noodle-dish-with-herbs-and-chopsticks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        spicy: false,
      },
      {
        item: "Burger Bowl",
        description:
          "Crumbled tempeh served with chopped lettuce, onion, tomatoes and crinkle-cut french fries. Topped with our secret vegan burger sauce.",
        price: 10.99,
        src: "https://images.pexels.com/photos/8165427/pexels-photo-8165427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        spicy: true,
      },
      {
        item: "Sticky Tofu Bento Box",
        description:
          "Sticky Lemon Pepper tofu marinated with soy sauce and lemon, topped with parsley and sesame seeds. Served with rice on the side in a bento box.",
        price: 11.99,
        src: "https://images.pexels.com/photos/31371952/pexels-photo-31371952/free-photo-of-delicious-japanese-bento-box-with-tofu-and-rice.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        spicy: false,
      },
      {
        item: "Vegan Sushi Rolls",
        description:
          "Vegan sushi rolls filled with avocado, cucumber, and vegan cream cheese. Served with lemon and a slice of avocado.",
        price: 9.99,
        src: "https://images.pexels.com/photos/17308455/pexels-photo-17308455/free-photo-of-a-sushi-roll-with-a-slice-of-lemon-and-a-slice-of-avocado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        spicy: false,
      },
      {
        item: "Shredded Tofu Tacos",
        description:
          "Shredded tofu marinated in our in-house marinade. Served on a golden brown soft-shell tortilla with our signature white sauce.",
        price: 8.99,
        src: "https://images.pexels.com/photos/28895963/pexels-photo-28895963/free-photo-of-delicious-tacos-dipped-in-creamy-sauce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        spicy: true,
      },
      {
        item: "Vegan Pad Thai",
        description:
          "Rice noodles stir-fried with tofu, bean sprouts, and peanuts. Topped with lime and cilantro.",
        price: 10.99,
        src: "https://images.pexels.com/photos/5409024/pexels-photo-5409024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        spicy: true,
      },
      {
        item: "Vegan Burrito Bowl",
        description:
          "A bowl filled with brown rice, tofu, corn, avocado, and lettuce. Topped with lime and cilantro.",
        price: 9.99,
        src: "https://images.pexels.com/photos/9258726/pexels-photo-9258726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        spicy: true,
      },
      {
        item: "Vegan Caesar Salad",
        description:
          "Romaine lettuce topped with croutons, vegan parmesan cheese, and our in-house vegan caesar dressing.",
        price: 8.99,
        src: "https://images.pexels.com/photos/3672013/pexels-photo-3672013.jpeg?auto=compress&cs=tinysrgb&w=600",
        spicy: false,
      },
      {
        item: "Avocado & Tomato Wrap",
        description:
          "Lightly toasted flatbread garnished with sweet corn and herbs. Served with a side of our in-house vegan sauce.",
        price: 8.99,
        src: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        spicy: false,
      },
      {
        item: "Vegan Pizza",
        description:
          "A classic pizza topped with vegan cheese, olives, tomatoes. Drizzled with olive oil and garnished with basil.",
        price: 11.99,
        src: "https://images.pexels.com/photos/7172067/pexels-photo-7172067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        spicy: false,
      },
    ],
    desserts: [
      {
        item: "Chia Pudding",
        price: 7.99,
        description:
          "Chia seed pudding, mixed with almond milk and maple syrup. Topped with strawberries, more sweet maple syrup, and granola.",
        src: "https://images.pexels.com/photos/1640768/pexels-photo-1640768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        item: "Coconut Mango Sticky Rice",
        price: 7.99,
        description:
          "Sweet sticky rice cooked in coconut milk, served along with juicy mango slices and coconut milk. Drizzled with a sweet and salty coconut caramel sauce.",
        src: "https://images.pexels.com/photos/19835551/pexels-photo-19835551/free-photo-of-mango-with-rice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        item: "Dark Chocolate Dipped Strawberries",
        price: 8.99,
        description:
          "Dipped in creamy vegan dark chocolate and sprinkled with crushed nuts.",
        src: "https://images.pexels.com/photos/874469/pexels-photo-874469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    drinks: [
      {
        item: "Very Berry Hibiscus Iced Tea",
        price: 4.99,
        description:
          "Refreshing sweet iced tea brewed with hibiscus, berries, and topped with agave syrup and lemon.",
        src: "https://images.pexels.com/photos/792613/pexels-photo-792613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        item: "Creamy Coconut Matcha Smoothie",
        price: 4.99,
        description:
          "Coconut milk, matcha green tea, and a hint of vanilla for a creamy smoothie delight filled with antioxidants.",
        src: "https://images.pexels.com/photos/13031428/pexels-photo-13031428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        item: "Apple Kiwi Green Smoothie",
        price: 4.99,
        description:
          "Refreshing and nutrient-packed smoothie made with crisp green apples and juicy kiwis! Blended with coconut water for a hydrating plus.",
        src: "https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
  },
};

let ids = [];
let errormsg = (msg, time) => {
  ids.forEach((id) => {
    clearTimeout(id);
  });
  ids = [];

  let otherbox = document.querySelector(".errorbox");
  otherbox.classList.remove("opacity-100");
  otherbox.classList.remove("z-[100]");
  otherbox.classList.add("opacity-0");
  otherbox.classList.add("-z-50");

  let box = document.querySelector(".errorbox");
  box.classList.remove("opacity-0");
  box.classList.add("opacity-100");
  box.classList.add("z-[100]");
  box.classList.remove("-z-50");
  box.querySelector("span").innerHTML = msg;

  ids.push(
    setTimeout(() => {
      box.classList.add("opacity-0");
      box.classList.remove("opacity-100");
      ids.push(
        setTimeout(() => {
          box.classList.add("-z-50");
          box.classList.remove("z-[100]");
        }, 500),
      );
    }, time),
  );
};

let successmsg = (msg, time) => {
  ids.forEach((id) => {
    clearTimeout(id);
  });
  ids = [];

  let otherbox = document.querySelector(".errorbox");
  otherbox.classList.remove("opacity-100");
  otherbox.classList.remove("z-[100]");
  otherbox.classList.add("opacity-0");
  otherbox.classList.add("-z-50");

  let box = document.querySelector(".successbox");
  box.classList.remove("opacity-0");
  box.classList.add("opacity-100");
  box.classList.add("z-[100]");
  box.classList.remove("-z-50");
  box.querySelector("span").innerHTML = msg;

  ids.push(
    setTimeout(() => {
      box.classList.add("opacity-0");
      box.classList.remove("opacity-100");
      ids.push(
        setTimeout(() => {
          box.classList.add("-z-50");
          box.classList.remove("z-[100]");
        }, 500),
      );
    }, time),
  );
};

let addCookie = (title, value, days) => {};

let getCookie = (name) => {
  return localStorage.getItem(name) || "";
};

let removeCookie = (name) => {
  localStorage.removeItem(name);
};

if (getCookie("cookieson") == "yes") {
  addCookie = (title, value) => {
    localStorage.setItem(title, value);
  };
} else {
  setTimeout(() => {
    let dialog = document.createElement("dialog");
    dialog.id = "cookie_di";
    dialog.classList.add("modal");

    let box = document.createElement("div");
    box.classList.add("modal-box", "w-11/12", "max-w-5xl");
    dialog.appendChild(box);

    let title = document.createElement("h1");
    title.classList.add("font-bold", "text-xl");
    title.innerText = "Hey!";
    box.appendChild(title);

    let body = document.createElement("p");
    body.classList.add("mt-5");
    body.innerText =
      "Our website uses cookies to store profile information, reservation information, and more! You can change your mind at any time.";
    box.appendChild(body);

    let action = document.createElement("div");
    action.classList.add("modal-action");
    box.appendChild(action);

    let form = document.createElement("form");
    form.method = "dialog";
    action.appendChild(form);

    let nocookie = document.createElement("button");
    nocookie.classList.add("btn");
    nocookie.innerHTML = "No...";
    form.appendChild(nocookie);

    let yescookie = document.createElement("button");
    yescookie.classList.add("btn", "ml-5");
    yescookie.innerHTML = "Yes!";
    form.appendChild(yescookie);

    document.body.appendChild(dialog);

    dialog.showModal();

    yescookie.addEventListener("click", () => {
      addCookie = (title, value) => {
        localStorage.setItem(title, value);
      };

      addCookie("cookieson", "yes");
    });
  }, 200);
}

let bdata = {};
let serverOn = false;
let serverToRun = [];
let script = document.currentScript;

let backupData = () => {
  fetch(
    script.src
      .split("/")
      .slice(0, script.src.split("/").length - 1)
      .join("/") + "/./data.json",
  )
    .then((response) => {
      if (!response.ok) {
        errormsg(
          "Error when attempting to fetch cached resturant information.",
          4000,
        );
        return;
      }

      return response.blob;
    })
    .then((data) => {
      bdata = data;
    })
    .catch((e) => {
      errormsg(
        "Error when attempting to fetch cached resturant information.",
        4000,
      );
    });
};
let postMsg = (url, data) => {};

let logout = () => {
  removeCookie("username");
  removeCookie("displayname");
  removeCookie("token");
  window.location.reload();
};

let renderProfileInfo = () => {
  let token = getCookie("token");
  if (token.length > 0) {
    let username = getCookie("username");
    let displayname = getCookie("displayname");

    if (!(username && displayname)) {
      logout();
      return;
    }

    postMsg("validate", { token: token })
      .then((val) => {
        if (val.valid == "false") {
          logout();
          return;
        }

        document.querySelector("#login").classList.add("hidden");
        document.querySelector("#profile").classList.remove("hidden");

        document.querySelectorAll(".profileletter").forEach((elm) => {
          elm.innerText = displayname.substring(0, 1);
          let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=[]{}|\\/?.>,<;:~`";
          let letterwrap =
            alph.indexOf(displayname.substring(0, 1).toUpperCase()) % 6;
          let letterup = "456789"[(letterwrap + 1) % 6];
          let letterdown = "987654"[(6 + letterwrap - 1) % 6];

          letterwrap = "964578"[letterwrap];
          let hex =
            letterdown +
            letterup +
            letterwrap +
            letterdown +
            letterup +
            letterwrap;

          elm.parentElement.style.background = "#" + hex;
        });
        document.querySelectorAll(".username").forEach((elm) => {
          elm.innerText = username;
          elm.placeholder = username;
        });
        document.querySelectorAll(".displayname").forEach((elm) => {
          elm.innerText = displayname;
          elm.placeholder = displayname;
        });
      })
      .catch((reason) => {
        logout();
      });
  } else {
    document.querySelector("#profile").classList.add("hidden");
    document.querySelector("#login").classList.remove("hidden");
  }
};

serverToRun.push(renderProfileInfo);

/*

		*/

fetch("https://solarify.cc/api/ping", {
  method: "POST",
  headers: {
    "Content-Type": "application/text",
  },
})
  .then((response) => {
    if (!response.ok) {
      errormsg(
        "Due to internal server errors, the website is now functioning at limited capability.",
        2000,
      );
      backupData();
      return Promise.reject(response);
    }
    return response;
  })
  .then(() => {
    postMsg = (url, data) => {
      return new Promise((resolve, reject) => {
        fetch("https://solarify.cc/api/" + url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data) || "{}",
        })
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            resolve(json);
          })
          .catch((reason) => {
            reject(reason);
          });
      });
    };

    serverOn = true;
    serverToRun.forEach((func) => {
      func();
    });
  })
  .catch((reason) => {
    console.error(reason);

    errormsg(
      "Due to internal server errors, the website is now functioning at limited capability.",
      2000,
    );
    backupData();
  });

document.querySelector("#LOGIN").addEventListener("click", () => {
  let usernameI = document.querySelector("#LOGINUN");
  let usernameH = document.querySelector("#LOGINUH");
  let passwordI = document.querySelector("#LOGINPW");
  let passwordH = document.querySelector("#LOGINPH");
  let loginH = document.querySelector("#LOGINERR>span");

  usernameH.classList.add("hidden");
  passwordH.classList.add("hidden");
  loginH.parentElement.classList.add("hidden");
  loginH.parentElement.classList.remove("flex");
  usernameI.parentElement.classList.remove("border-b-error");
  passwordI.parentElement.classList.remove("border-b-error");

  let username = usernameI.value;
  let password = passwordI.value;

  if (username == "") {
    usernameH.innerText = "Username is not empty";
    usernameH.classList.remove("hidden");
    usernameI.parentElement.classList.add("border-b-error");
    return;
  }

  if (password == "") {
    passwordH.innerText = "Password is not empty";
    passwordH.classList.remove("hidden");
    passwordI.parentElement.classList.add("border-b-error");
    return;
  }

  if (username.split(" ").length > 1) {
    usernameH.innerText = "Username does not contain spaces";
    usernameH.classList.remove("hidden");
    usernameI.parentElement.classList.add("border-b-error");
    return;
  }

  if (password.split(" ").length > 1) {
    passwordH.innerText = "Password does not contain spaces";
    passwordH.classList.remove("hidden");
    passwordI.parentElement.classList.add("border-b-error");
    return;
  }

  let hash = Array.from(password).reduce(
    (s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0,
    0,
  );

  postMsg("authenticate", {
    username: username,
    passwordHash: "" + hash,
  }).then((res) => {
    passwordI.value = "";

    if (res.error) {
      loginH.innerText = "ERROR: " + res.message;

      loginH.parentElement.classList.add("flex");
      loginH.parentElement.classList.remove("hidden");
      return;
    }

    addCookie("username", username);
    addCookie("displayname", res.name);
    addCookie("token", res.token);
    setTimeout(() => {
      window.location.reload();
    }, 50);
  });
});

document.querySelector("#REGISTER").addEventListener("click", () => {
  let usernameI = document.querySelector("#REGUN");
  let usernameH = document.querySelector("#REGUH");
  let nameI = document.querySelector("#REGN");
  let nameH = document.querySelector("#REGNH");
  let passwordI = document.querySelector("#REGPW");
  let passwordH = document.querySelector("#REGPH");
  let passwordAI = document.querySelector("#REGPWA");
  let passwordAH = document.querySelector("#REGPAH");
  let regH = document.querySelector("#REGISTERERR>span");

  usernameH.classList.add("hidden");
  nameH.classList.add("hidden");
  passwordH.classList.add("hidden");
  passwordAH.classList.add("hidden");
  regH.parentElement.classList.add("hidden");
  regH.parentElement.classList.remove("flex");
  usernameI.parentElement.classList.remove("border-b-error");
  nameI.parentElement.classList.remove("border-b-error");
  passwordAI.parentElement.classList.remove("border-b-error");
  passwordI.parentElement.classList.remove("border-b-error");

  let username = usernameI.value;
  let name = nameI.value;
  let password = passwordI.value;
  let passworda = passwordAI.value;

  if (username == "") {
    usernameH.innerText = "Username is not empty";
    usernameH.classList.remove("hidden");
    usernameI.parentElement.classList.add("border-b-error");
    return;
  }

  if (name == "") {
    nameH.innerText = "Name is not empty";
    nameH.classList.remove("hidden");
    nameI.parentElement.classList.add("border-b-error");
    return;
  }

  if (password == "") {
    passwordH.innerText = "Password is not empty";
    passwordH.classList.remove("hidden");
    passwordI.parentElement.classList.add("border-b-error");
    return;
  }

  if (username.split(" ").length > 1) {
    usernameH.innerText = "Username does not contain spaces";
    usernameH.classList.remove("hidden");
    usernameI.parentElement.classList.add("border-b-error");
    return;
  }

  if (password.split(" ").length > 1) {
    passwordH.innerText = "Password does not contain spaces";
    passwordH.classList.remove("hidden");
    passwordI.parentElement.classList.add("border-b-error");
    return;
  }

  if (password.length < 8) {
    passwordH.innerText = "Password must be 8 characters";
    passwordH.classList.remove("hidden");
    passwordI.parentElement.classList.add("border-b-error");
    return;
  }

  if (!/\d/.test(password)) {
    passwordH.innerText = "Password must contain a number";
    passwordH.classList.remove("hidden");
    passwordI.parentElement.classList.add("border-b-error");
    return;
  }

  if (!(/([A-Z])/.test(password) || /([a-z])/.test(password))) {
    passwordH.innerText = "Password must contain a character from a-Z";
    passwordH.classList.remove("hidden");
    passwordI.parentElement.classList.add("border-b-error");
    return;
  }

  if (password != passworda) {
    passwordAH.innerText = "Passwords do not match.";
    passwordAH.classList.remove("hidden");
    passwordAI.parentElement.classList.add("border-b-error");
    return;
  }

  let hash = Array.from(password).reduce(
    (s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0,
    0,
  );

  postMsg("register", {
    name: name,
    username: username,
    passwordHash: hash,
  }).then((res) => {
    passwordI.value = "";
    passwordAI.value = "";

    if (res.error) {
      regH.innerText = "ERROR: " + res.message;

      regH.parentElement.classList.add("flex");
      regH.parentElement.classList.remove("hidden");
      return;
    }

    addCookie("username", username);
    addCookie("displayname", name);
    addCookie("token", res.token);
    setTimeout(() => {
      window.location.reload();
    }, 50);
  });
});

document.querySelector("#CHANGEPW").addEventListener("click", () => {
  let oPasswordI = document.querySelector("#COP");
  let oPasswordH = document.querySelector("#COPH");
  let passwordI = document.querySelector("#CPW");
  let passwordH = document.querySelector("#CPWH");
  let passwordAI = document.querySelector("#CPWA");
  let passwordAH = document.querySelector("#CPWAH");
  let err = document.querySelector("#CHANGEPWERROR>span");

  oPasswordH.classList.add("hidden");
  passwordH.classList.add("hidden");
  passwordAH.classList.add("hidden");
  err.classList.add("hidden");
  err.parentElement.classList.remove("flex");
  oPasswordI.parentElement.classList.remove("border-b-error");
  passwordAI.parentElement.classList.remove("border-b-error");
  passwordI.parentElement.classList.remove("border-b-error");

  let oldPassword = oPasswordI.value;
  let password = passwordI.value;
  let passworda = passwordAI.value;

  if (oldPassword == "") {
    oPasswordH.innerText = "Old password is not empty";
    oPasswordH.classList.remove("hidden");
    oPasswordI.parentElement.classList.add("border-b-error");
    return;
  }

  if (password == "") {
    passwordH.innerText = "Password is not empty";
    passwordH.classList.remove("hidden");
    passwordI.parentElement.classList.add("border-b-error");
    return;
  }

  if (password.split(" ").length > 1) {
    passwordH.innerText = "Password does not contain spaces";
    passwordH.classList.remove("hidden");
    passwordI.parentElement.classList.add("border-b-error");
    return;
  }

  if (password.length < 8) {
    passwordH.innerText = "Password must be 8 characters";
    passwordH.classList.remove("hidden");
    passwordI.parentElement.classList.add("border-b-error");
    return;
  }

  if (!/\d/.test(password)) {
    passwordH.innerText = "Password must contain a number";
    passwordH.classList.remove("hidden");
    passwordI.parentElement.classList.add("border-b-error");
    return;
  }

  if (!(/([A-Z])/.test(password) || /([a-z])/.test(password))) {
    passwordH.innerText = "Password must contain a character from a-Z";
    passwordH.classList.remove("hidden");
    passwordI.parentElement.classList.add("border-b-error");
    return;
  }

  if (password != passworda) {
    passwordAH.innerText = "Passwords do not match.";
    passwordAH.classList.remove("hidden");
    passwordAI.parentElement.classList.add("border-b-error");
    return;
  }

  let ohash = Array.from(oldPassword).reduce(
    (s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0,
    0,
  );
  let nhash = Array.from(password).reduce(
    (s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0,
    0,
  );

  postMsg("changepw", {
    username: getCookie("username"),
    passwordHash: ohash,
    newPasswordHash: nhash,
  }).then((res) => {
    if (res.error) {
      err.innerText = "ERROR: " + res.message;

      err.parentElement.classList.add("flex");
      err.parentElement.classList.remove("hidden");
      return;
    }

    oPasswordI.value = "";
    passwordI.value = "";
    passwordAI.value = "";

    CHANGEMODAL.close();
  });
});

let delAccount = () => {
  let pwI = document.querySelector("#DELPWA");
  let pw = pwI.value;

  if (pw.length == 0) {
    DELETEACCOUNT.close();
    return;
  }

  let hash = Array.from(pw).reduce(
    (s, c) => (Math.imul(31, s) + c.charCodeAt(0)) | 0,
    0,
  );

  postMsg("deluser", {
    username: getCookie("username"),
    passwordHash: "" + hash,
  }).then((res) => {
    if (res.error) {
      errormsg("ERROR: " + res.message, 1500);

      pwI.value = "";
      DELETEACCOUNT.close();
      return;
    }

    logout();
  });
};

document.querySelector("#login").addEventListener("click", () => {
  LOGINMODAL.showModal();
});
