const getRepos = require('../src/exercise4')

describe('Searching on Trybe repositories on GitHub', () => {
  it('should contain the repository sd-01-week4-5-project-todo-list and sd-01-week4-5-project-meme-generator', async () => {
    const reposFromUrl = await getRepos('https://api.github.com/orgs/tryber/repos')
    const expected = ['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-meme-generator'];
    expect(reposFromUrl).toEqual(expect.arrayContaining(expected));
  })
})