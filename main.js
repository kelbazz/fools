const div = document.querySelector("#time-left");
const goal = new Date(`May 31, ${new Date().getFullYear()}`).getTime();

setInterval(() => {
  const timeleft = goal - Date.now();

  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  div.innerHTML =
    timeleft >= 0 ? `${days}j ${hours}:${minutes}:${seconds}` : "Déja fini !";
}, 0);
