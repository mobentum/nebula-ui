import { join } from 'path';
import { createContentLoader } from './content';

const contentDir = join(process.cwd(), 'content', 'theme');
const loader = createContentLoader(contentDir);

export const getThemePage = loader.getPage;
export const getThemeNavigation = loader.getNavigation;
export const getThemePaths = loader.getPaths;
