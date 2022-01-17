# cocosCreater第十节课

1、加载

```typescript
cc.director.load(SceneName)
//1.1静态加载
//通过脚本中添加一个节点（cc.Node，cc.prefab等），再把需要挂载的节点（资源）挂载到组件中节点元素中
//优点：写起来方便
//缺点：切换场景时间长 ，cpu占用会上升
//预加载场景
cc.director.preloadScene(SceneName)

//1.2动态加载
//预加载资源
//异步式的加载：用户边玩边加载
cc.loader.loadRes(ResName:string,callBackFunc(){})
//加载文件数组
cc.loader.loadResArray(url: string[], type: typeof cc.Asset, progressCallback: (completedCount: number, totalCount: number, item: any) => void, completeCallback: (error: Error, resource: any[]) => void): void
```

2、游戏的音乐音效

![image-20220117115757843](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20220117115757843.png)

```typescript
//节点组件audioResource
/**如上图所示，clip资源文件
Volume   0-1
play on load  是否在组件激活后自动播放音频
*/

//音乐的播放（背景音乐）
cc.audioEngine.playMusic（clip：AudioClip,loop:boolean）
/**
stopMusic    停止
pauseMusic   暂停
resumMusic   回复播放
getMusicVolume  获取游戏音乐的大小
setMusicVolume  设置游戏音乐的大小
isMusicPlaying  音乐是否在播放
*/

//音效播放
cc.audioEngine.playEffect(clip：AudioClip,loop:boolean)
/**
resumeEffect
getEffectsVolume
setEffectsVolume
*/
```

3、游戏数据的本地化存储

```
//设置
cc.sys.localStorage.setItem(key,value)
//获取
cc.sys.localStorage.getItem(key)
//删除,删除之后再去获取的话得到null值
cc.sys.localStorage.removeItem(key)
```

4、游戏音效管理类

5、游戏本地数据的管理类

