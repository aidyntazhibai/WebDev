class Node {
  constructor(value, x, y, level) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.x = x; 
    this.y = y; 
    this.level = level; 
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.nodeWidth = 60; 
    this.gap = 160; 
  }

  insert(value) {
  
    if (this.root === null) {
      this.root = new Node(value, window.innerWidth / 2, this.nodeWidth, 0);
    } else {
    
      this.insertNode(this.root, value, window.innerWidth / 2, this.nodeWidth, 0);
    }
  }

  insertNode(node, value, x, y, level) {

    let gap = this.gap / Math.pow(2, level + 1);

    if (value < node.value) {
    
      if (node.left === null) {
        node.left = new Node(value, x - gap, y + this.nodeWidth * 2, level + 1);
      } else {
        this.insertNode(node.left, value, x - gap, y + this.nodeWidth * 2, level + 1);
      }
    } else {
 
      if (node.right === null) {
        node.right = new Node(value, x + gap, y + this.nodeWidth * 2, level + 1);
      } else {
        this.insertNode(node.right, value, x + gap, y + this.nodeWidth * 2, level + 1);
      }
    }
  }

  traverseInOrder(node, callback) {
    if (node !== null) {
      this.traverseInOrder(node.left, callback);
      callback(node);
      this.traverseInOrder(node.right, callback);
    }
  }
}

const bst = new BinarySearchTree();

function drawLine(x1, y1, x2, y2, container) {

  const line = document.createElement('div');
  line.className = 'line';
  line.style.left = `${x1}px`;
  line.style.top = `${y1}px`;
  const length = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  line.style.width = `${length}px`;
  line.style.transform = `rotate(${angle}deg)`;
  line.style.transformOrigin = '0 0';
  container.appendChild(line);
}

function buildTree() {
  bst.root = null; 
  const values = document.getElementById('bstValues').value.split(',').map(Number);
  values.forEach(value => {
    if (!isNaN(value)) {
      bst.insert(value);
    }
  });
  displayTree();
}

function displayTree() {
  const container = document.getElementById('treeContainer');
  container.innerHTML = ''; 

  function drawNode(node) {
    if (node.left) {
      drawLine(node.x, node.y, node.left.x, node.left.y, container);
    }
    if (node.right) {
      drawLine(node.x, node.y, node.right.x, node.right.y, container);
    }

    const nodeElement = document.createElement('div');
    nodeElement.className = 'node';
    nodeElement.textContent = node.value;
    nodeElement.style.left = `${node.x - bst.nodeWidth / 2}px`;
    nodeElement.style.top = `${node.y - bst.nodeWidth / 2}px`;
    container.appendChild(nodeElement);
  }

  bst.traverseInOrder(bst.root, drawNode);
}

