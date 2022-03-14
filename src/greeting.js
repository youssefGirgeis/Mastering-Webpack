function sayHello() {
  let tool = 'webpack';
  alert(`Hello I am ${tool} 🎉🎉, welcome to ES6`);
  console.log('Can you find me?');
}

//commonJs
//module.exports = sayHello;

//ES6 modules
export { sayHello };
