import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import Apply from './views/Apply.vue'
import NotFound from './views/NotFound.vue'
import Schedule from './views/Schedule.vue'
import Gallery from './views/Gallery.vue'

const generateTags = (name, content) => {
    return {
        name: name,
        content: content,
    }
}

const defaultTags = () => {
    const tags = []
    tags.push(
        generateTags(
            'keywords',
            'EJx, East Java Exploration, Explore East Java, OIA, UM, Universitas Negeri Malang, The Learning University, Kampus Merdeka',
        )
    )

    tags.push(
        generateTags(
            'author',
            'Office of International Affairs Universitas Negeri Malang',
        )
    )

    return tags
}

const homeTags = defaultTags()
homeTags.push(
    generateTags(
        'description',
        'Home of East Java Exploration (EJx)'
    )
)

const router = createRouter({
    mode: 'hash',
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'REALS',
        component: Home,
        meta: {
            title: 'Home - East Java Exploration',
            metaTags: homeTags
        }
    }, {
        path: '/schedule',
        name: 'Schedule',
        component: Schedule,
        meta: {
            title: 'Time Schedule - East Java Exploration',
            metaTags: homeTags
        }
    }/* , {
        path: '/apply',
        name: 'Application',
        component: Apply,
        meta: {
            title: 'Apply for REALS - Kemitraan Negara Berkembang',
            metaTags: homeTags
        }
    }, {
        path: '/galleries',
        name: 'Galleries',
        component: Gallery,
        meta: {
            title: 'Galleries - Kemitraan Negara Berkembang',
            metaTags: homeTags
        }
    } */, {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: NotFound,
        meta: {
            title: 'Page not found',
            metaTags: homeTags
        }
    }]
})

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  
    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  
    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) {
        document.title = nearestWithTitle.meta.title
    } else if(previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title
    }
  
    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))
  
    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) return next()
  
    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta')
        
        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key])
        })
      
        // We use this to track which meta tags we create so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '')
        return tag
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))
  
    next()
})

export default router
