const profiles = {
  profiles: [
    {
      name: "佐藤",
      age: 22
    },
    {
      name: "鈴木",
      age: 34
    },
    {
      name: "高橋",
      age: 42
    },
    {
      name: "田中",
      age: 15
    }
  ]
}

profiles.profiles.forEach(function(prof) {
  console.log(prof.name + ":" + String(prof.age))
 })