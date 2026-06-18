const filterBtn = document.querySelector(".filter-btn");
const filterMenu = document.querySelector(".filter-menu");
const settingsBtn = document.querySelector(".settings-btn");
const settingsMenu = document.querySelector(".settings-menu");
const modal = document.getElementById("taskModal");
const addBtn = document.querySelector(".add-column-btn");
const closeBtn = document.getElementById("closeModal");
const taskForm = document.getElementById("taskForm");
const darkModeBtn = document.getElementById("darkModeBtn");
const clearBtn = document.querySelector(".clear-all");

let editingTask = null;

// --- UI Toggle Functionality ---
filterBtn?.addEventListener("click", () => {
  filterMenu.classList.toggle("active");
  settingsMenu.classList.remove("active");
});

settingsBtn?.addEventListener("click", () => {
  settingsMenu.classList.toggle("active");
  filterMenu.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".filter-dropdown"))
    filterMenu?.classList.remove("active");
  if (!e.target.closest(".settings-dropdown"))
    settingsMenu?.classList.remove("active");
});

// --- Modal ---
if (addBtn && modal && closeBtn) {
  addBtn.addEventListener("click", () => {
    editingTask = null;
    taskForm.reset();
    modal.classList.add("active");
  });
  closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
}

// --- Dark Mode ---
darkModeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const icon = darkModeBtn.querySelector("i");
  if (document.body.classList.contains("dark")) {
    icon.classList.replace("ri-moon-line", "ri-sun-line");
  } else {
    icon.classList.replace("ri-sun-line", "ri-moon-line");
  }
});

// --- Task Submission ---
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("taskTitle").value;
  const category = document.getElementById("taskCategory").value;
  const status = document.getElementById("taskStatus").value;

  const columnMap = {
    todo: "#todo-column .tasks-container",
    progress: "#progress-column .tasks-container",
    completed: "#completed-column .tasks-container",
  };

  const targetColumn = document.querySelector(columnMap[status]);

  if (editingTask) {
    const taskId = editingTask.dataset.id;
    const allInstances = document.querySelectorAll(`[data-id="${taskId}"]`);

    allInstances.forEach((card) => {
      card.querySelector(".task-title").textContent = title;
      card.querySelector(".task-category").textContent = category;
      card.dataset.category = category;
      card.dataset.status = status;
    });

    const statusColumnCard = document.querySelector(
      `#todo-column [data-id="${taskId}"], #progress-column [data-id="${taskId}"], #completed-column [data-id="${taskId}"]`,
    );

    if (statusColumnCard) targetColumn.appendChild(statusColumnCard);
    editingTask = null;
  } else {
    const taskId = Date.now().toString();
    const createCard = () => {
      const card = document.createElement("div");
      card.classList.add("task-card");
      card.dataset.id = taskId;
      card.dataset.category = category;
      card.dataset.status = status;
      card.innerHTML = `
        <div class="card-header">
          <p class="task-title">${title}</p>
          <span class="task-category">${category}</span>
        </div>
        <div class="actions">
          <button class="edit-btn"><i class="ri-edit-line"></i></button>
          <button class="del-btn"><i class="ri-delete-bin-line"></i></button>
        </div>
      `;
      return card;
    };
    targetColumn.appendChild(createCard());
    document
      .querySelector("#total-column .tasks-container")
      .appendChild(createCard());
  }

  updateCounts();
  saveTasks(); // Persist changes
  taskForm.reset();
  modal.classList.remove("active");
});

// --- Delete ---
document.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".del-btn");
  if (!deleteBtn) return;
  if (confirm("Are you sure?")) {
    const cardId = deleteBtn.closest(".task-card").dataset.id;
    document
      .querySelectorAll(`[data-id="${cardId}"]`)
      .forEach((card) => card.remove());
    updateCounts();
    saveTasks(); // Persist changes
  }
});

// --- Edit Initiation ---
document.addEventListener("click", (e) => {
  const editBtn = e.target.closest(".edit-btn");
  if (!editBtn) return;

  const taskId = editBtn.closest(".task-card").dataset.id;
  const statusColumns = document.querySelectorAll(
    "#todo-column .task-card, #progress-column .task-card, #completed-column .task-card",
  );
  editingTask = [...statusColumns].find((card) => card.dataset.id === taskId);

  document.getElementById("taskTitle").value =
    editingTask.querySelector(".task-title").textContent;
  document.getElementById("taskCategory").value = editingTask.dataset.category;
  document.getElementById("taskStatus").value = editingTask.dataset.status;
  modal.classList.add("active");
});

// --- Storage Functions ---
function saveTasks() {
  const tasks = [];
  document
    .querySelectorAll(
      "#todo-column .task-card, #progress-column .task-card, #completed-column .task-card",
    )
    .forEach((card) => {
      tasks.push({
        id: card.dataset.id,
        title: card.querySelector(".task-title").textContent,
        category: card.dataset.category,
        status: card.dataset.status,
      });
    });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const columnMap = {
      todo: "#todo-column .tasks-container",
      progress: "#progress-column .tasks-container",
      completed: "#completed-column .tasks-container",
    };
    const targetColumn = document.querySelector(columnMap[task.status]);
    const createCard = () => {
      const card = document.createElement("div");
      card.classList.add("task-card");
      card.dataset.id = task.id;
      card.dataset.category = task.category;
      card.dataset.status = task.status;
      card.innerHTML = `
        <div class="card-header">
          <p class="task-title">${task.title}</p>
          <span class="task-category">${task.category}</span>
        </div>
        <div class="actions">
          <button class="edit-btn"><i class="ri-edit-line"></i></button>
          <button class="del-btn"><i class="ri-delete-bin-line"></i></button>
        </div>
      `;
      return card;
    };
    targetColumn.appendChild(createCard());
    document
      .querySelector("#total-column .tasks-container")
      .appendChild(createCard());
  });
  updateCounts();
}

// --- Helpers ---
function updateCounts() {
  const todo = document.querySelectorAll("#todo-column .task-card").length;
  const prog = document.querySelectorAll("#progress-column .task-card").length;
  const comp = document.querySelectorAll("#completed-column .task-card").length;
  document.getElementById("todo-count").textContent = todo;
  document.getElementById("progress-count").textContent = prog;
  document.getElementById("completed-count").textContent = comp;
  document.getElementById("total-count").textContent = todo + prog + comp;
}

document.querySelectorAll(".filter-menu p").forEach((item) => {
  item.addEventListener("click", () => {
    const selected = item.dataset.filter;
    document.querySelectorAll(".task-card").forEach((card) => {
      card.style.display =
        selected === "all" || card.dataset.category === selected ? "" : "none";
    });
    filterMenu.classList.remove("active");
  });
});

clearBtn?.addEventListener("click", () => {
  if (!confirm("Delete all tasks?")) return;
  localStorage.removeItem("tasks");
  document.querySelectorAll(".task-card").forEach((card) => card.remove());
  updateCounts();
});

// Load data on startup
loadTasks();

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  document.querySelectorAll(".task-card").forEach((card) => {
    const title = card.querySelector(".task-title").textContent.toLowerCase();

    const category = card.dataset.category.toLowerCase();

    const matched =
      title.includes(searchValue) || category.includes(searchValue);

    card.style.display = matched ? "block" : "none";
  });
});
