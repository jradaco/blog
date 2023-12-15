import {GITHUB_USER, GITHUB_REPO} from "$env/static/private"
import fetcher from "$lib/fetcher"
import { json } from "@sveltejs/kit"

const query = `query GetDiscussion($number: Int!) {
  repository(owner:"${GITHUB_USER}",name: "${GITHUB_REPO}") {
    discussion(number: $number) {
  		number
      bodyHTML
      title
    }
  }
}`

export const GET = async( {params: {number}, fetch, setHeaders}) => {
  const variables = {
    number: parseInt(number),
  };
  try {
    const {repository: {discussion}} = await fetcher(query, variables, fetch)

    setHeaders({
        "cache-control": "max-age=600",
    });

    return json(discussion);
  } catch (error) {
    console.log(error)
  }
}