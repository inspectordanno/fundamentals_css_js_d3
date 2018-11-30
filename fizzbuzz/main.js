// looping through 100 times
// if i divisible by 3, console.log('fizz')
// if i divisible by 5, console.log('buzz')
// if i divisible by 15, console.log('fizzbuzz')

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log('fizzbuzz')
  } else if (i % 5 === 0) {
      console.log('buzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    }
}




