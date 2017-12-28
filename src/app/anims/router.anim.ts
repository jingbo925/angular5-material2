/**
 * Created by gy104 on 2017/12/27.
 */
import { trigger, state, transition, style, animate, keyframes} from "@angular/animations";
export const sildeToRight = trigger('routerAnim', [
  state('void', style({'position':'fixed', 'width': '100%', 'height':'80%'})),
  state('*', style({'position':'fixed', 'width': '100%', 'height':'80%'})),
  transition('void => *', [
    style({transform: 'translateX(-100%)'}),
    animate('500ms ease-in-out', style({transform: 'translateX(0)'}))
  ]),
  transition('* => void', [
    style({transform: 'translateX(0)'}),
    animate('500ms ease-in-out', style({transform: 'translateX(100%)'}))
  ]),
]);

/**
 *  void 表示空的装填
 *  * 表示切换到任意一种状态
 * */
