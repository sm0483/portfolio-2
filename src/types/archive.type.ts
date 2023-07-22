export type archiveType = {
    year: number
    project: string
    builtWith: string[]
    links?: {
        github?: string
        docs?: string
        live?: string
    }
}
