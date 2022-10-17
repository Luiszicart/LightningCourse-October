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
        color: 0xfffbb03b
      },
      Container: {
        rect: true,
        x: 400,
        y: 400,
        w: 500,
        color: 0xff808080,
        flex: {
          direction: 'row',
          padding: 20,
          wrap: true,
          justifyContent: 'space-evenly'
        },
        Box1: {
          type: Box,
          shade: 0xff809876
        },
        Box2: {
          type: Box,
          shade: 0xff807654
        },
        Box3: {
          type: Box,
          shade: 0xff804563
        },
        Box4: {
          type: Box,
          shade: 0xff808907
        }
      }     
    }
  }  
}
