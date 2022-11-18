let a = 10
function update() {
    ++a
    ++stu.age
    return {
        a,
        stu
    }
}
let stu = {
    name: '李华',
    age: 20
}

export default {
    a,
    update,
    stu
}