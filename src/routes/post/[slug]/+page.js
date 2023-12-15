/** @type {import('./$types').PageServerLoad} */
export async function load( {params: {slug}, fetch}) {
  const number = slug.split("-").pop()
  try {
    const res = await fetch(`/api/post/${number}.json`)
    const discussion = await res.json();
    return { discussion };
  } catch (error) {
    console.log(error)
  }
}