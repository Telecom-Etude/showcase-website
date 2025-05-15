import { KnipConfig } from 'knip';

const config: KnipConfig = {
    ignore: ['src/components/ui/**', 'prisma/fill-slug.ts', 'prisma/seed.ts'],
    ignoreDependencies: ['eslint-config-next'],
};

export default config;
