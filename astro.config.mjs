// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ubuntu Pro Study',
			locales: {
				root: { label: '日本語', lang: 'ja' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/canonical/ubuntu-pro-client' },
			],
			sidebar: [
				{
					label: 'はじめに',
					items: [
						{ slug: 'index' },
					],
				},
				{
					label: '基礎編',
					items: [
						{ slug: 'basics/01-what-is-ubuntu-pro' },
						{ slug: 'basics/02-security-fundamentals' },
					],
				},
				{
					label: 'サービス詳解',
					items: [
						{ slug: 'services/03-esm' },
						{ slug: 'services/04-livepatch' },
						{ slug: 'services/05-fips' },
						{ slug: 'services/06-usg' },
						{ slug: 'services/07-other-services' },
					],
				},
				{
					label: '実践編',
					items: [
						{ slug: 'practical/08-comparison' },
						{ slug: 'practical/09-home-user-guide' },
					],
				},
			],
		}),
	],
});
