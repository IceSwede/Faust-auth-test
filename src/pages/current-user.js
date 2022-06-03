import { client } from 'client';

export default function CurrentUser() {
  const { isLoading, isAuthenticated, authResult } = client.auth.useAuth({
    shouldRedirect: false,
  });
  const viewer = client.auth.useQuery()?.viewer;

  return (
    <>
      {isAuthenticated === true && (
        <p>The current logged in user is {viewer?.username}</p>
      )}

      {isAuthenticated === false && (
        <p>There is currently no logged in user. Please login.</p>
      )}
    </>
  );
}
