/**
 * Created by gy104 on 2017/12/27.
 */
import { trigger, state, transition, style, animate, keyframes, group} from "@angular/animations";
export const sildeToRight = trigger('routerAnim', [
  state('void', style({'position':'fixed', 'width': '100%', 'height':'80%'})),
  state('*', style({'position':'fixed', 'width': '100%', 'height':'80%'})),
  transition('void => *', [
    style({transform: 'translateX(-100%)',opacity:0}),
    group([
      animate('500ms ease-in-out', style({transform: 'translateX(0)'})),
      animate('300ms ease-in', style({opacity:1}))
    ])
  ]),
  transition('* => void', [
    style({transform: 'translateX(0)',opacity: 1}),
    group([
      animate('500ms ease-in-out', style({transform: 'translateX(100%)'})),
      animate('300ms ease-in', style({opacity:0}))
    ])
  ]),
]);

/**
 *  void 表示空的装填
 *  * 表示切换到任意一种状态
 * */
