/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // VS Code theme colors (will use CSS variables)
        'vscode-bg': 'var(--bg-primary)',
        'vscode-sidebar': 'var(--bg-sidebar)',
        'vscode-editor': 'var(--bg-editor)',
        'vscode-text': 'var(--text-primary)',
        'vscode-accent': 'var(--color-accent)',
        'vscode-border': 'var(--color-border)',
        'vscode-hover': 'var(--color-hover)',
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
        sans: ['Inter', 'SF Pro', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
