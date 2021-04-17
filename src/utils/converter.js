export const convertKelvinToCelcius = (kelvin) => Math.round(kelvin - 273.15);

export const convertKelvinToFarenheit = (kelvin) => {
  return Math.round(convertKelvinToCelcius(kelvin) * (9 / 5) + 32);
};
