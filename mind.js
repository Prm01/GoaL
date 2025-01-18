let mindMapData = {
  "meta": {
    "name": "mindmap",
    "author": "user",
    "version": "0.1"
  },
  "format": "node_tree",
  "data": {
    "id": "root",
    "topic": "Start Here", // Default root node topic
    "children": [] // No children initially
  }
};

let jm;
let nodeCounter = 1; // Counter for generating unique node IDs

// Start Mind Map
document.getElementById("startMindMap").addEventListener("click", function () {
  document.getElementById("mindMapContainer").style.display = "block";
  if (!jm) {
    jm = new jsMind({
      container: 'mindMapCanvas',
      theme: 'primary',
      editable: true
    });
    jm.show(mindMapData); // Initialize the mind map
  }
});

// Add Node
document.getElementById("addNode").addEventListener("click", function () {
  const selectedNode = jm.get_selected_node();
  if (!selectedNode) {
    alert("Please select a node to add a child node.");
    return;
  }

  const newNodeId = `node${nodeCounter++}`;
  const newNodeTopic = `Node ${nodeCounter - 1}`;
  
  // Create the new node object
  const newNode = {
    id: newNodeId,
    topic: newNodeTopic,
    children: [] // New node doesn't have children initially
  };

  jm.add_node(selectedNode, newNode); // Add the new child node to the selected node
  jm.refresh(); // Refresh the mind map layout after adding a node
});

// Delete Node
document.getElementById("deleteNode").addEventListener("click", function () {
  const selectedNode = jm.get_selected_node();
  if (!selectedNode) {
    alert("Please select a node to delete.");
    return;
  }
  if (selectedNode.id === "root") {
    alert("Cannot delete the root node.");
    return;
  }

  jm.remove_node(selectedNode.id); // Remove the selected node
  jm.refresh(); // Refresh the mind map layout after deleting a node
});

// Edit Node
document.getElementById("editNode").addEventListener("click", function () {
  const selectedNode = jm.get_selected_node();
  if (!selectedNode) {
    alert("Please select a node to edit.");
    return;
  }

  const newTopic = prompt("Enter the new topic for this node:", selectedNode.topic);
  if (newTopic) {
    const updatedNode = {
      id: selectedNode.id,
      topic: newTopic
    };
    jm.update_node(updatedNode); // Update the node's topic
    jm.refresh(); // Refresh the mind map layout after updating a node
  }
});
