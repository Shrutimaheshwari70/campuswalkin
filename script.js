function displayUniversities(data) {
  const container = document.getElementById("universityContainer");
  container.innerHTML = "";

  data.forEach((uni) => {
    container.innerHTML += `
      <div class="card">
        <h2>${uni.name}</h2>
        <p>${uni.state}</p>
        <p>${uni.courses.join(", ")}</p>
      </div>
    `;
  });
}
let universities = [];

// FETCH DATA FROM JSON
fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    universities = data;
    displayUniversities(universities);
  });
s;
function filterState() {
  const selected = document.getElementById("stateFilter").value;

  const filtered =
    selected === "all"
      ? universities
      : universities.filter((u) => u.state === selected);

  displayUniversities(filtered);
}
