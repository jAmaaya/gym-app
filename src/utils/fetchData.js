export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '3bfee48d6bmsh375809cbeee224ep15a07ajsn40c172b474cf',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
  };


export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3bfee48d6bmsh375809cbeee224ep15a07ajsn40c172b474cf',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}