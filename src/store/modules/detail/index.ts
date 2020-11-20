import {observable, action, configure} from 'mobx';
// import remotedev from 'mobx-remotedev';
/**
 * appstore为系统级store,用来处理app的常规数据
 */
configure({
	enforceActions: 'observed',
	disableErrorBoundaries: true
});
// @remotedev
class DetailStore {
  @observable abc:string = '我是随机数';
  @observable title:string = '我是home页面';
  @observable count:number = 0;
  @observable num:number = 0;
  @action
  setAppName(num: number):void {
  	this.num = num;
  }

  @action
  addCount() {
  	this.count++;
  }
  @action
  setTitle(value:string) {
  	this.title = value;
  }
}
const detailStore = new DetailStore();
export default detailStore;
