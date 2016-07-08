import { configure } from '@kadira/storybook';
import '../assets/app.css';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
