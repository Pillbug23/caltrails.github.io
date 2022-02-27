import axios from 'axios';

export const getPlacesData = async (sw) => {
    try {
        const { data } = await axios.get('https://trailapi-trailapi.p.rapidapi.com/activity/', 
          {
            params: {
              lat: sw.lat,
              limit: '12',
              lon: sw.lng,
              radius: '10',
              'q-activities_activity_type_name_eq': 'hiking'
            },
            headers: {
              'x-rapidapi-key': '19c3948709msh555b77273198f2ap102f38jsn78f1f9fd6b2e',
              'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com',
            }
          });
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const getWeatherData = async (lat, lng) => {
  try {
    const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', 
    {
    params: {lon: lng,lat: lat},
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': '19c3948709msh555b77273198f2ap102f38jsn78f1f9fd6b2e'
      }
    });
    return data
  } catch (error) {
    console.log(error)
  }
}
