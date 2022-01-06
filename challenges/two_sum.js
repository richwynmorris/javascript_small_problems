
 var twoSum = function(nums, target) {
  let previousNumbers = {}
  
  for(let i = 0; i < nums.length; i++) {
      let val = (target - nums[i]).toString()
      if (Object.keys(previousNumbers).includes(val)) {
          return [previousNumbers[val], i]
      } else {
          previousNumbers[nums[i]] = i;
      }
  }
};