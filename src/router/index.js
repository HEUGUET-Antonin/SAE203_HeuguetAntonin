import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import AproposView from '../views/AproposView.vue'
import ContactView from '../views/ContactView.vue'
import LaFeveView from '../views/LaFeveView.vue'
import GuideStyleView from '../views/GuideStyleView.vue'
import ConcertView from '../views/ConcertView.vue'
import Page404 from '../views/Page404.vue'
import CreateArtisteView from '../views/CreateArtisteView.vue'
import DeleteArtisteView from '../views/DeleteArtisteView.vue'
import EditArtisteView from '../views/EditArtisteView.vue'
import LexiqueView from '../views/LexiqueView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/createartiste',
      name: 'createartiste',
      component: CreateArtisteView
    },
    {
      path: '/deleteartiste/:id',
      name: 'deleteartiste',
      component: DeleteArtisteView
    },
    {
      path: '/editartiste/:id',
      name: 'editartiste',
      component: EditArtisteView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page404',
      component: Page404
    },
    {
      path: '/concert',
      name: 'concert',
      component: ConcertView
    },
    {
      path: '/lafeve',
      name: 'lafeve',
      component: LaFeveView
    },
    {
      path: '/style-guide',
      name: 'guidestyle',
      component: GuideStyleView
    },
    {
      path: '/programmation',
      name: 'programmation',
      component: ProgrammationView
    },
    {
      path: '/lexique',
      name: 'lexique',
      component: LexiqueView
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
