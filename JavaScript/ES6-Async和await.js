async function fn() {
    console.log(1)
    console.log(2)
    // let result = await 3 
    // let result = await console.log(3)
    // let result = await Promise.resolve(3)
    // let result = await new Promise((resolve, reject)=>{
    //     resolve(3)
    // })
    try {
        let result = await Promise.reject(3)
        console.log(result)
    } catch (e) {
        console.log(e)
    }
    console.log(4)
}
fn()
console.log(5)