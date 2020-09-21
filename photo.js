class Photo{
    constructor(width = 8, height = 10){
        this.width = width;
        this.height = height;
    }

    getPrice(){
        if(this.width == 8 && this.height == 10){
            return 4;
        } else if (this.width == 10 && this.height == 12){
            return 6;    
        } else {
            return 10;
        }
    }

    toString(){
        return `This is a ${this.width} by ${this.height} photo and it costs ${this.getPrice()}`;
    }
}

let photo1 = new Photo();
let photo2 =  new Photo(10, 12);
let photo3 = new Photo(10, 20);

console.log(photo1.toString());
console.log(photo2.toString());
console.log(photo3.toString());