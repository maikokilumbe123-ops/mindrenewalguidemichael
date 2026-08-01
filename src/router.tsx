import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })

  return router
}
<meta name="google-site-verification" content="1q8gHMaA1ebvtilOwQDzZFpwvlmCRRb7lgtE_ITpA60" />
