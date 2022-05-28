// TDD - Test Driven Development
// we write our test first before our code..
// relative path
import { add, callFunc, minus, wordCount } from '../src/demo'

it('tests add',()=>{
   
    let sum1 = add(1,1)
    let sum2 = add(2,2)
    // 6, 123 arguments
    let sum3 = add(6,123)

    expect(sum1).toBe(2)
    expect(sum2).toBe(4)
    expect(sum3).toBe(129)
    //      2
    expect(add(2,3) - add(add(1,1),1)).toBe(2)

    // I am not calling this function
    // this is just variable that pointing to the function
    add 

    // here i actually call it
    add(1,1)
    expect(typeof add).toBe('function')
    expect(typeof add(1,1)).toBe('number')
    
    // mind bender BONUS ADV
    expect(callFunc(add)).toBe(2)
    expect(callFunc(minus)).toBe(0)
})

it('counts number of words in string',()=>{
    let str1 = 'Hello I am learning to count words'
    let str2 = 'Hello'
    let str3 = ''
    let str4 = 'yo yo'

    // 1 + 1
    expect(wordCount(str1)).toBe(7)
    expect(wordCount(str1)).toBe(7)
    expect(wordCount(str2)).toBe(1)
    expect(wordCount(str3)).toBe(0)
    expect(wordCount(str4)).toBe(2)
    // expect(wordCount(2)).toBe(-1)
})