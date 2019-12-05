//na1.api.riotgames.com
$(document).ready(function(){
  function getChallengerTier() {
    const apiKey = "RGAPI-d895e4c6-3835-4a3f-8cf7-afa5de6299b0";
    const url = "https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5";
    const config = {
      headers: {'Access-Control-Allow-Origin': '*'}
    };


    axios.get(url,config).then(response => console.log(response));
  }

  getChallengerTier();
})
