/* eslint-disable */
export default function correctData(data) {
  const [followers, following] = [data.followers, data.following];
  const neededData = {
    Profile: data.html_url,
    Username: data.login,
    Bio: data.bio || `${data.login} has no bio`,
    Location: data.location || 'Earth',
    Company: data.company || `Probably, ${data.login} is self-employed, cz there is no information about the company he works in`,
    'Amount of public repositories': data.public_repos,
    'Followers: ': followers,
    'Following: ': following,
  }

  let finalData = []
  for (let [key, value] of Object.entries(neededData)) {
    finalData.push([key, value]);
  }

  return finalData;
}
