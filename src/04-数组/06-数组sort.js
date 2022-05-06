var users = [
  {name: 'freddy', age: 24, score: 100},
  {name: 'nick', age: 18, score: 90},
  {name: 'mike', age: 26, score: 80},
  {name: 'james', age: 34, score: 90},
  {name: 'curry', age: 30, score: 80},
  {name: 'lee', age: 30, score: 83}
]

// 需求： 按照score的大小从大到小排序，如果score相同，以age从小到大排序

users.sort((a, b) => {
  if (a.score !== b.score) {
    return b.score - a.score
  } else {
    return a.age - b.age
  }
})

console.log(users)

