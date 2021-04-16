const getLength = (node) => {
  let count = 1;
  if (!node) return 0;

  while (node.getNextNode()) {
    count += 1;
    node = node.getNextNode();
  }

  return count;
};

module.exports = getLength;
