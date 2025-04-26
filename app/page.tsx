import { BadgeGenerator } from "@/components/badge-generator"

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">DeepWiki Badge Generator</h1>
          <p className="text-muted-foreground">Generate badges for your GitHub repositories on DeepWiki</p>
        </div>
        <BadgeGenerator />
      </div>
    </main>
  )
}
