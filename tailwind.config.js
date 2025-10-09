/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // GitHub Dark Theme (Original)
        'vscode-bg': 'var(--color-bg)',
        'vscode-sidebar': 'var(--color-sidebar)',
        'vscode-header': 'var(--color-header)',
        'vscode-border': 'var(--color-border)',
        'vscode-text': 'var(--color-text)',
        'vscode-accent': 'var(--color-accent)',
        'vscode-hover': 'var(--color-hover)',
        'vscode-selection': 'var(--color-selection)',
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
