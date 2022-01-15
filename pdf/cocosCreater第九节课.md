cocosCreater第九节课

1、BolokInputEvents

代码： this.node.addComponent(cc.BlockInputEvents);

组件：ui组件 --> Block Input Events

2、typescript模块（引入、导出）

引入：

```typescript
//导入类
import ClassName form  FilePath
//导入模块
import ModelName  form FilePath 
//将argName作为参数名，将文件中所有的数据打包导入
import  * as  argName  form  FilePath   
//若argName中有函数fun1（）， 则调用语句为   
argName.fun1();
//导入enum，数组等变量数据
import {argName1，argName2}  form FilePath
```

导出：

```typescript
//默认导出 export default
//导出类
export default class ClassName extends cc.Component{}

//普通到处 export
//导出数组
export let arrName={data}
//导出枚举
export enum argName={}
```

3、箭头函数

```typescript
//定义函数 给 变量赋值
let func1=function(){}
//调用
func1();
//定义一个函数
function func2(){}
//调用
func2()

//箭头函数定义
let func3=()=>{};
fun3();

//函数体只有一行
let func4=()=>3+1;

```

4、cocosCreater断点

cocosCreater=>开发者=>VS Code工作流=>安装Vs Code扩展插件

Vscode=> 扩展=>搜索Debug for Chrome =>安装 

cocosCreater=>开发者=>VS Code工作流=>添加Chrom Debug配置

重启vscode=>debug  选择运行Creater Debug ：launch Chrome

5、mvc架构

model  view  contrl

![image-20220114144936007](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220114144936007.png)

