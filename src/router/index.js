import Home from '../home/home'
import FindMusic from '../home/content/ContentRight/FindMusic'
import PodCast from '../home/content/ContentRight/PodCast'


let routes = [
    {
        path: '/',
        element:<Home></Home>,
        children: [
            {
                path: 'findmusic',
                element:<FindMusic></FindMusic>
            },
            {
                path: 'podcast',
                element:<PodCast></PodCast>
            }
        ]
    }
]


export default routes