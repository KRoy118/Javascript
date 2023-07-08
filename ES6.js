class Model{
    constructor(){
    this.show="Hello World"
    //return "Hello";
    }
    past=() =>  this.show;//arrow funcn

}
class Model2 extends Model //inheritence
{
    constructor(show2)
    {
        super(show2);
        
       
    }
    present()
    {
        return this.past();
    }
}
const modelView =new Model2();

console.log(modelView.present());
