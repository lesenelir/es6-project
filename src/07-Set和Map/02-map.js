// Map类型是键值对的有序列表，键和值是任意类型

let map = new Map()
map.set('name','lesenelir')
map.set('age', 20)
console.log(map) // Map(2) { 'name' => 'lesenelir', 'age' => 20 }
console.log(map.get('name'))
console.log(map.has('age'))
map.delete('name')
console.log(map)
