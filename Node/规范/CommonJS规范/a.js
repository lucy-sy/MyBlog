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

module.exports = {
    a: a,
    update: update,
    stu: stu
}