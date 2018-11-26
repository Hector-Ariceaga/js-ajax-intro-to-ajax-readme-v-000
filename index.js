function getRepositories() {
  const req = new XMLHttpRequest();
  req.open('GET', 'https://api.github.comm/users/octocat/repos');
  req.send();
}