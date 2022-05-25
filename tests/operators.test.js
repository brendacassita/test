// basic test
// it('string here',()=>{
    //write tests
// }) 

// run only one test file
// yarn test operators.test.js 


it('testing operators', () => {
  // + add , - minus , * times, / divide
  expect(1 + 1).toBe(2)
  expect(1 - 1).toBe(0)
  expect(3 / 2).toBe(1.5) 
  expect(3 * 2).toBe(6) 

  // % modulus - gives remindar of division
  expect(3 % 2).toBe(1)
  expect(5 % 2).toBe(1)
  expect(2 % 2).toBe(0)
  expect(4 % 2).toBe(0)

  // ++ adds 1 -- minus
  let num = 0
  num++
  expect(num).toBe(1)

  num = num + 10
  expect(num).toBe(11)
  
  // add ten to number 
  num+= 10
  expect(num).toBe(21)
  // -= *= /=

  // logic operators
  //  && (AND) - || (OR) - ! (NOT) 0 1
  expect(true && true).toBe(true)
  expect(true && false).toBe(false)
 
  expect(true || false).toBe(true)
  
  expect( !false).toBe(true)

  expect(false && (true || false && !false || (true && true))).toBe(false)
  expect(true || (true || false && !false || (true && true))).toBe(true)


})