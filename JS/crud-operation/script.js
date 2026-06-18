const form = document.querySelector("form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#email");
const users = document.querySelector(".users");
const image = document.querySelector("#url");

let userData = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    dob: "1995-03-15",
  },
  {
    id: 2,
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    dob: "1998-07-22",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    dob: "1992-11-08",
  },
  {
    id: 4,
    name: "Sophia Davis",
    email: "sophia.davis@example.com",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    dob: "2000-01-30",
  },
  {
    id: 5,
    name: "James Wilson",
    email: "james.wilson@example.com",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    dob: "1997-09-12",
  },
];

let editIndex = null;

const ui = () => {
  users.innerHTML = "";
  userData.forEach((elem, index) => {
    users.innerHTML += `<div class="user-card">
          <img
            src="${elem.image}"
            alt="user"
          />
          <div class="text">
            <h3>Name - ${elem.name}</h3>
            <p>Email - ${elem.email}</p>
          </div>

          <div class="action">
          <button onclick="editCard(${index})">Edit</button>
            <button id="del" onclick={deleteCard(${index})}>Delete</button>
          </div>
        </div>`;
  });
};

ui();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = inp1.value;
  let email = inp2.value;
  let image = url.value;

  if (!name.trim() || !email.trim() || !image.trim()) return;

  if (editIndex === null) {
    // Add User
    userData.push({
      id: Date.now(),
      name,
      email,
      image,
    });
  } else {
    // Update User
    userData[editIndex].name = name;
    userData[editIndex].email = email;
    userData[editIndex].image = image;

    editIndex = null;
  }

  ui();
  form.reset();
});

let deleteCard = (index) => {
  userData.splice(index, 1);
  ui();
};

function editCard(index) {
  editIndex = index;

  inp1.value = userData[index].name;
  inp2.value = userData[index].email;
  image.value = userData[index].image;
}
