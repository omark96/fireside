export type Categories = 'sveltekit' | 'svelte'

export type Post = {
    title: string
    slug: string
    month: string
    year: string
    description: string
    published: boolean
}