class Product
{
    private name : string;
    private price: number;

    constructor(name :string, price : number)
    {
        this.name =name;
        this.price = price; 
    }

    print() 
    {
        console.log(this.name);
        console.log(this.price);
    }

    getNetPrice() : number {
        return this.price * 1.12;
    }
}

var obj = new Product("iPhone7 plus", 70000);
obj.print(); 
console.log(obj.getNetPrice());