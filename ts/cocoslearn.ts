/**
 * 函数定义
 * function functionName（参数1：参数类型，可选参数2？：可选参数类型）：返回值类型{
 * }
 * 例如：
 */
function test1(str1:string,str2?:string){
    console.log(str1+str2);
}
test1("abc");
test1("abc","def");
/**
 * 函数定义二：
 * function functionName（参数1：参数类型，可选参数2=默认参数：可选参数类型）：返回值类型{
 * }
 * 
 */

function test2(str1:string,str2:string ="def"){
    console.log(str1+str2);
}
test2("abc");
test2("abc","def");

/**
 * 剩余参数--
 * function test3(...参数：参数类型数组):返回值类型{
    return 0;
}
 * 
 */
function test3(...num:number[]):number{
    for(const key in num){
        console.log("第",key,"个值为",num[key]);
    }
    return 0;
}
test3(1,3,4,5);


/**
 * 匿名函数 定义
 * let 参数名 =function(参数列表){
 * 
 * }
 * 
 * 调用
 * 参数名（参数列表值）
 * 
 */

let test4=function(num1:number,num2:number):number{
    console.log(num1+num2);
    return num1+num2;
}
test4(1,2);

/**
 * 2.Number
 * 2.1number类型取值范围
 * 
 */
console.log("MAx==",Number.MAX_VALUE);
console.log("Min==",Number.MIN_VALUE);

//2.2获取数值所对应的字符串
//typeof()
//toString()
let num =33;
console.log(typeof(num));
let str1=num.toString();
console.log(typeof(str1));
console.log(str1);


//3. String
//3.1 split方法
// split(参数1，num)  以参数1为切割线  分割成num个(参数1个数小于num值时，最多分为参数1个数个)
//返回值是一个数组
let str2="你 好 啊 ";
let str3=str2.split(" ",5);
console.log(str3);

//3.2 lenth属性(成员变量，非函数)
//获取字符串 字符数  
console.log(str2.length);

//3.3 链接字符串+


//3.4 截取字符串substring(start:number,end?:number) start从0开始，end不包含
let str4="0123456789";
console.log(str4.substring(2,4));

//4 数组
//4.1 多维数组
let numArr=[1,2,3];
let numArrTwo:number[][]=[[1,2,3],[4,5,6]];
console.log(numArrTwo[0][0]);
console.log(numArrTwo[1][2]);

//5 元组
//数组的数据类型都是相同的（any类型）
//元组时存储的数据类型和个数时限定的
let numArr1=[1,3,4]; //数组
let numArr2:any=[1,"333"]; //数组
let numArr3=[1,"333"];  //元组

//6 类与对象
class student{
    //类的成员变量
    id:number;
    name:string;
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }
    getName():string{
        return this.name;
    }
    getId():number{
        return this.id;
    }
    setName(str:string):void{
        this.name=str;
    }
    setId(id:number):void{
        this.id=id;
    }
}


let person =new student(1,"张三");
person.setId(3);
person.setName("Lin");
console.log(person.getId());
console.log(person.getName());


//继承方式 extends
class doc extends student{
    //super表示父类
    getName(): string {
        return super.getName();
    }
    //子类可以重写父类的函数
    getId():number {
        return  1;
    }
    //静态变量可以直接通过类名访问
    static major:string;
}

let p2=new doc(4,"KK");
console.log(p2.getId());
doc.major="IT";
console.log(doc.major);

