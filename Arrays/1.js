function addSubtract(nums){
    let sum1=0; let sum2=0;
    for( let i=0; i<nums.length; i++){
        sum1+=nums[i];
        if(nums[i]%2==0) nums[i]=nums[i]+i;
        else nums[i]=nums[i]-i;
        sum2+=nums[i];
    }
    console.log(nums);
    console.log(sum1);
    console.log(sum2);
}