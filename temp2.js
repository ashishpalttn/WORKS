console.log("Start"); // 1️⃣

setTimeout(() => console.log("setTimeout"), 0); // 5️⃣ (Macrotask)

setImmediate(() => console.log("setImmediate")); // 6️⃣ (Macrotask)

process.nextTick(() => console.log("nextTick")); // 2️⃣ (Microtask)

queueMicrotask(() => console.log("queueMicrotask")); // 3️⃣ (Microtask)

Promise.resolve().then(() => console.log("Promise")); // 4️⃣ (Microtask)

console.log("End"); // 7️⃣