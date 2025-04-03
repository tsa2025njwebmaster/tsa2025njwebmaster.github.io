let currentReserveDate = undefined;
let allReservations = [];

let startTime, endTime;

let times = document.querySelector("#times");
let ctimeE = null;
let filledHours = [];

document.querySelector("#reservebtn").addEventListener("click", () => {
  let startText = document.querySelector("#hourinfo").innerText;
  let start = parseInt(startText.split(" ")[0]);
  start += startText.split(" ")[1] == "PM" && start != 12 ? 12 : 0;
  let end = start + parseInt(document.querySelector("#hoursvalue").value) - 1;

  let startDate = new Date(currentReserveDate);
  startDate.setHours(start, 0, 0);
  let endDate = new Date(currentReserveDate);
  endDate.setHours(end, 59, 59);

  postMsg("reserve", {
    token: getCookie("token"),
    reservation: [startDate.getTime(), endDate.getTime()],
  }).then((res) => {
    if (res.error == true) {
      errormsg("Failed to reserve slot. Try again later.", 2000);
    } else {
      RESERVEMODAL.close();
      successmsg("Reserved slot!", 2000);
      reserveLoad();
    }
  });
});

document.querySelector("#hoursvalue").addEventListener("input", () => {
  let value = parseInt(document.querySelector("#hoursvalue").value);
  let hourText = document.querySelector("#hourinfo").innerText;
  let hour = parseInt(hourText.split(" ")[0]);
  hour += hourText.split(" ")[1] == "PM" && hour != 12 ? 12 : 0;
  let err = document.querySelector("#hourserr");
  err.classList.add("hidden");
  document.querySelector("#reservebtn").removeAttribute("disabled");

  let min = Math.min(3, endTime - hour);
  min = min > 1 ? min : 1;
  if (isNaN(value) || value < 1 || value > min) {
    err.classList.remove("hidden");
    err.innerText =
      "Choose a valid number of hours " +
      (min > 1 ? "(1 to " + min + ")." : "(You can only reserve 1 hour).");
    document.querySelector("#reservebtn").setAttribute("disabled", "");
    return;
  }

  for (let i = hour; i <= hour + value - 1; i++) {
    if (filledHours.includes(i)) {
      err.classList.remove("hidden");
      err.innerText =
        "The time " +
        (((i - 1) % 12) + 1) +
        " " +
        (i >= 12 ? "PM" : "AM") +
        " is already reserved.";
      document.querySelector("#reservebtn").setAttribute("disabled", "");
      return;
    }
  }

  document.querySelector("#hourinfo").innerText =
    ((hour - 1) % 12) +
    1 +
    " " +
    (hour >= 12 ? "PM" : "AM") +
    " - " +
    (((hour + value - 2) % 12) + 1) +
    (hour + value - 1 >= 12 ? ":59 PM" : ":59 AM");
  document.querySelector("#hcost").innerText = "$" + value * 4;
});

document.querySelector("#timeright").addEventListener("click", () => {
  if (ctimeE == null) {
    ctimeE = times.querySelector("button");
  }
  document.querySelector("#timeright").removeAttribute("disabled");
  document.querySelector("#timeleft").removeAttribute("disabled");
  if (times.scrollLeft + times.clientWidth + 10 >= times.scrollWidth) {
    document.querySelector("#timeright").setAttribute("disabled", "");
    return;
  }
  times.scrollTo({
    left: times.scrollLeft + ctimeE.getBoundingClientRect().width,
    behavior: "smooth",
  });
  ctimeE = ctimeE.nextElementSibling;
});

document.querySelector("#timeleft").addEventListener("click", () => {
  if (ctimeE == null) {
    ctimeE = times.querySelector("button");
  }
  document.querySelector("#timeright").removeAttribute("disabled");
  document.querySelector("#timeleft").removeAttribute("disabled");
  if (times.scrollLeft <= 0) {
    document.querySelector("#timeleft").setAttribute("disabled", "");
    return;
  }
  times.scrollTo({
    left: times.scrollLeft - ctimeE.getBoundingClientRect().width,
    behavior: "smooth",
  });
  ctimeE = ctimeE.previousElementSibling;
});

let updateTimes = () => {
  let day = currentReserveDate.getDay();

  startTime = 9;
  endTime = 18;

  if (day == 0) {
    startTime = 11;
  }

  if (day >= 5 && day <= 6) {
    endTime = 20;
  }

  let times = document.querySelector("#times");

  times.replaceChildren();
  times.scrollTo({ left: 0, behavior: "smooth" });
  times.parentElement.querySelector("#timeleft").setAttribute("disabled", "");
  times.parentElement.querySelector("#timeright").removeAttribute("disabled");

  filledHours = [];

  if (
    allReservations[
      currentReserveDate.getMonth() +
        "/" +
        currentReserveDate.getDate() +
        "/" +
        currentReserveDate.getFullYear()
    ]
  ) {
    filledHours =
      allReservations[
        currentReserveDate.getMonth() +
          "/" +
          currentReserveDate.getDate() +
          "/" +
          currentReserveDate.getFullYear()
      ];
  }

  for (let i = startTime; i <= endTime; i++) {
    let ntime = document.createElement("button");
    ntime.classList.add("btn", "btn-ghost");
    ntime.innerText = ((i - 1) % 12) + 1 + (i >= 12 && i != 24 ? " PM" : " AM");
    times.appendChild(ntime);

    if (filledHours.includes(i)) {
      ntime.setAttribute("disabled", "");
      continue;
    }

    ntime.addEventListener("click", () => {
      times.querySelectorAll("button").forEach((elm) => {
        elm.classList.remove("bg-black/20");
      });
      ntime.classList.add("bg-black/20");
      document.querySelector("#reservetemp").classList.add("hidden");
      document.querySelector("#reserveinfo").classList.remove("hidden");
      document.querySelector("#reserveinfo").classList.add("grid");
      document.querySelector("#hourinfo").innerText =
        ntime.innerText +
        " - " +
        ntime.innerText.substring(0, ntime.innerText.length - 3) +
        ":59" +
        ntime.innerText.substring(ntime.innerText.length - 3);

      document.querySelector("#hourserr").classList.add("hidden");
      document.querySelector("#hoursvalue").value = 1;
      document.querySelector("#hcost").innerText = "$4";
      document.querySelector("#reservebtn").removeAttribute("disabled");
    });
  }
};

let updateDays = (month) => {
  let lastMonth = new Date(new Date().getFullYear(), month, 0).getDate();
  let days = new Date(new Date().getFullYear(), month + 1, 0).getDate();
  let currDay = undefined;
  let col = 1;
  let firstDay = new Date(new Date().getFullYear(), month, 1)
    .toLocaleString("en-us", { weekday: "long" })
    .substring(0, 2);

  document.querySelectorAll("#months>.day").forEach((elm) => {
    elm.remove();
  });

  document.querySelectorAll("#months>span").forEach((dayc) => {
    if (dayc.innerText.toLowerCase() == firstDay.toLowerCase()) {
      col = parseInt(
        dayc.classList[0].split("-")[dayc.classList[0].split("-").length - 1],
      );
    }
  });

  for (let i = 1; i < col; i++) {
    let day = document.createElement("span");
    day.classList.add(
      "col-start-" + col - (i - 1),
      "text-neutral-200",
      "day",
      "content-center",
    );
    day.innerText = lastMonth - i;

    document.querySelector("#months").appendChild(day);
  }

  for (let i = 0; i < days; i++) {
    let day = document.createElement("span");
    day.classList.add(
      "col-start-" + col - (i - 1),
      "day",
      "content-center",
      "rounded-md",
    );

    if (
      month > new Date().getMonth() ||
      (month == new Date().getMonth() && i + 1 >= new Date().getDate())
    ) {
      day.classList.add("font-bold", "hover:bg-black/20");

      day.addEventListener("click", () => {
        if (currDay) {
          currDay.classList.remove("bg-black");
          currDay.classList.remove("text-white");
          currDay.classList.add("hover:bg-black/20");
        }

        day.classList.add("bg-black");
        day.classList.add("text-white");
        day.classList.remove("hover:bg-black/20");
        currDay = day;
        document.querySelector("#RESERVEDATE").innerText =
          month + 1 + "/" + (i + 1) + "/" + new Date().getFullYear();
        currentReserveDate = new Date(new Date().getFullYear(), month, i + 1);
        updateTimes();

        document.querySelector("#calendarbtn").click();
        document.querySelector("#reservetemp").classList.remove("hidden");
        document.querySelector("#reserveinfo").classList.add("hidden");
        document.querySelector("#reserveinfo").classList.remove("grid");
      });
    } else {
      day.classList.add("text-neutral-700");
    }

    day.innerText = i + 1;

    if (month == currentReserveDate.getMonth()) {
      if (i + 1 == currentReserveDate.getDate()) {
        day.classList.add("bg-black");
        day.classList.add("text-white");
        day.classList.remove("hover:bg-black/20");
        currDay = day;
      }
    }

    document.querySelector("#months").appendChild(day);

    col++;
    col = ((col - 1) % 7) + 1;
  }

  for (let i = col + 1; i <= 8; i++) {
    let day = document.createElement("span");
    day.classList.add(
      "col-start-" + col - i,
      "text-neutral-200",
      "day",
      "content-center",
    );
    day.innerText = i - (col + 1) + 1;

    document.querySelector("#months").appendChild(day);
  }
};

let lDate = () => {
  let month =
    parseInt(document.querySelector("#currentmonth").getAttribute("month")) - 1;

  document.querySelector("#ldate").removeAttribute("disabled");
  document.querySelector("#rdate").removeAttribute("disabled");
  if (month == 0) document.querySelector("#ldate").setAttribute("disabled", "");
  if (month == 11)
    document.querySelector("#rdate").setAttribute("disabled", "");

  let mName = new Date(0, month).toLocaleString("en-us", { month: "short" });

  document.querySelector("#currentmonth").innerText = mName;
  document.querySelector("#currentmonth").setAttribute("month", month);

  updateDays(month);
};

let setDate = (date) => {
  currentReserveDate = date;
  document.querySelector("#RESERVEDATE").innerText =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
  month = date.getMonth();
  updateTimes();

  document.querySelector("#ldate").removeAttribute("disabled");
  document.querySelector("#rdate").removeAttribute("disabled");
  if (month == 0) document.querySelector("#ldate").setAttribute("disabled", "");
  if (month == 11)
    document.querySelector("#rdate").setAttribute("disabled", "");

  let mName = new Date(0, month).toLocaleString("en-us", { month: "short" });

  document.querySelector("#currentmonth").innerText = mName;
  document.querySelector("#currentmonth").setAttribute("month", month);

  updateDays(month);
};

let rDate = () => {
  let month =
    parseInt(document.querySelector("#currentmonth").getAttribute("month")) + 1;

  document.querySelector("#ldate").removeAttribute("disabled");
  document.querySelector("#rdate").removeAttribute("disabled");
  if (month == 0) document.querySelector("#ldate").setAttribute("disabled", "");
  if (month == 11)
    document.querySelector("#rdate").setAttribute("disabled", "");

  let mName = new Date(0, month).toLocaleString("en-us", { month: "short" });

  document.querySelector("#currentmonth").innerText = mName;
  document.querySelector("#currentmonth").setAttribute("month", month);

  updateDays(month);
};

let reserveLoad = () => {
  document.querySelector("#RESERVEERR").classList.add("hidden");

  if (!getCookie("token")) {
    document.querySelector("#RESERVEERR").querySelector("span").innerText =
      "You must be logged in to use this feature.";
    document.querySelector("#RESERVEERR").classList.remove("hidden");
    return;
  }

  document.querySelector("#addreservation").classList.remove("hidden");

  let loadPage = (globRes, myRes) => {
    allReservations = {};

    globRes.forEach((reservation) => {
      let startDate = new Date(reservation[0]);
      let endDate = new Date(reservation[1]);
      let key =
        startDate.getMonth() +
        "/" +
        startDate.getDate() +
        "/" +
        startDate.getFullYear();
      if (!allReservations[key]) {
        allReservations[key] = [];
      }

      for (let i = startDate.getHours(); i <= endDate.getHours(); i++) {
        allReservations[key].push(i);
      }
    });

    document
      .querySelector(".focused-page")
      .querySelectorAll(".reservation")
      .forEach((elm) => {
        elm.remove();
      });

    let currDel = null;

    myRes.forEach((reservation) => {
      let startDate = new Date(reservation[0]);
      let endDate = new Date(reservation[1]);

      let parent = document.createElement("div");
      parent.classList.add(
        "bg-base-100",
        "border-base-200",
        "col-span-30",
        "col-start-2",
        "grid",
        "h-25",
        "grid-cols-16",
        "grid-rows-4",
        "gap-x-1",
        "rounded-md",
        "border-2",
        "p-5",
        "shadow-md",
        "reservation",
      );
      document.querySelector(".focused-page").appendChild(parent);

      let time = document.createElement("h1");
      time.classList.add(
        "col-span-15",
        "col-start-1",
        "row-span-2",
        "row-start-1",
        "lg:text-xl",
        "font-bold",
        "max-lg:col-span-13",
      );
      time.innerHTML = `${startDate.toLocaleString("en-US", { hour: "numeric", hour12: true, minute: "2-digit" })} - ${endDate.toLocaleString("en-US", { hour: "numeric", hour12: true, minute: "2-digit" })} <span class="ml-5 text-xs italic">$${(endDate.getHours() - startDate.getHours() + 1) * 4}</span>`;
      parent.appendChild(time);

      let date = document.createElement("span");
      date.classList.add(
        "col-span-6",
        "col-start-1",
        "row-start-4",
        "text-sm",
        "italic",
        "max-lg:col-span-10",
      );
      date.innerHTML = `${startDate.getMonth() + 1 + "/" + startDate.getDate() + "/" + startDate.getFullYear()}`;
      parent.appendChild(date);

      let actions = document.createElement("div");
      actions.classList.add(
        "col-span-1",
        "col-start-16",
        "row-span-4",
        "grid",
        "grid-cols-2",
        "items-center",
        "justify-items-center",
        "max-lg:col-span-2",
        "max-lg:col-start-15",
        "max-md:col-span-3",
        "max-md:col-start-14",
      );
      parent.appendChild(actions);

      let deleteButton = document.createElement("div");
      deleteButton.classList.add(
        "btn",
        "btn-error",
        "col-start-2",
        "aspect-square",
        "!h-auto",
        "w-4/5",
        "rounded-full",
      );
      deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
      actions.appendChild(deleteButton);

      deleteButton.addEventListener("click", () => {
        currDel = reservation;
        DELETERESERVATION.showModal();
      });
    });

    document
      .querySelector("#delres")
      .parentNode.replaceChild(
        document.querySelector("#delres").cloneNode(true),
        document.querySelector("#delres"),
      );

    document.querySelector("#delres").addEventListener("click", () => {
      DELETERESERVATION.close();

      postMsg("clearreserv", {
        token: getCookie("token"),
        reservation: currDel,
      }).then((res) => {
        if (res.error == false) {
          successmsg(res.message, 2000);
        } else {
          errormsg(res.message, 2000);
        }
        reserveLoad();
      });
    });

    document.querySelectorAll(".loading-reservation").forEach((elm) => {
      elm.remove();
    });

    setDate(new Date());
  };

  postMsg("reservations", {}).then((data) => {
    if (data.error) {
      errormsg("Error attempting to fetch all reservations.", 2000);
      return;
    }

    if (getCookie("token")) {
      postMsg("localreservations", {
        token: getCookie("token"),
      }).then((myRes) => {
        if (myRes.error) {
          errormsg(myRes.message, 2000);
          return;
        }

        loadPage(data.reservations, myRes.reservations);
      });
    } else {
      loadPage(data.reservations.reservations, undefined);
    }
  });
};

if (serverOn == true) {
  reserveLoad();
} else {
  serverToRun.push(reserveLoad);
}
