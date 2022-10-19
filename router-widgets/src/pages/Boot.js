import { Lightning, Router } from "@lightningjs/sdk"

export class Boot extends Lightning.Component {
    static _template() {
        return {
            Background: {
                rect: true,
                w: 1920,
                h: 1080,
                color: 0xff53badf
            },
            Title: {
                x: 960,
                y: 100,
                mount: 0.5,
                text: {
                    text: 'Boot Page',
                    fontSize: 80
                }
            },
            Text: {
                x: 960,
                y: 800,
                mount: 0.5,
                text: {
                    text: '[ press enter to continue ]'
                }
            }
        }
    }

    _handleEnter() {
        Router.navigate('home')
    }
}