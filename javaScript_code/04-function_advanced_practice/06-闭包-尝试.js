function f() {
  let value = Math.random();

  return function() { console.log(value) };
}

// 数组中的 3 个函数，每个都与来自对应的 f() 的词法环境相关联
let arr = [f(), f(), f()];

arr[0]()
arr[1]()
arr[2]()
