const ONEINCH: number = 2.54; 

const inches = document.getElementById('inches') as HTMLInputElement;
const centim = document.getElementById('centim') as HTMLInputElement;

inches.addEventListener('input', function(e) {
    console.log(this.value)
    

})