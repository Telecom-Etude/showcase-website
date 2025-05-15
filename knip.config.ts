import { KnipConfig } from 'knip';

const config: KnipConfig = {
    ignore: [
        'src/components/ui/**',
        'prisma/fill-slugs.ts',
        'prisma/seed.ts',
        '.github/workflows/*.yml',
    ],
    ignoreDependencies: ['eslint-config-next'],
};

export default config;
