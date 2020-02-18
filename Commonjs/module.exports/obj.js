// 通过 module.exports 来导出一个对象
const name = "xiaoming"
const getName = (params) => {
    return name;
}

module.exports = {
    name,
    getName
}
