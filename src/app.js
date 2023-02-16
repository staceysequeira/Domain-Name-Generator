window.onload = () => {
  let pronoun = ["the", "our"];
  let adj = ["crafty", "loud"];
  let noun = ["platypus", "mime"];
  let domainNames = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        domainNames.push(`${pronoun[i]}${adj[j]}${noun[k]}.com`);
      }
    }
  }
  function adddomainNames() {
    let template = domainNames.map(element => `<li>${element}</li>`).join("\n");
    document.querySelector("ul").innerHTML = template;
  }
  adddomainNames();
};
