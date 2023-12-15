
import fetcher from "$lib/fetcher"
import slugify from '@sindresorhus/slugify';
import {GITHUB_USER, GITHUB_REPO} from "$env/static/private"

const query = `query {
  repository(owner:"${GITHUB_USER}",name: "${GITHUB_REPO}") {
    discussions(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
      edges {
        node {
          id
          title
          body
          number
          createdAt
        }
      }
    }
  }
}`

/** @type {import('./$types').PageLoad} */
export async function load({fetch}) {
    const res = await fetcher(query, {}, fetch)
    const { 
        repository: {
          discussions: {
            edges: [...nodes]
          }
        }
    } = res
    nodes.map( (node) => {
      node.node.slug = slugify (node.node.title)
      node.node.abstract = node.node.body.substring(0, 50) + " ...";
    })
    return {
      nodes,
    };
}