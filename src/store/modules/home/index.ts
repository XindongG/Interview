import {observable, action, configure} from 'mobx';
import remotedev from 'mobx-remotedev';

configure({
	enforceActions: 'observed',
	disableErrorBoundaries: true
});
/**
 * appstore为系统级store,用来处理app的常规数据
 */
@remotedev
class HomeStore {
  @observable num:string = '我是随机数';
  @observable title:string = '我是home页面';

  @observable count:number = 0;

  @action
  setAppName(num: string) {
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
export default new HomeStore();
