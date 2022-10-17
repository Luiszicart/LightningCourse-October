/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from '@lightningjs/sdk'
import { Box } from './components/Box'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Background: {
        rect: true,
        w: 1920,
        h: 1080,
        color: 0xff808907
      },
      Text: {
        x: 100,
        y: 100,
        text: {
          text: "Light Theme"
        },
      },
      Container: {
        x: 960,
        y: 540,
        mount: 0.5,
        flex: {},
        Box1: {
          type: Box,
          box: 1
        },
        Box2: {
          type: Box,
          box: 2
        }
      }
    }
  }

  _init() {
    this.theme = 'light'
  }

  _handleEnter() {
    if (this.theme == 'light') {
      this.theme = 'dark'
      this._setState('DarkTheme')
    } else {
      this.theme = 'light'
      this._setState('LightTheme')
    }
  }

  _handleLeft() {
    this._setState('Box1')
  }

  _handleRight() {
    this._setState('Box2')
  }

  _handleBack() {
    this._setState('app')
  }

  static _states() {
    return [
      class Box1 extends this {
        _getFocused() {
          return this.tag('Box1')
        }
      },
      class Box2 extends this {
        _getFocused() {
          return this.tag('Box2')
        }
      },
      class LightTheme extends this {
        $enter() {
          this.patch({
            Background: {
              color: 0xff809876
            },
            Text: {
              text: {
                text: 'Light Theme'
              }
            }
          })
        }
        $exit() {}
      },
      class DarkTheme extends this {
        $enter() {
          this.patch({
            Background: {
              color: 0xff807654
            },
            Text: {
              text: {
                text: 'Dark Theme'
              }
            }
          })
        }
        $exit() {}
      }
    ]
  }
}
