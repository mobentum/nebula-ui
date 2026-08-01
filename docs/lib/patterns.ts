import { join } from 'path';
import { createContentLoader } from './content';

const contentDir = join(process.cwd(), 'content', 'patterns');
const loader = createContentLoader(contentDir);

export const getPatternPage = loader.getPage;
export const getPatternNavigation = loader.getNavigation;
export const getPatternPaths = loader.getPaths;
