import { Lightning, Router, Utils } from "@lightningjs/sdk"

export class Home extends Lightning.Component {
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
                    text: 'Home Page',
                    fontSize: 80
                }
            },
            NavIndicator: {
                x: 1800,
                y: 540,
                flex: {},
                mount: 0.5,
                Label: {
                    text: {
                        text: 'About'
                    }
                },
                Arrow: {
                    src: Utils.asset('images/arrow.png'),
                    rotation: Math.PI * 0.5
                }
            }
        }
    }

    pageTransition() {
        return 'left'
        // fade
        // right
        // crossFade
    }

    _handleRight() {
        Router.navigate('about', {message: 'testing route params'})
    }

    _handleUp() {
        this.animation.start()
    }

    _handleDown() {
        this.animation.pause()
    }

    _init() {
        this.animation = this.tag('Title').animation({
            duration: 5,
            repeat: -1,
            actions: [
                {
                    p: 'text.text',
                    v: {
                        0: "Its starting",
                        0.33: "Has began",
                        0.66: "Its finishing"
                    }
                },
                {
                    p: 'y',
                    v: {
                        0: 600,
                        0.5: 980,
                        1: 600
                    }
                }
            ]
        })
    }
}