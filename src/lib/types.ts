export type Categories = 'sveltekit' | 'svelte'

export type Post = {
    title: string
    slug: string
    date: string
    description: string
    published: boolean
}