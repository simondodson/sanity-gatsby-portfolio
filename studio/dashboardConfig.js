export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e005d0d64a22c55889759fa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-w6tdj6bz',
                  apiId: 'b5aa453d-5b08-40da-b5ef-3a84bc8eab66'
                },
                {
                  buildHookId: '5e005d0e23a0105d77502c0e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xyha1pv9',
                  apiId: '9020f97e-202e-4ad7-a16f-6417090d7fb2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simondodson/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xyha1pv9.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
