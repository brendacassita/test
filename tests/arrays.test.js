it("describes array", () => {
  let nums = [10, 20, 30];

  // grab an item
  expect(nums[0]).toBe(10);
  expect(nums[3]).toBe(undefined);

  // add something to front of the array
  nums.unshift(99);
  expect(nums[0]).toBe(99);

  // removes something from the front array
  let x = nums.shift();
  expect(x).toBe(99);
  expect(nums[0]).toBe(10);

  // push pop add remove to start
});