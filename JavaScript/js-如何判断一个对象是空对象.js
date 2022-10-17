let obj1 = {}
if(JSON.stringify(obj1) === "{}") {
    console.log("obj1是一个空对象")
}

let obj2 = {}
if(Object.keys(obj2).length === 0) {
    console.log("obj2是一个空对象")
}