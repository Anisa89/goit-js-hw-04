const findBestEmployee = function (employees) {
  const employeeValue = Object.values(employees); //29,35,1,99
  const employeeName = Object.keys(employees); //ann,david,helen,lorence
  const maxValue = Math.max(...employeeValue); //

  for (const name of employeeName) {
    if (employees[name] === maxValue) {
      return `${name}`;
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
