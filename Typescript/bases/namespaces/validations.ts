namespace Validations{
    export const validateText = (text:String):boolean =>{
        return (text.length > 3) ? true:false;
    }
    export const validateDate = (myDate:Date):boolean =>{
        return (isNaN(myDate.valueOf())) ? false:true;
    }
}

console.log(Validations.validateText("dan"));
