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
import { getPeople } from './lib/Api'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        color: 0xfffbb03b,
        src: Utils.asset('images/background.png'),
      },
      Results: {
        rect: true,
        color: 0xff808080,
        x: 300,
        y: 200,
        flex: {
          direction: 'column',
          padding: 20
        }
      }
    }
  }

  async addDataToScreen(url) {
    let data = await getPeople(url)

    this.next = data.next

    let people = data.results.map(person => {
      return {
        text: {
          text: person.name
        }
      }
    })

    let tempChildren = this.tag('Results').children

    this.tag('Results').patch({
      children: tempChildren.concat(people)
    })
  }

  _handleDown() {
    this.tag('Results').patch({
      y: this.tag('Results').y - 20
    })
  }

  _handleUp() {
    this.tag('Results').patch({
      y: this.tag('Results').y + 20
    })
  }

  _handleEnter() {
    this.addDataToScreen(this.next)
  }

  _init() {
    this.addDataToScreen('https://swapi.dev/api/people')
  }
}
