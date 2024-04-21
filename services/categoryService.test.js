import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchCategory, fetchCategories } from './categoryService';

describe('fetchCategory', () => {
  const mockResponse = { data: { your: 'category data' } };
  const id = 'some-id';

  it('fetches category data successfully', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet(`https://pokeapi.co/api/v2/type/${id}`).reply(200, mockResponse);

    const categoryData = await fetchCategory(id);

    expect(categoryData).toEqual(mockResponse);
  });

  it('throws an error when fetching category data fails', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet(`https://pokeapi.co/api/v2/type/${id}`).reply(404, { message: 'Not Found' });

    await expect(fetchCategory(id)).rejects.toThrowError('Request failed with status code 404');
  });
});

describe('fetchCategories', () => {
  const mockResponse = { data: { results: [{ name: 'category1' }, { name: 'category2' }] } };

  it('fetches categories successfully', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet('https://pokeapi.co/api/v2/type').reply(200, mockResponse.data);

    const categories = await fetchCategories();
    expect(categories).toEqual(mockResponse.data.results);
  });

  it('throws an error when fetching categories fails', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet('https://pokeapi.co/api/v2/type').reply(404, { message: 'Not Found' });

    await expect(fetchCategories()).rejects.toThrowError('Failed to fetch categories: Request failed with status code 404');
  });
});
