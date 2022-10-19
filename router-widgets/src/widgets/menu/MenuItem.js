import { Lightning } from "@lightningjs/sdk";

export class MenuItem extends Lightning.Component {
    static _template() {
        return {
            h: 100,
            alpha: 0.5, // Opacity
            text: {
                text: this.bindProp('pageName')
            }
        }
    }

    _focus() {
        this.patch({
            alpha: 1
        })
    }

    _unfocus() {
        this.patch({
            alpha: 0.5
        })
    }
}