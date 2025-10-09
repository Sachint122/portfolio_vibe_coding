export const fileSystem = {
  name: 'portfolio',
  type: 'folder',
  id: 'portfolio',
  expanded: true,
  children: [
    {
      id: 'about',
      name: 'about.js',
      type: 'file',
      language: 'javascript',
      icon: 'js',
      content: 'about'
    },
    {
      id: 'skills',
      name: 'skills.json',
      type: 'file',
      language: 'json',
      icon: 'json',
      content: 'skills'
    },
    {
      id: 'experience',
      name: 'experience.md',
      type: 'file',
      language: 'markdown',
      icon: 'md',
      content: 'experience'
    },
    {
      id: 'projects-folder',
      name: 'projects',
      type: 'folder',
      expanded: false,
      children: [
        {
          id: 'project-home-automation',
          name: 'home-automation.jsx',
          type: 'file',
          language: 'react',
          icon: 'react',
          content: 'project',
          projectId: 'home-automation'
        },
        {
          id: 'project-send-mail',
          name: 'send-mail-app.js',
          type: 'file',
          language: 'javascript',
          icon: 'js',
          content: 'project',
          projectId: 'send-mail-app'
        },
        {
          id: 'project-library',
          name: 'library-management.ts',
          type: 'file',
          language: 'typescript',
          icon: 'ts',
          content: 'project',
          projectId: 'library-management'
        }
      ]
    },
    {
      id: 'contact',
      name: 'contact.jsx',
      type: 'file',
      language: 'react',
      icon: 'react',
      content: 'contact'
    },
    {
      id: 'resume',
      name: 'resume.pdf',
      type: 'file',
      language: 'pdf',
      icon: 'pdf',
      content: 'resume'
    }
  ]
};
