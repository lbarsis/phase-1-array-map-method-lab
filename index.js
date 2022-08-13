let tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let arr = []
  for (let tutorial of tutorials) {
    let tut =  tutorial.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
    arr.push(tut.join(' '))
  }
  tutorials = [...arr]

  return tutorials
}

titleCased()
