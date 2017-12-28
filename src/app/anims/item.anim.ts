/**
 * Created by gy104 on 2017/12/27.
 */
import { trigger, state, transition, style, animate, keyframes} from "@angular/animations";
export const itemAnim = trigger('item', [
  state('int', style({'border-left-width':'3px'})),
  state('out', style({'border-left-width':'8px'})),
  transition('out => in', animate('100ms ease-in')),
  transition('in => out', animate('100ms ease-out')),
]);
