let container = document.getElementById("container");

async function namozVaqtlari() {
  try {
    let response = await fetch(
      "https://api.aladhan.com/v1/timingsByCity/04-11-2026?city=Tashkent&country=Uzbekistan&method=3"
    );
    let data = await response.json();
    console.log(data);
    showTimes(data.data.timings);
  } catch (err) {
    console.log(err);
  }
}
namozVaqtlari();
function showTimes(namozAPI) {
  container.innerHTML = "";
  container.innerHTML = `
    <div class="card">
      <h2 class="time">${namozAPI.Fajr}</h2>
      <h3 class="name">Bomdod</h3>
    </div>

    <div class="card">
      <h2 class="time">${namozAPI.Dhuhr}</h2>
      <h3 class="name">Peshin</h3>
    </div>

    <div class="card">
      <h2 class="time">${namozAPI.Asr}</h2>
      <h3 class="name">Asr</h3>
    </div>

    <div class="card">
      <h2 class="time">${namozAPI.Maghrib}</h2>
      <h3 class="name">Shom</h3>
    </div>

    <div class="card">
      <h2 class="time">${namozAPI.Isha}</h2>
      <h3 class="name">Xufton</h3>
    </div>
  `;
}