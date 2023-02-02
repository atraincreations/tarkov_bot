function maps(name) {
fetch('https://api.tarkov.dev/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({query: `{
    maps(name: "${name}") {
        id
        name
        normalizedName
        raidDuration
        players
        wiki
    }
}`})
})
  .then(r => r.json())
  .then(data => {
    const resData = JSON.stringify(data.data.maps[0]);
    console.log(resData);
    document.getElementById('data').innerHTML = resData;
    console.log(data);
    document.getElementById('raid-duration').innerHTML = data.data.maps[0].raidDuration;
    console.log(JSON.stringify(data.data.maps[0].wiki));
  });

}

maps('customs'.toLowerCase());

  /*
    body: JSON.stringify({query: `{
    items(name: "m855a1") {
        id
        name
        shortName
        basePrice
        sellFor
        bartersUsing
    }
}`})
*/