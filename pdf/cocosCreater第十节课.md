# cocosCreater第十节课

1、动态加载

```typescript
cc.director.load(SceneName)
//1.1静态加载
//通过脚本中添加一个节点（cc.Node，cc.prefab等），再把需要挂载的节点（资源）挂载到组件中节点元素中
//优点：写起来方便
//缺点：切换场景时间长 ，cpu占用会上升
//预加载场景
cc.director.preloadScene(SceneName)
//预加载资源
cc.loader.loadRes(ResName:string,callBackFunc(){})
```

2、游戏的音乐音效

```typescript
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

*/
```

3、游戏数据的本地化存储

4、游戏音效管理类

5、游戏本地数据的管理类