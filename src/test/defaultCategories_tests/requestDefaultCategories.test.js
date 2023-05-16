import axios from 'axios';
import { requestDefaultCategories } from '../../app/api/defaultCategoriesAPI';
import mockData from './mockCategoriesData';

jest.mock('axios');

describe('requestDefaultCategories', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch default categories and return data', async () => {
    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await requestDefaultCategories();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_BACKEND_URL_NO_API}/default_categories`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    expect(result).toEqual(mockData);
  });

  it('should return errors if the API call fails', async () => {
    const mockError = { response: { data: { message: 'Error fetching default categories' } } };
    axios.get.mockRejectedValueOnce(mockError);

    const result = await requestDefaultCategories();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(`${process.env.REACT_APP_BACKEND_URL_NO_API}/default_categories`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    expect(result).toEqual(mockError.response.data);
  });
});
