function sums(arr){
    let Lsum;
    let Rsum;
    let num;
    let result=false;
    for (let i=0; i<arr.length; i++){
        Lsum=Rsum=0;
        let cur=arr[i];
        if(i==0){Lsum=0;}
        if(i==arr.length-1){Rsum=0;}
        if(i!=0 || i!=arr.length-1){
            for(let l=i-1; l>=0; l--){
              let Lnum=arr[l];
              Lsum+=Lnum;
          }
            for(let r=i+1; r<arr.length;r++){
              let Rnum=arr[r];
              Rsum+=Rnum;
            }
        }
        if(Lsum==Rsum){result=true; num=i;}
    }
    if(result)console.log(num);
    else console.log("no");
}
sums([1,2,3,3])

