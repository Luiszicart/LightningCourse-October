import { Home } from "../pages/Home";
import { Boot } from "../pages/Boot";
import { About } from "../pages/About";

export default {

    routes: [
        {
            path: '$', //Boot
            component: Boot
        },
        {
            path: 'home',
            component: Home,
            widgets: ['Menu']
        },
        {
            path: 'about',
            component: About,
            widgets: ['Menu']
        }
    ],

    afterEachRoute(to) {
        console.log('Usuario navego hacia:', to._hash)
    },

    // beforeEachRoute(from, to) {}
}