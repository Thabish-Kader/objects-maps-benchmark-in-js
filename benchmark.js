function generateObjectData(numItems) {
  let data = {};
  for (let i = 0; i < numItems; i++) {
    let key = `key${i}`;
    data[key] = Math.random();
  }
  return data;
}

function generateMapData(numItems) {
  let data = new Map();
  for (let i = 0; i < numItems; i++) {
    let key = `key${i}`;
    data.set(key, Math.random());
  }
  return data;
}

// Function to measure operation time on objects
function measureObjectOperation(operation, data) {
  const start = performance.now();
  operation(data);
  const end = performance.now();
  return end - start;
}

// Function to measure operation time on maps
function measureMapOperation(operation, data) {
  const start = performance.now();
  operation(data);
  const end = performance.now();
  return end - start;
}

// Example operations (insert, delete, update, read)
function insert(data) {
  data["newKey"] = Math.random();
}

function deleteKey(data) {
  if (data instanceof Map) {
    for (let key of data.keys()) {
      data.delete(key);
    }
  } else if (typeof data === "object") {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        delete data[key];
      }
    }
  } else {
    throw new Error("Unsupported data type. Must be Map or Object.");
  }
}

function update(data) {
  if (data instanceof Map) {
    const middleKey = Math.floor(data.size / 2);
    data.set(`key${middleKey}`, Math.random());
  } else if (typeof data === "object") {
    const middleKey = Math.floor(Object.keys(data).length / 2);
    data[`key${middleKey}`] = Math.random();
  } else {
    throw new Error("Unsupported data type. Must be Map or Object.");
  }
}

function read(data) {
  if (data instanceof Map) {
    const middleKey = Math.floor(data.size / 2);
    return data.get(`key${middleKey}`);
  } else if (typeof data === "object") {
    const middleKey = Math.floor(Object.keys(data).length / 2);
    return data[`key${middleKey}`];
  } else {
    throw new Error("Unsupported data type. Must be Map or Object.");
  }
}

const numItems = [100, 1000, 10000, 100000];
numItems.forEach((num) => {
  const objectData = generateObjectData(num);
  const mapData = generateMapData(num);

  const insertTimeObject = measureObjectOperation(insert, objectData);
  const insertTimeMap = measureMapOperation(insert, mapData);

  const deleteTimeObject = measureObjectOperation(deleteKey, objectData);
  const deleteTimeMap = measureMapOperation(deleteKey, mapData);

  const updateTimeObject = measureObjectOperation(update, objectData);
  const updateTimeMap = measureMapOperation(update, mapData);

  const readTimeObject = measureObjectOperation(read, objectData);
  const readTimeMap = measureMapOperation(read, mapData);

  console.log(`Number of items: ${num}`);

  console.log(`Read time (object): ${readTimeObject} ms`);
  console.log(`Read time (map): ${readTimeMap} ms`);

  console.log(`Insert time (object): ${insertTimeObject} ms`);
  console.log(`Insert time (map): ${insertTimeMap} ms`);

  console.log(`Delete time (object): ${deleteTimeObject} ms`);
  console.log(`Delete time (map): ${deleteTimeMap} ms`);

  console.log(`Update time (object): ${updateTimeObject} ms`);
  console.log(`Update time (map): ${updateTimeMap} ms`);

  console.log("--------------------------------------------");
});
