"use client"

import { useState } from "react"
import { CheckIcon, CopyIcon, GithubIcon, LoaderIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { checkIfRepositoryExists } from "@/lib/github"
import { base64DevinIcon } from "@/lib/deepwiki"

type RepoStatus = "idle" | "loading" | "exists" | "not-exists" | "error"

export function BadgeGenerator() {
  const [owner, setOwner] = useState("")
  const [repo, setRepo] = useState("")
  const [status, setStatus] = useState<RepoStatus>("idle")
  const [copied, setCopied] = useState({ markdown: false, html: false })
  const { toast } = useToast()
  const [urlError, setUrlError] = useState<string | null>(null)

  const parseGitHubUrl = (url: string) => {
    if(status !== "idle"){
      setStatus("idle")
    }

    try {
      // Reset error state
      setUrlError(null)

      // Handle empty input
      if (!url.trim()) {
        setOwner("")
        setRepo("")
        return
      }

      // Check if it's a GitHub URL
      if (url.includes("github.com")) {
        // Try to parse the URL
        const githubRegex = /github\.com\/([^/]+)\/([^/]+)/
        const match = url.match(githubRegex)

        if (match && match.length >= 3) {
          const extractedOwner = match[1]
          // Remove any trailing parts like /tree/main, /issues, etc.
          const extractedRepo = match[2].split("/")[0]

          setOwner(extractedOwner)
          setRepo(extractedRepo)
        } else {
          setUrlError("Invalid GitHub repository URL format")
        }
      } else {
        // If it's not a GitHub URL, check if it's in the format "owner/repo"
        const simpleRegex = /^([^/]+)\/([^/]+)$/
        const simpleMatch = url.trim().match(simpleRegex)

        if (simpleMatch && simpleMatch.length >= 3) {
          setOwner(simpleMatch[1])
          setRepo(simpleMatch[2])
        } else {
          // Not a GitHub URL or owner/repo format
          setUrlError("Please enter a valid GitHub URL (e.g., https://github.com/owner/repo)")
          setOwner("")
          setRepo("")
        }
      }
    } catch (error) {
      console.error("Error parsing GitHub URL:", error)
      setUrlError("Error parsing URL")
    }
  }

  const checkRepository = async () => {
    if (!owner || !repo) {
      toast({
        title: "Missing information",
        description: "Please enter both owner and repository name",
        variant: "destructive",
      })
      return
    }

    setStatus("loading")

    const res = await checkIfRepositoryExists({ owner, repo });
    if(res.error){
      setStatus("not-exists")
      toast({
        title: "Repository not found or private",
        description: "The repository is either private or does not exist on DeepWiki",
        variant: "destructive",
      })
      return
    }
    if(res.success){
      setStatus("exists")
    }
  }

  const copyToClipboard = (text: string, type: "markdown" | "html") => {
    navigator.clipboard.writeText(text)
    setCopied({ ...copied, [type]: true })

    toast({
      title: "Copied to clipboard",
      description: `The ${type} code has been copied to your clipboard`,
    })

    setTimeout(() => {
      setCopied({ ...copied, [type]: false })
    }, 2000)
  }

  /**
  * underscore to double underscore
  * dash to doubledash
  */
  const convertText = (text: string) => {
    return text
      .replace(/_/g, "__")
      .replace(/-/g, "--")
 }

  const badgeUrl = `https://img.shields.io/badge/DeepWiki-${convertText(owner ?? "owner")}%2F${convertText(repo ?? "repo")}-blue.svg?logo=${base64DevinIcon()}`
  const deepWikiUrl = `https://deepwiki.com/${owner}/${repo}`

  const markdownCode = `[![DeepWiki](${badgeUrl})](${deepWikiUrl})`
  const htmlCode = `<a href="${deepWikiUrl}"><img src="${badgeUrl}" alt="DeepWiki"></a>`

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Generate Your Badge</CardTitle>
        <CardDescription>Generate badges from your GitHub repositories</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="repoUrl" className="text-sm font-medium">
            GitHub Repository URL
          </label>
          <div className="flex items-center space-x-2">
            <GithubIcon className="h-4 w-4 text-muted-foreground" />
            <Input
              id="repoUrl"
              placeholder="https://github.com/owner/repo"
              onChange={(e) => parseGitHubUrl(e.target.value)}
              className={urlError ? "border-red-500 focus-visible:ring-red-500" : ""}
            />
          </div>
          {urlError && <p className="text-sm text-red-500 mt-1">{urlError}</p>}
        </div>

        {(owner || repo) && (
          <div className="mt-2 flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Detected:</span>
            <Badge variant="outline" className="font-mono">
              {owner}/{repo}
            </Badge>
          </div>
        )}

        <Button
          onClick={checkRepository}
          disabled={status === "loading" || !!urlError || (!owner && !repo)}
          className="w-full"
        >
          {status === "loading" ? (
            <>
              <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
              Checking Repository
            </>
          ) : (
              "Generate Badge from URL"
            )}
        </Button>

        {status === "exists" && (
          <div className="space-y-4">
            <div className="flex items-center justify-center py-4">
              <Badge variant="outline" className="text-base py-1 px-3">
                <a href={deepWikiUrl} target="_blank" rel="noopener noreferrer">
                  <img src={badgeUrl || "/placeholder.svg"} alt="DeepWiki Badge" />
                </a>
              </Badge>
            </div>

            <Separator />

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Embed this badge in your README</h3>

              <Tabs defaultValue="markdown" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="markdown">Markdown</TabsTrigger>
                  <TabsTrigger value="html">HTML</TabsTrigger>
                </TabsList>
                <TabsContent value="markdown" className="space-y-2">
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      <code>{markdownCode}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(markdownCode, "markdown")}
                    >
                      {copied.markdown ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="html" className="space-y-2">
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      <code>{htmlCode}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(htmlCode, "html")}
                    >
                      {copied.html ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}

        {status === "not-exists" && (
          <div className="text-center p-4 border rounded-md bg-muted">
            <p className="text-destructive font-medium">
              Repository not found or private
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Make sure the repository is public and exists on GitHub.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

