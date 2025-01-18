// Function to create a goal list item
function createGoalListItem(goal, goalPurpose) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<strong>Goal:</strong> ${goal}<br>
  <strong>Purpose:</strong> ${goalPurpose}
  <div class="button-group">
      <button class="editButton">Edit</button>
      <button class="deleteButton">Delete</button>
    </div>`;
  
  // Add event listeners for edit and delete
  addEditFunctionality(listItem, goal, goalPurpose);
  addDeleteFunctionality(listItem);

  return listItem;
}

// Function to handle editing of a goal
function addEditFunctionality(listItem, goal, goalPurpose) {
  const editButton = listItem.querySelector(".editButton");
  editButton.addEventListener("click", function () {
    document.getElementById("goal").value = goal;
    document.getElementById("goalPurpose").value = goalPurpose;
    listItem.remove(); // Remove the goal from the list after editing
  });
}

// Function to handle deletion of a goal
function addDeleteFunctionality(listItem) {
  const deleteButton = listItem.querySelector(".deleteButton");
  deleteButton.addEventListener("click", function () {
    listItem.remove(); // Remove the goal from the list
  });
}

// Function to handle adding a new goal
function handleAddGoal() {
  const goal = document.getElementById("goal").value.trim();
  const goalPurpose = document.getElementById("goalPurpose").value.trim();

  if (goal && goalPurpose) {
    const goalsList = document.getElementById("goalsList");
    const listItem = createGoalListItem(goal, goalPurpose);
    goalsList.appendChild(listItem);

    // Clear the text areas
    document.getElementById("goal").value = "";
    document.getElementById("goalPurpose").value = "";
  } else {
    alert("Please fill in both the Goal and Goal Purpose.");
  }
}

// Attach event listener to the Add Goal button
document.getElementById("addGoalButton").addEventListener("click", handleAddGoal);



