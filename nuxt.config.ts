// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  vue: {
    compilerOptions: {
      // Workaround to suppress warnings on custom elements
      // Ref: https://github.com/nuxt/content/issues/949
      // Ref: https://github.com/nuxt/content/issues/1774
      isCustomElement: (tag) => {
        const tags = [
          'math',
          'annotation',
          'semantics',
          'mtext',
          'mn',
          'mo',
          'mi',
          'mspace',
          'mover',
          'munder',
          'munderover',
          'msup',
          'msub',
          'msubsup',
          'mfrac',
          'mroot',
          'msqrt',
          'mtable',
          'mtr',
          'mtd',
          'mlabeledtr',
          'mrow',
          'menclose',
          'mstyle',
          'mpadded',
          'mphantom',
          'mglyph',
          'svg',
          'line',
          'path']
        return tags.includes(tag.toLowerCase())
      }
    }
  },
  content: {
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: [['rehype-katex', {
        macros: {
          '\\eps': '\\varepsilon'
        }
      }]]
    }
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.webp' }],
      titleTemplate: '%s | UC Math Qualifying Exams'
    }
  }
})
