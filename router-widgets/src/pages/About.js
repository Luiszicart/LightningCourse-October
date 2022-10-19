import { Lightning, Router } from "@lightningjs/sdk"

export class About extends Lightning.Component {
    static _template() {
        return {
            Background: {
                rect: true,
                w: 1920,
                h: 1080,
                color: 0xff4cf671
            },
            Title: {
                x: 960,
                y: 100,
                mount: 0.5,
                text: {
                    text: 'About Page',
                    fontSize: 80
                }
            }
        }
    }

    _handleLeft() {
        Router.focusWidget('Menu')
    }

    set params({message}) {
        console.log('>>>>>>>>>>>>', message)
    }
}