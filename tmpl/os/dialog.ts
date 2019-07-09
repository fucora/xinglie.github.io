import Magix, { Magix5 } from '../lib/magix';
import Dragdrop from '../gallery/mx-dragdrop/index';
import DialogCtrl from './ctrl';
import Exchange from './exchange';

let WinShowState = 1;
let WinHideState = 2;
let WinMaxState = 4;
let WinNormalState = 8;
let MinSize = 50;
'ref@./theme/index.css';
export default Magix.View.extend({
    tmpl: '@./dialog.html',
    mixins: [Dragdrop],
    init(data) {
        this.assign(data);
        let state = data.maxState ? WinMaxState : WinNormalState;
        state |= WinShowState;
        console.log(state);
        this['@{state}'] = state;
        Exchange.fire('@{when.dialog.add}', {
            options: data
        });
    },
    assign(data) {
        this.set(data);
        return true;
    },
    render() {
        this.digest();
    },
    '@{show.ui}'() {
        let state = this['@{state}'];
        if (state & WinHideState) {
            this['@{state}'] = state ^ WinHideState | WinShowState;
            this.root.style.display = '';
        }
    },
    '@{hide.ui}'() {
        let state = this['@{state}'];
        if (state & WinShowState) {
            this['@{state}'] = state ^ WinShowState | WinHideState;
            DialogCtrl["@{hide}"](this.get('appId'));
            Exchange.fire('@{when.dialog.min}', {
                id: this.get('appId')
            });
            this.root.style.display = 'none';
        }
    },
    '@{active}'() {
        this.digest({
            active: true
        });
        this['@{show.ui}']();
        Exchange.fire('@{when.dialog.active}', {
            id: this.get('appId')
        });
    },
    '@{deactive}'() {
        this.digest({
            active: false
        });
        Exchange.fire('@{when.dialog.deactive}', {
            id: this.get('appId')
        });
    },
    '@{show.mask}'() {
        let n = Magix.node(this.id + '_mk');
        if (n) {
            n.style.display = 'block';
        }
    },
    '@{hide.mask}'() {
        let n = Magix.node(this.id + '_mk');
        if (n) {
            n.style.display = 'none';
        }
    },
    '@{toggle.normal.max.state}'() {
        let state = this['@{state}'];
        if (state & WinMaxState) {
            this['@{state}'] = state ^ WinMaxState | WinNormalState;
            this.digest({
                maxState: false
            });
        } else {
            this['@{state}'] = state ^ WinNormalState | WinMaxState;
            this.digest({
                maxState: true
            });
        }
    },
    '@{min.ui}<click>'() {
        this['@{hide.ui}']();
    },
    '@{toggle.normal}<click>'() {
        this['@{toggle.normal.max.state}']();
    },
    '@{close}<click>'(e: MouseEvent) {
        DialogCtrl["@{remove}"](this.get('appId'));
        let root = this.root;
        this.owner.unmountVframe();
        root.parentNode.removeChild(root);
        Exchange.fire('@{when.dialog.remove}', {
            id: this.get('appId')
        });
    },
    '@{mouse.active}<mousedown>'() {
        DialogCtrl["@{active}"](this.get('appId'));
    },
    '@{drag}<mousedown>'(e: Magix5.MagixMouseEvent) {
        let root = getComputedStyle(document.body);
        let taskbarHeight = parseInt(root.getPropertyValue('@scoped.style:--__global__taskbar_height'));
        let viewportWidth = document.body.clientWidth;
        let viewportHeight = document.body.clientHeight - taskbarHeight;
        let rootStyle = Magix.node(this.id + '_d').style;
        let { left, top, width } = this.get();
        let moved = false;
        this['@{show.mask}']();
        this['@{drag.drop}'](e, (ev: MouseEvent) => {
            moved = true;
            let offsetX = ev.pageX - e.pageX;
            let newX = offsetX + left;
            if (newX < MinSize - width) {
                newX = MinSize - width;
            } else if (newX > viewportWidth - MinSize) {
                newX = viewportWidth - MinSize;
            }
            let offsetY = ev.pageY - e.pageY;
            let newY = offsetY + top;
            if (newY < 0) {
                newY = 0;
            } else if (newY > viewportHeight - MinSize + taskbarHeight) {
                newY = viewportHeight - MinSize + taskbarHeight;
            }
            rootStyle.left = newX + 'px';
            rootStyle.top = newY + 'px';
            this.set({
                left: newX,
                top: newY
            });
        }, ev => {
            this['@{hide.mask}']();
            if (!moved && this.get('max')) {
                let now = Date.now();
                if (this['@{last.mouse.up.time}']) {
                    let diff = now - this['@{last.mouse.up.time}'];
                    if (diff < 300) {
                        this['@{last.mouse.up.time}'] = '';
                        this['@{toggle.normal.max.state}']();
                    } else {
                        this['@{last.mouse.up.time}'] = now;
                    }
                } else {
                    this['@{last.mouse.up.time}'] = now;
                }
            }
        });
    },
    '@{start.resize}<mousedown>'(e: Magix5.MagixMouseEvent) {
        let rootStyle = Magix.node(this.id + '_d').style;
        let { width, height, minWidth, minHeight } = this.get();
        this['@{show.mask}']();
        this['@{drag.drop}'](e, (ev: MouseEvent) => {
            let newWidth = ev.pageX - e.pageX + width;
            if (newWidth < minWidth) {
                newWidth = minWidth;
            }
            let newHeight = ev.pageY - e.pageY + height;
            if (newHeight < minHeight) {
                newHeight = minHeight;
            }
            rootStyle.width = newWidth + 'px';
            rootStyle.height = newHeight + 'px';
            this.set({
                width: newWidth,
                height: newHeight
            });
        }, () => {
            this['@{hide.mask}']();
        });
    }
});