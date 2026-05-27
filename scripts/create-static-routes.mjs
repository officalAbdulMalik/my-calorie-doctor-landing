import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const distDir = join(scriptDir, '../dist');
const routes = ['contact-support'];

await Promise.all(
  routes.map(async (route) => {
    const routeDir = join(distDir, route);
    await mkdir(routeDir, { recursive: true });
    await copyFile(join(distDir, 'index.html'), join(routeDir, 'index.html'));
  }),
);
