import { convertKelvinToCelcius, convertKelvinToFarenheit } from './converter';

describe('Kelvin to Celcius', () => {
  it('given 0 should return -273', () => {
    expect(convertKelvinToCelcius(0)).toBe(-273);
  });
  it('given 10 should return -263', () => {
    expect(convertKelvinToCelcius(10)).toBe(-263);
  });
  it('given -10 should return -283', () => {
    expect(convertKelvinToCelcius(-10)).toBe(-283);
  });
});

describe('Kelvin to Farenheit', () => {
  it('given 0 should return -459', () => {
    expect(convertKelvinToFarenheit(0)).toBe(-459);
  });
  it('given 10 should return -441', () => {
    expect(convertKelvinToFarenheit(10)).toBe(-441);
  });
  it('given -10 should return -477', () => {
    expect(convertKelvinToFarenheit(-10)).toBe(-477);
  });
});
