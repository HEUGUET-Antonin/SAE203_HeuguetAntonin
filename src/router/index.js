import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import AproposView from '../views/AproposView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/programmation',
      name: 'programmation',
      component: ProgrammationView
    },
    {
      path: '/mentionslegales',
      name: 'mentionslegales',
      component: MentionsLegalesView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/artistes',
      name: 'artistes',
      component: ArtistesView
    },
    {
      path: '/apropos',
      name: 'apropos',
      component: AproposView
    },

  ]
})

export default router
