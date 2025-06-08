import { err, ok, type Result } from 'neverthrow';

export async function checkIfRepositoryExists({
	owner,
	repo,
}: { owner: string; repo: string }): Promise<
		Result<{ owner: string; repo: string }, Error>
	> {
	const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
		method: 'GET',
	});
	if (!res.ok) {
		return err(new Error('Repository not found'));
	}
	return ok({ owner, repo });
}
