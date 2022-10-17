import { Lightning } from "@lightningjs/sdk";

export class Box extends Lightning.Component {
    static _template() {
        return {
          rect: true,
          w: 150, 
          h: 150,
          // Method 1 (new one)
          // color: this.bindProp('shade'),
          flexItem: {
            margin: 20
          }
        }
    }

    // Method 2 (old one)
    _init() {
        this.patch({
            color: this.shade
        })
    }

}