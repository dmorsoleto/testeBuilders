import { SPLASH_ROUTES } from '../features/Splash/navigation'
import { HOME_ROUTES } from '../features/Home/navigation'

const routes = {
    App: {
        itself: 'App',
        Splash: SPLASH_ROUTES,
        Home: HOME_ROUTES
    }
} as const

export default routes