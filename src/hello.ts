function capitalize(word:string): string {
  return word.charAt(0).toLocaleUpperCase() + word.slice(1)
}

function hello(name:string): string {
  return 'Hello ' + capitalize(name)
}

console.log(hello('john'))
