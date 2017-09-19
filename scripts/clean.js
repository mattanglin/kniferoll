import rimraf from 'rimraf';

// Remove all flattened dist folders from root
rimraf('./index.js', () => null);
rimraf('./Intro.md', () => null);
rimraf('./Wrapper', () => null);
rimraf('./components', () => null);
rimraf('./fonts', () => null);
rimraf('./themes', () => null);
rimraf('./styles', () => null);
rimraf('./transitions', () => null);
