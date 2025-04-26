export async function checkIfRepositoryExists({ owner, repo }: { owner: string; repo: string }) {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    method: "GET",
 });
  if (!res.ok) {
    return { error: true, success: null }
  }
  return { success: true, error: null }
}
